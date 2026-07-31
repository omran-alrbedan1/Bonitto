import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { products } from '@/i18n/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bonitto-rose.vercel.app';

  const staticPaths = [
    '',
    '/about-us',
    '/contact-us',
    '/distributors',
    '/events',
    '/news-events',
    '/expert-insights-demonstrations',
    '/face-body',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
  ];

  const productCategories = ['01', '02', '03', '04', '05', '06'];
  const categoryPaths = productCategories.map(slug => `/product-category/${slug}`);
  
  const productPaths = products.map(product => `/product/${product.slug}`);

  const allPaths = [...staticPaths, ...categoryPaths, ...productPaths];

  return allPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        // For each path, generate alternate links for all locales
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${path}`])
        ),
        // Add x-default for the default locale
        'x-default': `${baseUrl}/${routing.defaultLocale}${path}`,
      },
    }))
  );
}
