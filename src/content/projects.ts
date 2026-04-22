export const projects = [
  {
    id: 'lumagrid',
    slug: 'lumagrid',
    title: 'LumaGrid',
    shortDescription: 'Bespoke light diffuser crafted for the main location of a feature film.',
    fullDescription: 'The LumaGrid is a bespoke light diffuser, crafted specifically for the main location of our feature film. Its geometric grid design controls the spread of light, creating a warm and textured glow that adds depth to the atmosphere on set.',
    category: 'featured',
    client: 'Feature Film Production',
    images: {
      cover: '/images/brand_assets/projects/LumaGrid/LumaGrid_preview.jpeg',
      gallery: [
        '/images/brand_assets/projects/LumaGrid/WhatsApp Image 2025-08-25 at 18.52.52.jpeg',
        '/images/brand_assets/projects/LumaGrid/WhatsApp Image 2025-08-25 at 18.52.52 (1).jpeg'
      ]
    }
  },
  {
    id: 'shield-dji-rs',
    slug: 'shield-dji-rs',
    title: 'Shield DJI RS series gimbals',
    shortDescription: 'Custom 3D-printed shield engineered to protect the DIJ RS3/4 camera module.',
    fullDescription: 'This custom 3D-printed shield was engineered to protect the DIJ RS3/4 camera module from impacts, dust, and debris. Developed through rapid prototyping and precision CAD modeling, it offers a perfect form-fit, lightweight durability, and tool-free installation for reliable on-set performance.',
    category: 'featured',
    client: 'Internal / Film Crew',
    images: {
      cover: '/images/brand_assets/projects/Shield DJI RS series gimbals/WhatsApp Image 2025-06-22 at 21.27.11.jpeg',
      gallery: [
        '/images/brand_assets/projects/Shield DJI RS series gimbals/WhatsApp Image 2025-06-22 at 21.28.08.jpeg',
        '/images/brand_assets/projects/Shield DJI RS series gimbals/WhatsApp Image 2025-06-22 at 21.28.08 (1).jpeg'
      ]
    }
  },
  {
    id: 'rotating-logo',
    slug: 'rotating-logo',
    title: 'Rotating Logo with Integrated LEDs',
    shortDescription: '3D rotating model of a logo with integrated LED lighting for Celsius.',
    fullDescription: 'This project was created on behalf of Celsius, a company that combines parties and art into the ultimate experience. Celsius approached us with the challenge of creating something unique that would contribute to their events. This led us to the idea of transforming their logo into a 3D rotating model with integrated LED lighting. The result is a striking, dynamic display that perfectly matches the atmosphere and energy of their events.',
    category: 'our-projects',
    client: 'Celsius',
    images: {
      cover: '/images/brand_assets/projects/Rotating Logo with Integrated LEDs/WhatsApp Image 2026-02-19 at 20.26.50.jpeg',
      gallery: [
        '/images/brand_assets/projects/Rotating Logo with Integrated LEDs/WhatsApp Image 2026-02-19 at 20.10.20.jpeg'
      ]
    }
  },
  {
    id: 'satellite-strut-hub',
    slug: 'satellite-strut-hub',
    title: 'Satellite Strut Hub',
    shortDescription: 'Precision-engineered central hub designed to connect support rods in modular structures.',
    fullDescription: 'A precision-engineered central hub designed to connect support rods in modular structures. Created using parametric CAD and produced with high-resolution 3D printing, this part ensures strength, accuracy, and easy integration. Perfect for technical installations that demand durability and alignment.',
    category: 'our-projects',
    client: 'Industrial Partner',
    images: {
      cover: '/images/brand_assets/projects/Satellite Strut Hub/20250623_1949_Zwarte Ondergrond Objecten_remix_01jyeyek3jfcgs9806dcyh9njh.png',
      gallery: [
        '/images/brand_assets/projects/Satellite Strut Hub/20250623_2015_Spotlight op Satellietschotels_remix_01jyezxwpcfmp9rpvvh7e8hg94.png',
        '/images/brand_assets/projects/Satellite Strut Hub/20250623_2026_Zwevende Objecten met Schaduw_remix_01jyf0kaa8e3st4ezszj31se0h.png'
      ]
    }
  },
  {
    id: 'asteriks-retro-speaker',
    slug: 'asteriks-retro-speaker',
    title: 'Asteriks Retro Speaker',
    shortDescription: 'Mid-century radio enclosure prototyping with modern Bluetooth speaker hardware.',
    fullDescription: 'We partnered with our client to develop the Asteriks Retro Box prototype: an enclosure that captures the charm of mid-century radios with modern Bluetooth speaker hardware. Various manufacturing techniques like injection moulding, thermoforming & CNC milling were implemented to generate a robust final look and feel.',
    category: 'our-projects',
    client: 'Consumer Audio Brand',
    images: {
      cover: '/images/brand_assets/projects/Asteriks Retro Speaker/IMG_2770 (2).jpg',
      gallery: [
        '/images/brand_assets/projects/Asteriks Retro Speaker/4d992780-5f6c-458d-bea1-e2b387d6172c-removebg-preview (1).png',
        '/images/brand_assets/projects/Asteriks Retro Speaker/WhatsApp Image 2025-06-23 at 20.45.10 (2).jpeg',
        '/images/brand_assets/projects/Asteriks Retro Speaker/WhatsApp Image 2025-06-23 at 21.03.46.jpeg'
      ]
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
