import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio-collections/featured/booklets',
        destination: '/projects/lumagrid',
        permanent: true,
      },
      {
        source: '/portfolio-collections/our-projects/booklets',
        destination: '/projects/lumagrid',
        permanent: true,
      },
      {
        source: '/portfolio-collections/featured/cards',
        destination: '/projects/shield-dji-rs',
        permanent: true,
      },
      {
        source: '/portfolio-collections/our-projects/cards',
        destination: '/projects/shield-dji-rs',
        permanent: true,
      },
      {
        source: '/portfolio-collections/our-projects/roterend-logo-met-gei%CC%88ntegreerde-leds',
        destination: '/projects/rotating-logo',
        permanent: true,
      },
      {
        source: '/portfolio-collections/our-projects/packaging',
        destination: '/projects/satellite-strut-hub',
        permanent: true,
      },
      {
        source: '/portfolio-collections/our-projects/banners',
        destination: '/projects/asteriks-retro-speaker',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
