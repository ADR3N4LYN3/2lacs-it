# Journal de performance

Toute optimisation au-delà des règles par défaut (cf. CLAUDE.md « Cadre perf ») se journalise ici : **mesure avant → changement → mesure après**. Pas d'opti sans delta mesuré.

| Date     | Sujet | Avant | Après | Note |
| -------- | ----- | ----- | ----- | ---- |
| _(vide)_ |       |       |       |      |

## Repères du projet

- Site statique pré-rendu : pas d'I/O par requête, rien à optimiser côté serveur.
- Cibles : Lighthouse ≥ 95 (perf/SEO/a11y), images dimensionnées (pas de CLS), JS minimal (Astro = 0 JS par défaut).
