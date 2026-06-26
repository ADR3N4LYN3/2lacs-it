/**
 * Collections de contenu éditorial (Astro content layer).
 *
 * `services` — corps long-form d'une prestation (1 fichier Markdown = 1 prestation).
 * Le catalogue (slug, titre, résumé, icône) vit dans la frontmatter ; la prose dans le corps.
 * L'accès typé passe par `src/lib/services.ts` (frontière du module `services`).
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    /** Titre affiché (carte + <h1> de la page détail). */
    title: z.string(),
    /** Résumé court : carte d'accueil + meta description SEO. */
    summary: z.string(),
    /** Nom d'icône (mappé côté composant carte). */
    icon: z.string(),
    /** Ordre d'affichage dans le catalogue. */
    order: z.number(),
  }),
});

export const collections = { services };
