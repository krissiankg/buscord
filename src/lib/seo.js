export const siteConfig = {
  name: 'BUSCORD',
  defaultTitle: 'BUSCORD — Conception, suivi et réalisation de projets de développement',
  defaultDescription:
    'BUSCORD accompagne les bailleurs, ONG, collectivités et institutions dans la conception, le suivi-contrôle et la réalisation de projets humanitaires et de développement au Burkina Faso.',
  locale: 'fr_BF',
  defaultOgImage: '/images/hero-accueil-afrique.jpg',
  twitterHandle: '',
};

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://buscord.online';
  return url.replace(/\/$/, '');
}

export function absoluteUrl(path = '') {
  const base = getSiteUrl();
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
