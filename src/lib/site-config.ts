/**
 * Source unique de l'identité du site : nom, URL, coordonnées, navigation, réseaux.
 * Tout composant qui a besoin d'une de ces valeurs l'importe d'ici — jamais de littéral en dur ailleurs.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export const siteConfig = {
  name: '2 LACS Informatique',
  shortName: '2LACS IT',
  url: 'https://2lacs-it.com',
  locale: 'fr-FR',
  tagline: "L'informatique au cœur de vos solutions",
  description:
    "2 LACS Informatique, basée à Entrelacs (Savoie), accompagne les TPE/PME entre lac du Bourget et lac d'Annecy : infrastructure, réseaux, cloud, cybersécurité et support.",
  contact: {
    // Destinataire confirmé par le client (→ CONTACT_TO dans public/contact.php).
    email: 'contact@2lacs-it.com',
    phone: '',
  },
  /** Portail client (contrats de support technique) — hébergé hors de ce site. */
  supportUrl: 'https://support.2lacs-it.com',
  /**
   * Clé de site Cloudflare Turnstile (publique, OK en clair).
   * Vide = anti-bot Turnstile désactivé (le formulaire reste protégé par honeypot + throttle).
   * Renseigner après création du widget dans le dashboard Cloudflare ; côté serveur,
   * définir le secret dans `/www/contact-secret.php` (hors dépôt).
   */
  turnstileSiteKey: '0x4AAAAAADrf6GkFPsrkaN5_',
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Partenaires', href: '/partenaires' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ] as const satisfies readonly NavItem[],
  /** Liens légaux (pied de page). Slugs conservés à l'identique de l'ancien site (SEO). */
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { label: 'Politique de cookies', href: '/politique-de-cookies' },
    { label: 'Conditions générales', href: '/conditions-generales' },
  ] as const satisfies readonly NavItem[],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/2lacs-informatique' },
    { label: 'Facebook', href: 'https://www.facebook.com/2LACSIT' },
    { label: 'X', href: 'https://twitter.com/2LACSIT' },
  ] as const satisfies readonly SocialLink[],
} as const;

export type SiteConfig = typeof siteConfig;
