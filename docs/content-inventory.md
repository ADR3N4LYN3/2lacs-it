# Inventaire de contenu — migration depuis l'ancien site

Source : ancien site WordPress `2lacs-it.com` (thème **Divi** + All in One SEO).
Migration réalisée le **2026-06-26** à partir de l'export WP (`legacy/`, non versionné) et d'un téléchargement des médias depuis le site live.

## Identité (vérifiée — Kbis fourni le 2026-06-26)

- **Éditeur** : 2 LACS Informatique, nom commercial de l'**entreprise individuelle Christophe REVOIRE** (entrepreneur individuel → pas de capital social).
- **Immatriculation** : SIRET 978 059 830 00015 — RCS Chambéry 978 059 830 (immatriculée le 07/11/2023).
- **Siège** : 805 Route d'Ansigny, 73410 Entrelacs (Savoie), entre lac du Bourget et lac d'Annecy.
- **TVA** : non applicable, art. 293 B du CGI (franchise en base).
- **Cible** : TPE/PME locales. **Taglines** : « L'informatique au cœur de vos solutions » · « Votre réussite est notre priorité ».
- **Réseaux** : [LinkedIn](https://www.linkedin.com/company/2lacs-informatique) · [Facebook](https://www.facebook.com/2LACSIT) · [X](https://twitter.com/2LACSIT)
- **Email** : `contact@2lacs-it.com` (→ `CONTACT_TO` + `site-config`). **Portail support** : https://support.2lacs-it.com

## Pages migrées (statut final)

| Ancienne URL                     | Nouvelle URL                       | Statut | Source de contenu                               |
| -------------------------------- | ---------------------------------- | ------ | ----------------------------------------------- |
| `/`                              | `/`                                | ✅     | hero + grille services + partenaires + CTA      |
| `/presentation/`                 | `/a-propos` (301)                  | ✅     | page Présentation + photo lac du Bourget        |
| `/audit-consulting/`             | `/services/audit-consulting` (301) | ✅     | content collection `services`                   |
| `/integration/`                  | `/services/integration` (301)      | ✅     | idem                                            |
| `/infogerance/`                  | `/services/infogerance` (301)      | ✅     | idem                                            |
| `/services-manages/`             | `/services/services-manages` (301) | ✅     | idem                                            |
| `/securite/`                     | `/services/securite` (301)         | ✅     | idem (titre → « Cybersécurité »)                |
| `/support-technique/`            | `/services/support-technique`(301) | ✅     | idem (+ lien portail support)                   |
| `/monitoring/`                   | `/services/monitoring` (301)       | ✅     | idem                                            |
| `/support/`                      | → `/services/support-technique`    | ✅     | page = simple lien portail (fusionnée)          |
| `/partenaires/`                  | `/partenaires`                     | ✅     | 7 partenaires + logos (module `partners`)       |
| `/contact/`                      | `/contact`                         | ✅     | form natif + `contact.php` (ex-HubSpot)         |
| `/politique-de-confidentialite/` | `/politique-de-confidentialite`    | ✅     | **réécrite** (l'ancienne = boilerplate WP)      |
| `/politique-de-cookies/`         | `/politique-de-cookies`            | ✅     | **réécrite** (ancienne page vide)               |
| `/conditions-generales/`         | `/conditions-generales`            | ✅     | rédigée (défauts légaux) — relecture conseillée |
| —                                | `/mentions-legales`                | ✅     | éditeur (EI) + hébergeur, données réelles       |
| —                                | `/services`                        | ✅     | hub listant les 7 prestations                   |

**Décisions** : pages détail par service (fidélité SEO de l'ancien site) ; slugs des pages légales conservés à l'identique ; anciennes URLs services/présentation → redirections 301 statiques (`astro.config.mjs`). Pas de blog (pages `/actualites/`, `/news-securite-cert/` non migrées — décision projet).

## Médias

137 médias téléchargés depuis le live → `legacy/uploads/` (non versionné). Versionnés dans le repo :

- **Logos partenaires** → `public/img/partners/` (SonicWall, Veeam, PRTG, WatchGuard, Dell, Vade, Arrow).
- **Photo territoire** (lac du Bourget) → `src/assets/lac-du-bourget.jpg` (optimisée via `astro:assets`, page À propos).
- Les visuels décoratifs « IA » du thème Divi (grilles, icônes génériques) n'ont pas été repris : le nouveau design a sa propre identité.

## Légal — complété

Toutes les mentions sont renseignées avec des **données réelles** (Kbis + identité officielle Amen). **Plus aucun placeholder** dans le repo.

- **Mentions légales** : éditeur (entreprise individuelle Christophe REVOIRE), SIRET, RCS Chambéry, siège, TVA (293 B), hébergeur Amen.
- **Confidentialité / cookies** : adaptées au site statique (formulaire seul, zéro tracker ; conservation 3 ans).
- **CGV** : défauts légaux (paiement 30 j, pénalités, préavis 3 mois) — **relecture juridique conseillée** avant publication ; le devis signé prévaut.

Optionnel : ajouter un numéro de téléphone (non obligatoire — l'email suffit pour la LCEN).
