# 2lacs-it — Instructions

Site vitrine **2 LACS Informatique**, statique, hébergé chez Amen.fr (mutualisé, FTP). Refonte de l'ancien site WordPress (MySQL supprimé).

- Stack : Astro 7 + Tailwind v4 (config CSS-first) + TypeScript strictest | Package manager : **pnpm** uniquement
- Commandes : dev `pnpm dev`, test `pnpm test`, lint `pnpm lint`, typecheck `pnpm check`, build `pnpm build`
- Rendu : 100 % statique (`output: static`), 0 JS par défaut. Aucune base de données. Seule pièce serveur : `public/contact.php` (mailer sur Amen).
- Déploiement : build → `dist/` → FTP Amen (cf. [docs/deploy.md](docs/deploy.md)). Secrets FTP dans GitHub Actions, jamais commités.

## Cadre structure (non négociable)

- Fichier > 300 lignes = vigilance ; > 500 = split AVANT la prochaine feature
- Pages (`src/pages/`) = orchestrateurs : composition/rendu only, logique déléguée au module concerné
- Découpe : types / helpers purs / data / composant de vue / page (orchestrateur)
- Pas de `utils.ts` fourre-tout ; nommer par domaine ; co-localiser, promouvoir vers `src/lib/` au 2e consommateur
- Imports directs (pas de barrel massif) ; dépendances unidirectionnelles : pages → components → lib

## Frontières de modules métier (le socle qui grandit)

- **`site-config`** (`src/lib/site-config.ts`) — identité : nom, URL, nav, coordonnées, réseaux. Source unique ; aucun de ces littéraux en dur ailleurs.
- **`services`** (`src/lib/services.ts`) — catalogue des prestations. 1 prestation = 1 entrée typée, pas un bloc HTML.
- **`seo`** (`src/lib/seo.ts` + `src/components/SEO.astro`) — métadonnées du `<head>` (title/description/canonical/OG). Helpers purs testés ; le composant ne fait que composer.
- **`contact`** (`src/pages/contact.astro` + `public/contact.php`) — formulaire + traitement PHP. Toute la logique d'envoi vit dans le PHP.
- Nouvelle feature = nouveau module borné OU extension du module dont c'est la responsabilité — jamais éparpillée dans une page.
- Chaque module expose une surface mince (types + valeurs/fonctions publiques) ; pas d'import en profondeur dans un autre module.
- Contenu éditorial (textes/images des pages) → reprendre depuis l'ancien site (cf. [docs/content-inventory.md](docs/content-inventory.md)). Pas de blog (décision projet).

## Cadre perf (par défaut, pas après coup)

- Statique pré-rendu : pas d'I/O par requête. Garder 0 JS sauf besoin réel (islands ciblées).
- Images dimensionnées (pas de CLS) ; lazy hors viewport ; pas de payload inutile hydraté.
- Pas de O(n²) (Map/Set pour les lookups). Listes longues → pagination/virtualisation.
- Toute opti au-delà = mesure avant/après dans [docs/perf.md](docs/perf.md).

## Sécurité

- `contact.php` : POST only, honeypot, validation stricte, anti-injection d'en-têtes (CR/LF), throttle par IP. Définir `CONTACT_TO` avant prod.
- Aucun secret dans le repo (`.env*` ignoré sauf `.env.example`) ; identifiants FTP → secrets GitHub Actions.

## Conventions

- Code et libellés en français (locale `fr-FR`).
- Tailwind v4 : config dans `src/styles/global.css` (`@theme`), pas de `tailwind.config.js`. Customisation look → cf. skill `topic-design-system`.
- Doc API Astro/Tailwind à jour → MCP Context7 avant de coder.

## Pièges

- (alimenté par /skill-retro)
- `vitest.config.ts` : utiliser `defineConfig` de `vitest/config` (pas `getViteConfig` d'Astro) — sinon `astro check` rejette la clé `test`.
- Tailwind v4 : seules les nuances `brand-*` déclarées dans `@theme` existent (50/100/300/500/600/700/900). `brand-200/400/800` font échouer le build (`Cannot apply unknown utility class`).
- `<Image>` d'`astro:assets` nécessite `sharp` (devDep) — sinon le build casse sur `MissingSharp`. Médias éditoriaux → `src/assets/` + `<Image>` ; logos/icônes → `public/`.
- Frontmatter Markdown : quoter toute valeur contenant `: ` (ex. un résumé avec deux-points), sinon YAML lève « bad indentation of a mapping entry ».
- Contenu long-form = content collection `services` (`src/content/services/*.md`) ; `src/lib/services.ts` n'expose que l'accès typé. Ne pas remettre de prose dans le `.ts`.
