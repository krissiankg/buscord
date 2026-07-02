# BUSCORD — Site vitrine officiel

Site web professionnel du **Bureau de Suivi-Contrôle et de Réalisation pour le Développement (BUSCORD)**, société burkinabè spécialisée dans la conception, le suivi-contrôle et la réalisation de projets de développement au Burkina Faso.

**Site en ligne :** [https://buscord.online](https://buscord.online)

---

## À propos du projet

Ce dépôt contient le code source du site vitrine BUSCORD : présentation de l'entreprise, services, réalisations sur le terrain, formulaire de contact et mentions légales. Le contenu est entièrement en français et adapté aux bailleurs, ONG, collectivités et institutions partenaires.

### Fonctionnalités

- Pages : Accueil, À propos, Services, Réalisations, Contact, Mentions légales
- Formulaire de contact avec envoi par e-mail (SMTP)
- Bouton WhatsApp flottant
- Galeries photos des projets réalisés
- SEO : métadonnées, Open Graph, sitemap, robots.txt
- Design responsive (mobile, tablette, desktop)

### Stack technique

- [Next.js 14](https://nextjs.org/) (Pages Router)
- React 18
- Tailwind CSS
- Nodemailer (envoi d'e-mails)
- GSAP / Lenis (animations)

---

## Installation en local

### Prérequis

- Node.js 18 ou 20
- npm

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/krissiankg/buscord.git
cd buscord

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos identifiants SMTP

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm run start
```

---


```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (SEO, liens canoniques) |
| `SMTP_*` | Configuration serveur mail pour le formulaire de contact |
| `CONTACT_TO` | Adresse qui reçoit les messages du formulaire |
| `SMTP_TLS_REJECT_UNAUTHORIZED` | `false` requis pour le serveur LWS |

---

## Déploiement (Netlify)

1. Connecter ce dépôt GitHub à [Netlify](https://www.netlify.com/)
2. Build command : `npm run build`
3. Ajouter toutes les variables d'environnement ci-dessus dans **Site settings → Environment variables**
4. Configurer le domaine `buscord.online` dans Netlify et pointer les DNS

---

## Structure du projet

```
src/
  components/   # Composants React (accueil, services, contact…)
  data/         # Contenu centralisé BUSCORD (buscord.js)
  pages/        # Pages Next.js + API contact
  styles/       # CSS global
public/
  images/       # Photos et assets du site
```

Le contenu éditorial principal se trouve dans `src/data/buscord.js`.

---

## Contact BUSCORD

- **Site :** [buscord.online](https://buscord.online)
- **E-mail :** contact@buscord.online
- **WhatsApp :** +226 77 16 24 63
- **Localisation :** Ouagadougou, Burkina Faso

---

## Crédits

Site conçu et développé par **[GUELICHWEB](https://guelichweb.online/)** — agence de transformation digitale.

Dépôt maintenu par **krissiankg**.

---

© BUSCORD — Tous droits réservés.
