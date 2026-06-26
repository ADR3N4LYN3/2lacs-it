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
  // Continuité SEO : anciennes URLs WordPress → nouvelle arborescence (pages de redirection statiques).
  redirects: {
    '/presentation': '/a-propos',
    '/audit-consulting': '/services/audit-consulting',
    '/integration': '/services/integration',
    '/infogerance': '/services/infogerance',
    '/services-manages': '/services/services-manages',
    '/securite': '/services/securite',
    '/support-technique': '/services/support-technique',
    '/monitoring': '/services/monitoring',
    '/support': '/services/support-technique',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
