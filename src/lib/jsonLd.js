import { company, contact } from '@/data/buscord';
import { absoluteUrl, getSiteUrl } from '@/lib/seo';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.fullName,
    url: getSiteUrl(),
    logo: absoluteUrl('/logo-buscord.png'),
    description: company.description,
    email: contact.email,
    telephone: contact.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cité Azimmo, Ouaga 2000 — à proximité de la station Petro OR',
      addressLocality: company.city,
      addressCountry: 'BF',
    },
    areaServed: {
      '@type': 'Country',
      name: company.country,
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: getSiteUrl(),
    inLanguage: 'fr',
    description: company.description,
  };
}
