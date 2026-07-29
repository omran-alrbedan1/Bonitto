import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es', 'he'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about-us': '/about-us',
    '/contact-us': '/contact-us',
    '/distributors': '/distributors',
    '/events': '/events',
    '/events/[slug]': '/events/[slug]',
    '/news-events': '/news-events',
    '/research-articles': '/research-articles',
    '/research-articles/[id]': '/research-articles/[id]',
    '/expert-insights-demonstrations': '/expert-insights-demonstrations',
    '/face-body': '/face-body',
    '/reserved-area': '/reserved-area',
    '/privacy-policy': '/privacy-policy',
    '/cookie-policy': '/cookie-policy',
    '/terms': '/terms',
    '/product-category/[slug]': '/product-category/[slug]',
    '/product/[slug]': '/product/[slug]',
    '/category/[type]': '/category/[type]',
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
