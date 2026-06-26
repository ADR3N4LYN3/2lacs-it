# 2lacs-it

Refonte du site vitrine de **2 LACS Informatique** — site statique [Astro](https://astro.build) + Tailwind v4, hébergé chez Amen.fr (mutualisé) via déploiement FTP. Aucune base de données.

## Commandes

| Commande       | Effet                                  |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Serveur de dev (http://localhost:4321) |
| `pnpm build`   | Build statique dans `dist/`            |
| `pnpm preview` | Prévisualise le build                  |
| `pnpm check`   | Vérification de types (`astro check`)  |
| `pnpm lint`    | ESLint                                 |
| `pnpm format`  | Prettier (écriture)                    |
| `pnpm test`    | Tests (Vitest)                         |

Package manager : **pnpm** uniquement.

## Structure

- `src/pages/` — routes (orchestrateurs, composition only)
- `src/layouts/` — shell HTML
- `src/components/` — composants UI
- `src/lib/` — modules métier (`site-config`, `services`, `seo`)
- `src/styles/global.css` — thème Tailwind v4 (design tokens)
- `public/contact.php` — traitement du formulaire de contact (PHP, sur Amen)
- `docs/` — perf, déploiement, inventaire de contenu

Voir [CLAUDE.md](CLAUDE.md) pour le cadre structurel et [docs/deploy.md](docs/deploy.md) pour le déploiement.
