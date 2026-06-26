/**
 * Module métier `partners` — catalogue des partenaires technologiques.
 * Source unique pour la page Partenaires et le bandeau de confiance de l'accueil.
 * 1 partenaire = 1 entrée typée (nom, logo, descriptif, site).
 */

export interface Partner {
  readonly name: string;
  /** Chemin du logo servi depuis `public/img/partners/`. */
  readonly logo: string;
  readonly description: string;
  readonly url: string;
}

export const partners: readonly Partner[] = [
  {
    name: 'SonicWall',
    logo: '/img/partners/sonicwall.png',
    description:
      'Déployez ce qui vous intéresse, là où vous en avez besoin. SonicWall vous aide à construire, calibrer et gérer la sécurité dans les environnements cloud, hybride et traditionnel.',
    url: 'https://www.sonicwall.com',
  },
  {
    name: 'Veeam',
    logo: '/img/partners/veeam.png',
    description:
      'Le nº 1 de la protection moderne des données : sauvegarde sécurisée et restauration rapide et fiable pour assurer la résilience de vos données dans le cloud hybride.',
    url: 'https://www.veeam.com',
  },
  {
    name: 'PRTG',
    logo: '/img/partners/prtg.png',
    description:
      'Solution de surveillance réseau et de gestion des performances, pour superviser efficacement infrastructures, réseaux, serveurs, applications et appareils connectés.',
    url: 'https://www.paessler.com/prtg',
  },
  {
    name: 'WatchGuard',
    logo: '/img/partners/watchguard.gif',
    description:
      'Une suite complète de protection pour vos activités numériques : sécurité robuste de vos infrastructures, réseaux, serveurs, applications et appareils connectés.',
    url: 'https://www.watchguard.com',
  },
  {
    name: 'Dell',
    logo: '/img/partners/dell.png',
    description:
      'Une gamme complète de solutions matérielles et logicielles adaptées à vos besoins numériques, pour une performance fiable de vos infrastructures.',
    url: 'https://www.dell.com',
  },
  {
    name: 'Vade',
    logo: '/img/partners/vade.png',
    description:
      "Leader du classement G2 Grid® pour ses solutions de sécurité de l'email, de l'email dans le cloud et de l'anti-spam, sur la base de la satisfaction client.",
    url: 'https://www.vadesecure.com',
  },
  {
    name: 'Arrow ECS',
    logo: '/img/partners/arrow.png',
    description:
      "Distribution de solutions d'infrastructure et de services : serveurs d'entreprise, stockage, logiciels et virtualisation pour les professionnels de l'informatique.",
    url: 'https://www.arrow.com',
  },
] as const;
