// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Source unique de l'URL canonique : sitemap, SEO et robots.txt en dépendent.
  site: 'https://2lacs-it.com',
  // Hébergement statique mutualisé Amen (Apache) → format répertoire = clean URLs sans .htaccess.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
