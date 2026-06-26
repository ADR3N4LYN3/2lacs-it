<?php
/**
 * Traitement du formulaire de contact (hébergement mutualisé Amen, PHP/mail()).
 * Copié tel quel par Astro depuis public/ → dist/contact.php.
 *
 * Sécurité : POST only, honeypot, anti-bot Cloudflare Turnstile (si configuré),
 * validation stricte, anti-injection d'en-têtes, throttle best-effort par IP.
 * Aucune base de données.
 */

declare(strict_types=1);

const CONTACT_TO   = 'contact@2lacs-it.com';        // destinataire confirmé par le client
const CONTACT_FROM = 'no-reply@2lacs-it.com';       // doit appartenir au domaine
const RATE_SECONDS = 20;                            // 1 envoi / IP / RATE_SECONDS

// Secret Turnstile éventuel, hors dépôt : fichier /www/contact-secret.php qui fait
// define('TURNSTILE_SECRET', '0x...'); — uploadé à la main. Absent = Turnstile désactivé.
@include __DIR__ . '/contact-secret.php';

function redirect(string $status): never {
    header('Location: /contact?' . $status, true, 303);
    exit;
}

function clean_header(string $value): string {
    // Neutralise toute tentative d'injection d'en-tête (CR/LF).
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    redirect('error=1');
}

// Honeypot : un humain ne remplit jamais ce champ.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    redirect('sent=1'); // on simule un succès pour ne pas renseigner le bot
}

// Throttle best-effort (fail-open si le FS n'est pas accessible).
$ip = clean_header((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$throttleFile = sys_get_temp_dir() . '/contact_' . md5($ip) . '.lock';
if (is_file($throttleFile) && (time() - filemtime($throttleFile)) < RATE_SECONDS) {
    redirect('error=1');
}
@touch($throttleFile);

// Cloudflare Turnstile — actif uniquement si le secret est défini.
$turnstileSecret = defined('TURNSTILE_SECRET') ? (string) TURNSTILE_SECRET : '';
if ($turnstileSecret !== '') {
    $token = trim((string) ($_POST['cf-turnstile-response'] ?? ''));
    if ($token === '') {
        redirect('error=1');
    }
    $resp = @file_get_contents(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        false,
        stream_context_create(['http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => http_build_query([
                'secret'   => $turnstileSecret,
                'response' => $token,
                'remoteip' => $ip,
            ]),
            'timeout' => 8,
        ]])
    );
    // Échec réseau → on laisse passer (honeypot + throttle couvrent).
    // Verdict explicite « non » → on bloque.
    if ($resp !== false) {
        $data = json_decode($resp, true);
        if (!is_array($data) || ($data['success'] ?? false) !== true) {
            redirect('error=1');
        }
    }
}

$name       = trim((string) ($_POST['name'] ?? ''));
$prenom     = trim((string) ($_POST['prenom'] ?? ''));
$email      = trim((string) ($_POST['email'] ?? ''));
$entreprise = trim((string) ($_POST['entreprise'] ?? ''));
$message    = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect('error=1');
}

$subject = clean_header('[2lacs-it.com] Message de ' . trim($prenom . ' ' . $name));
$headers = [
    'From: ' . CONTACT_FROM,
    'Reply-To: ' . clean_header($email),
    'Content-Type: text/plain; charset=UTF-8',
];

$body = "Nom : {$name}\nPrénom : {$prenom}\nEntreprise : {$entreprise}\nEmail : {$email}\n\n{$message}\n";

$ok = mail(CONTACT_TO, $subject, $body, implode("\r\n", $headers));

redirect($ok ? 'sent=1' : 'error=1');
