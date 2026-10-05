import { defineConfig } from 'astro/config';

// SITE_URL is set at build time. Fallback is the client's production domain
// (mundesha.com) so local builds emit correct canonicals and sitemap URLs.
export default defineConfig({
  site: process.env.SITE_URL || 'https://mundesha.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
