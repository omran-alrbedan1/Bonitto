import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/reserved-area/dashboard', '/api/'],
      },
    ],
    sitemap: 'https://www.bonittoaesthetic.com/sitemap.xml',
  };
}
