import { defineConfig } from 'vitest/config';

// Tests = helpers purs (module lib). Pas besoin de la config Vite d'Astro ici.
// Pour des tests de composants (.astro) plus tard : passer à getViteConfig +
// mergeConfig (cf. docs Astro « Testing »).
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.ts'],
  },
});
