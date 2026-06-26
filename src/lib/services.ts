/**
 * Catalogue des prestations (module métier `services`).
 * 1 prestation = 1 entrée typée. Ajouter une prestation = ajouter un objet ici,
 * pas un bloc HTML en dur dans une page.
 *
 * Contenu provisoire dérivé du site actuel — à compléter/affiner avec l'export WP.
 */

export interface Service {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  /** Nom d'icône (mappé côté composant). */
  readonly icon: string;
}

export const services: readonly Service[] = [
  {
    slug: 'audit-conseil',
    title: 'Audit & Conseil',
    summary:
      "Analyse de votre système d'information et recommandations concrètes pour le faire évoluer.",
    icon: 'search',
  },
  {
    slug: 'integration',
    title: 'Intégration',
    summary: 'Déploiement et mise en œuvre de vos infrastructures et solutions logicielles.',
    icon: 'layers',
  },
  {
    slug: 'infogerance',
    title: 'Infogérance',
    summary: 'Gestion et supervision de votre parc informatique au quotidien.',
    icon: 'server',
  },
  {
    slug: 'cybersecurite',
    title: 'Cybersécurité & CERT',
    summary: 'Protection, détection et réponse aux incidents de sécurité.',
    icon: 'shield',
  },
  {
    slug: 'reseaux',
    title: 'Réseaux & Infrastructure',
    summary: 'Conception et maintien de réseaux fiables et performants.',
    icon: 'network',
  },
  {
    slug: 'support',
    title: 'Support technique',
    summary: 'Assistance réactive pour vos utilisateurs et vos équipes.',
    icon: 'headset',
  },
] as const;
