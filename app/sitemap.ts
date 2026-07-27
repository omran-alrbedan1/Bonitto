import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bonittoaesthetic.com';

  const staticPaths = [
    '',
    '/about-us',
    '/contact-us',
    '/distributors',
    '/events',
    '/news-events',
    '/expert-insights-demonstrations',
    '/face-body',
    '/reserved-area',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
  ];

  const productCategories = ['01', '02', '03', '04', '05', '06'];
  const categoryPaths = productCategories.map(slug => `/product-category/${slug}`);

  const allPaths = [...staticPaths, ...categoryPaths];

  return allPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${path}`])
        ),
      },
    }))
  );
}
