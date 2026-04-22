# EXECUTIVE SUMMARY
Our goal is to faithfully migrate the Deltive Engineering website from its current Wix foundation to a scalable, production-ready Next.js 14 App Router application deployed on Vercel. This is a high-fidelity rebuild focused on preserving the existing brand aesthetics, content, and structure while fundamentally upgrading the underlying technology. We will leverage Tailwind CSS for styling, extract physical image assets from Wix (using direct DOM parsing and a Firecrawl fallback if needed), and eradicate existing template artifacts (e.g., messy Wix portfolio URLs) by implementing clean routes and strict 301 redirects.

> [!IMPORTANT]
> User Review Required: This plan maps out all content, URLs, and scraping strategies. Please review the recommended URL structure for project pages and how we plan to handle the contact form.

## DISCOVERED LIVE SITE MAP
Based on an initial content audit, the site consists of the following structure:

**Top-Level Pages:**
- `/` (Home)
- `/our-projects` (Projects Overview)
- `/services` (Services Overview)
- `/get-a-quote` (Contact / Quote Request)
- `/privacy-policy` (Legal)

**Project Pages:**
The live site exhibits template artifacts causing duplicated or strange URL paths for projects:
- **LumaGrid**: `/portfolio-collections/featured/booklets` & `/portfolio-collections/our-projects/booklets`
- **Shield DJI RS series gimbals**: `/portfolio-collections/featured/cards` & `/portfolio-collections/our-projects/cards`
- **Rotating Logo with Integrated LEDs**: `/portfolio-collections/our-projects/roterend-logo-met-gei%CC%88ntegreerde-leds`
- **Satellite Strut Hub**: `/portfolio-collections/our-projects/packaging`
- **Asteriks Retro Speaker**: `/portfolio-collections/our-projects/banners`

> [!NOTE]
> We will neutralize these messy URLs in the Next.js rebuild by moving to a clean `/projects/[slug]` pattern, preserving the SEO rank of old links via standard redirects. Furthermore, some project pages leak a Wix template message ("Create Your First Project..."). We will strip these artifacts.

## CONTENT INVENTORY
All text copy has been successfully audited and queued for preservation:
- **Home**: "A-Z PRODUCT DEVELOPMENT", "Change that works", "ABOUT US" block (Deltive is a Ghent-based... ), "OUR SERVICES", "OUR CLIENTS", Featured Projects list.
- **Services**: Four main pillars (Strategy, Design, Engineering, Manufacturing) with exact copy.
- **Projects**: Descriptions for LumaGrid, DJI Shield, Rotating Logo, Satellite Strut Hub, and Asteriks Speaker.
- **Contact / Quote**: "GET A QUOTE", Email (`voxlabsdesignstudio@gmail.com`), Phone (`+32488323360`).
- **Footer**: Social inquiries and links. Notice: The LinkedIn link currently points to `https://www.linkedin.com/company/wix-com` (template typo), which should be flagged for correction.
- **Privacy Policy**: 100% preservation of site legal copy.

## IMAGE / ASSET INVENTORY
All assets will be scraped and localized into `/public/images`. Below is the inventory:

| Asset Type | Description | Source / Extraction Plan |
| :--- | :--- | :--- |
| **Logos** | Deltive header/footer logo | To be extracted from Home header |
| **Hero Images** | Homepage hero, About section image | Direct scraping or Firecrawl fallback |
| **Project Images** | Cover and gallery for all 5 projects | Scraped via Firecrawl (Wix hides these in deep React DOM/CSS layers) |
| **Icons/Assets** | Service visual elements (if any) | Direct scraping |
| **Client Strip** | Associated companies | Direct scraping |

> [!WARNING]
> Because Wix often obfuscates images as CSS backgrounds or protected JS objects (`wixstatic.com`), they were not fully exposed during the static DOM read limit. The first step of execution will be a dedicated asset extraction script using Firecrawl to pull the highest resolution available.

## ROUTING PLAN FOR NEXT.JS
We will implement clean URL routing to match the UX intent better, adding redirects to mask Wix artifacts without losing link equity.

| Current Wix URL | New Next.js URL | Route Action |
| :--- | :--- | :--- |
| `/` | `/` | Standard Page |
| `/our-projects` | `/our-projects` | Standard Page |
| `/services` | `/services` | Standard Page |
| `/get-a-quote` | `/get-a-quote` | Standard Page |
| `/privacy-policy` | `/privacy-policy` | Standard Page |
| `/portfolio-collections/.../booklets` | `/projects/lumagrid` | 301 Redirect |
| `/portfolio-collections/.../cards` | `/projects/shield-dji-rs` | 301 Redirect |
| `/portfolio-collections/.../packaging` | `/projects/satellite-strut-hub` | 301 Redirect |
| `/portfolio-collections/.../banners` | `/projects/asteriks-retro-speaker`| 301 Redirect |
| `/portfolio-collections/.../roterend...` | `/projects/rotating-logo` | 301 Redirect |

## COMPONENT ARCHITECTURE
We will standardize the UI via reusable components built with Tailwind CSS:
- `Navbar` & `MobileMenu`
- `Footer`
- `PageHero` (for standard page headers)
- `ProjectCard` (for the grid views)
- `ProjectGallery` (for individual project pages)
- `ServiceBlock` (for the 4 services)
- `QuoteForm` (interactive form handler)
- `SectionWrapper` (to ensure consistent max-width and padding)

## CONTENT / DATA MODEL
Since the content is static and heavily curated, bringing in a headless CMS is over-engineering.
- Content will be localized in a structured TypeScript data layer, e.g., `@/content/projects.ts` and `@/content/services.ts`.
- It will export structured arrays of objects with proper static typography.
- Images will be referenced directly from the internal `/public/images/` path.

## SCRAPING AND ASSET ACQUISITION PLAN
1. Run a custom headless crawler specifically targeting the `static.wixstatic.com` domains across all discovered routes.
2. For any images not easily extracted due to lazy loading or CSS masking, invoke **Firecrawl** using the key stored in `.env`.
3. Wix typically appends scaling/cropping tokens to image URLs (`/v1/fill/w_...`). The crawler will strip these tokens from the URL before downloading to ensure we retrieve the original, high-res assets.
4. Establish an image manifest mapping Wix IDs to local file names (e.g. `lumagrid-hero.jpg`).

## PROPOSED FOLDER STRUCTURE
```text
app/
  (routes)/
    page.tsx (Home)
    our-projects/page.tsx
    services/page.tsx
    get-a-quote/page.tsx
    privacy-policy/page.tsx
  projects/
    [slug]/page.tsx
components/
  layout/ (Navbar, Footer)
  ui/ (Buttons, Inputs)
  sections/ (Hero, ServiceBlocks)
content/
  projects.ts
  site-copy.ts
public/
  images/
    projects/
    services/
    brand/
lib/
  utils.ts
```

## SEO / DEPLOYMENT / DOMAIN PLAN
- **Metadata**: Static generation of Next.js metadata logic across pages (titles matching "Title | Voxlabs 2.0" pattern initially, then fixing to "Title | Deltive Engineering").
- **Image Optimization**: Local images will pass through `next/image` ensuring format optimization (WebP) and automatic responsive sizing.
- **Deploy**: Project config tailored for Vercel, ensuring `next.config.js` properly registers the 301 redirects mapping `.com/portfolio-...` to `.com/projects/...`.

## RISKS AND EDGE CASES
- **Inaccessible Wix Assets (Risk)**: Mitigation: Use Firecrawl to forcefully render the DOM and snapshot image nodes. Strip query parameters to retrieve raw files.
- **Form Behavior (Risk)**: The Wix contact form relies on a Wix backend. Mitigation: We will rewrite the UI visually identical but will need an API route + a simple mailer (like Resend) or Formspree to route leads to `voxlabsdesignstudio@gmail.com`.
- **Template Artifacts (Risk)**: Leaked text like "Create Your First Project" or the dummy LinkedIn link. Mitigation: Silent cleanup during content data transfer.

## EXECUTION PHASES
1. **Asset Acquisition & Content Lock**: Run the `.env`-backed Firecrawl scraper; download all local assets to `public/images/`; author the `content/*.ts` dictionaries.
2. **Scaffold Next.js & Foundation**: Init Next 14, config Tailwind, deploy foundational layouts (Navbar, Footer, Grid systems).
3. **Core Pages UI Buildout**: Implement Home, Services, Contact, Privacy verbatim visually.
4. **Project Pages & Dynamic Routing**: Implement `/projects/[slug]` layout, integrate image galleries, and author the Next 301 redirects.
5. **QA & Vercel Verification**: Validate mobile responsiveness and compare it pixel by pixel to the live site. Verify forms submit correctly.

## FIRST ACTIONS AFTER APPROVAL
1. Verify `FIRECRAWL_API_KEY` presence in the environment.
2. Initiate script to crawl and cleanly archive the live Wix images to a temporary `downloads` folder for integration.
3. `npx create-next-app@latest .` with agreed TypeScript and App Router configurations to begin coding.
