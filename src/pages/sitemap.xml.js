import { services, caseStudies } from '@/data/buscord';
import { getSiteUrl } from '@/lib/seo';

function urlEntry(loc, priority = '0.7', changefreq = 'monthly') {
  return `
  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSiteMap() {
  const base = getSiteUrl();
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8' },
    { path: '/services', priority: '0.9' },
    { path: '/case-study', priority: '0.9' },
    { path: '/contact', priority: '0.8' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  ];

  const servicePages = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: '0.8',
  }));

  const casePages = caseStudies.map((c) => ({
    path: `/case-study/${c.slug}`,
    priority: '0.7',
  }));

  const all = [...staticPages, ...servicePages, ...casePages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${all
    .map((page) => urlEntry(`${base}${page.path}`, page.priority, page.changefreq))
    .join('')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
