// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adres i ścieżkę bazową podaje workflow wdrożenia (GitHub Pages):
//  - podgląd:  https://kuba-galinski.github.io/czujka24/
//  - docelowo: https://czujka24.pl/
// Lokalnie (npm run dev) strona działa pod "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://czujka24.pl',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
