/**
 * Module métier `services` — surface d'accès typée au catalogue des prestations.
 *
 * Le contenu (1 prestation = 1 fichier `src/content/services/<slug>.md`) est la source unique :
 * frontmatter = métadonnées de carte (titre, résumé, icône, ordre), corps = prose de la page détail.
 * Ce module expose l'accès trié + la fabrique d'URL ; aucune autre couche ne requête la collection en direct.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type ServiceEntry = CollectionEntry<'services'>;

/** Catalogue complet des prestations, trié par ordre d'affichage. */
export async function getServices(): Promise<ServiceEntry[]> {
  const all = await getCollection('services');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** URL canonique de la page détail d'une prestation. */
export function serviceHref(id: string): string {
  return `/services/${id}`;
}
