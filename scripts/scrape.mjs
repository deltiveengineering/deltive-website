import fs from 'fs';
import path from 'path';
import https from 'https';
import dotenv from 'dotenv';

// Load variables from .env
dotenv.config();

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;

const urls = [
  'https://www.deltiveengineering.com/',
  'https://www.deltiveengineering.com/our-projects',
  'https://www.deltiveengineering.com/services',
  'https://www.deltiveengineering.com/portfolio-collections/featured/booklets',
  'https://www.deltiveengineering.com/portfolio-collections/featured/cards',
  'https://www.deltiveengineering.com/portfolio-collections/our-projects/roterend-logo-met-gei%CC%88ntegreerde-leds',
  'https://www.deltiveengineering.com/portfolio-collections/our-projects/packaging',
  'https://www.deltiveengineering.com/portfolio-collections/our-projects/banners'
];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(dest))
           .on('error', reject)
           .once('close', () => resolve(dest));
      } else {
        res.resume();
        reject(new Error(`Request Failed With ${url}. Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function scrapeImages() {
  console.log("Starting Firecrawl scrapers via direct fetch...");
  const extractedImages = new Set();
  
  for (const url of urls) {
    console.log(`Scraping ${url}...`);
    try {
      const resp = await fetch('https://api.firecrawl.dev/v1/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${FIRECRAWL_API_KEY}`
        },
        body: JSON.stringify({
          url: url,
          formats: ['html'] // Wait for JS and grab final DOM
        })
      });
      const data = await resp.json();
      if (data.success && data.data && data.data.html) {
          const wixImages = data.data.html.match(/wixstatic\.com\/media\/[a-zA-Z0-9_\-~]+(\.jpg|\.jpeg|\.png|\.webp|\.svg)/gi);
          if (wixImages) {
              wixImages.forEach(img => extractedImages.add(img));
          }
      } else {
          console.error(`Failed to scrape ${url}:`, data.error || 'Unknown error');
      }
    } catch (e) {
      console.error(`Fetch error on ${url}`, e.message);
    }
  }

  console.log(`Found ${extractedImages.size} unique images. Downloading...`);
  const outDir = path.resolve(process.cwd(), 'public/images/scraped');
  fs.mkdirSync(outDir, { recursive: true });

  let i = 0;
  for (const imgPath of extractedImages) {
    let rawPath = imgPath.replace('https://', '').replace('http://', '');
    if (rawPath.startsWith('wixstatic.com')) {
        rawPath = 'static.' + rawPath;
    }
    const correctUrl = `https://${rawPath}`;
    const ext = path.extname(imgPath);
    const filename = `image-${String(i++).padStart(2, '0')}${ext}`;
    console.log(`Downloading ${correctUrl} to ${filename}`);
    try {
      await downloadImage(correctUrl, path.join(outDir, filename));
    } catch (err) {
      console.error(`Error downloading ${correctUrl}`, err.message);
    }
  }
}

scrapeImages().then(() => console.log('Done'));
