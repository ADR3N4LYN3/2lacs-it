/**
 * Module `seo` — source unique des métadonnées du <head>.
 * Helpers purs (aucune I/O) → testables isolément.
 */
import { siteConfig } from './site-config';

export interface SeoInput {
  /** Titre de page (sans le suffixe de marque). Omis = titre d'accueil. */
  readonly title?: string;
  readonly description?: string;
  /** Chemin de la page courante, ex. "/contact". */
  readonly path?: string;
}

export interface SeoMeta {
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
}

/** Construit l'URL canonique absolue à partir d'un chemin, sans double slash ni slash final. */
export function buildCanonical(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, '');
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean === '' ? base : `${base}/${clean}`;
}

/** Assemble les métadonnées SEO d'une page à partir d'entrées partielles + des valeurs du site. */
export function buildSeo(input: SeoInput = {}): SeoMeta {
  const title = input.title
    ? `${input.title} — ${siteConfig.shortName}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title,
    description: input.description ?? siteConfig.description,
    canonical: buildCanonical(input.path ?? '/'),
  };
}
