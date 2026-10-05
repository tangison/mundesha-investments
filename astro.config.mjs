import { defineConfig } from 'astro/config';

// SITE_URL is set at build time. Fallback is a non-routable placeholder so a
// guessed domain can never leak into canonicals or the sitemap.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.invalid',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
