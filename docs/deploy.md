# Déploiement — Amen.fr (mutualisé, FTP)

Le site est **100 % statique** : `pnpm build` produit `dist/` (HTML/CSS/JS + `contact.php` + `sitemap`), uploadé tel quel chez Amen. Aucune base de données.

## Automatique (recommandé)

Le workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) build et pousse `dist/` en FTP à chaque push sur `main`.

**Secrets à créer** dans GitHub (Settings → Secrets and variables → Actions) :

| Secret           | Valeur                                                             |
| ---------------- | ------------------------------------------------------------------ |
| `FTP_SERVER`     | hôte FTP Amen (ex. `ftp.2lacs-it.com`)                             |
| `FTP_USERNAME`   | identifiant FTP                                                    |
| `FTP_PASSWORD`   | mot de passe FTP                                                   |
| `FTP_REMOTE_DIR` | dossier web distant (ex. `/www/` — à confirmer dans le panel Amen) |

⚠️ Ne jamais commiter ces identifiants. Ils ne vivent que dans les secrets GitHub.

## Manuel (FileZilla)

1. `pnpm build`
2. Uploader le **contenu** de `dist/` (pas le dossier lui-même) vers la racine web Amen.

## Notes hébergement

- Format d'URL : `build.format: 'directory'` → chaque page = `/page/index.html`, servie proprement par Apache.
- `contact.php` : définir `CONTACT_TO` (destinataire) et vérifier que `mail()` est actif sur l'offre Amen.
- HTTPS/SSL : certificat géré côté Amen (Let's Encrypt inclus dans l'offre).
