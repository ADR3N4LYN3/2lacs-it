# Inventaire de contenu — migration depuis l'ancien site

Source : ancien site WordPress `2lacs-it.com` (WordPress + All in One SEO).
Récupéré par scrape public le 2026-06-26. **Complément attendu** : export WP (XML) + `wp-content/uploads` pour les médias en pleine résolution.

## Identité (vérifiée)

- **Société** : 2 LACS Informatique — fondée **2023**, siège **Entrelacs (Savoie)**, entre lac du Bourget et lac d'Annecy.
- **Dirigeant** : Christophe REVOIRE (gérant / fondateur). Effectif : 1.
- **Cible** : TPE/PME locales.
- **Tagline** : « L'informatique au cœur de vos solutions » / « Votre réussite est notre priorité ».
- **Réseaux** : [Facebook](https://www.facebook.com/2LACSIT) · [LinkedIn](https://www.linkedin.com/company/2lacs-informatique) · [X](https://twitter.com/2LACSIT)
- **Coordonnées directes** (tél / email / adresse postale) : ⚠️ **absentes du site actuel** (formulaire uniquement) → à fournir.

## Pages à migrer (15)

| Ancienne URL                     | Page nouvelle                | Statut                | Note                                    |
| -------------------------------- | ---------------------------- | --------------------- | --------------------------------------- |
| `/`                              | `/` (accueil)                | ✅ amorcée            | hero + grille services                  |
| `/presentation/`                 | `/a-propos`                  | 🟡 amorcée, à remplir | histoire, valeurs, dirigeant            |
| `/audit-consulting/`             | service `audit-conseil`      | ⬜ à créer            | page détail ou section                  |
| `/integration/`                  | service `integration`        | ⬜                    |                                         |
| `/infogerance/`                  | service `infogerance`        | ⬜                    |                                         |
| `/services-manages/`             | service (managé)             | ⬜                    | rapprocher de `infogerance` ?           |
| `/securite/`                     | service `cybersecurite`      | ⬜                    | + CERT                                  |
| `/support-technique/`            | service `support`            | ⬜                    |                                         |
| `/support/`                      | (page support)               | ⬜                    | doublon possible avec support-technique |
| `/monitoring/`                   | service `monitoring`         | ⬜                    |                                         |
| `/partenaires/`                  | `/partenaires`               | ⬜ à créer            | logos partenaires (médias HD requis)    |
| `/contact/`                      | `/contact`                   | ✅ amorcée            | form aligné (voir ci-dessous)           |
| `/politique-de-confidentialite/` | `/politique-confidentialite` | ⬜                    | RGPD                                    |
| `/politique-de-cookies/`         | `/politique-cookies`         | ⬜                    |                                         |
| `/conditions-generales/`         | `/conditions-generales`      | ⬜                    |                                         |

Pages de flux non migrées (décision : pas de blog) : `/actualites/`, `/news-securite-cert/`.

## Formulaire de contact (ancien)

Champs : Nom, Prénom, Email, Entreprise, Message + CAPTCHA mathématique.
→ Reproduit dans `contact.astro` + `contact.php` (CAPTCHA remplacé par honeypot anti-spam).

## Médias

Le scrape ne récupère que les images en résolution web. Pour les originaux (logos partenaires, visuels) → fournir `wp-content/uploads/`. Déposer le dump dans `legacy/` (ignoré par git).

## Reste à fournir / décider

- [ ] Coordonnées directes (email de réception du formulaire → `CONTACT_TO` dans `contact.php`, tél, adresse).
- [ ] Mentions légales complètes (éditeur, SIRET, hébergeur Amen, directeur de publication).
- [ ] Export WP + `uploads` pour fidélité texte/médias.
- [ ] Fusionner ou non `support` / `support-technique` et `infogerance` / `services-manages`.
