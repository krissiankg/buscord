import Head from 'next/head';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export default function SeoHead({
  title,
  description = siteConfig.defaultDescription,
  path = '',
  image = siteConfig.defaultOgImage,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const url = absoluteUrl(path);
  const ogImage = image?.startsWith('http') ? image : absoluteUrl(image);
  const fullTitle = title?.includes('BUSCORD') ? title : `${title} — BUSCORD`;

  const structuredData = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  );
}
