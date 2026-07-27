import type { Metadata } from 'next';
import { locales, type Locale } from './i18n';

export const SITE_URL = 'https://bonitto-rose.vercel.app';

const DEFAULT_OG_IMAGE = '/og-image.jpg';
const DEFAULT_OG_WIDTH = 1200;
const DEFAULT_OG_HEIGHT = 630;
const SITE_NAME = 'Bonitto Aesthetic';
const SITE_ICONS = {
  icon: [
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  other: [{ rel: 'msapplication-TileImage', url: '/mstile-270x270.png' }],
};

function localizedPath(locale: string, path: string) {
  return `/${locale}${path}`;
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildHreflangMap(path: string) {
  return {
    'x-default': absoluteUrl(localizedPath('en', path)),
    ...Object.fromEntries(
      locales.map((l) => [l, absoluteUrl(localizedPath(l, path))])
    ),
  };
}

export function buildMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  image,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  image?: string;
  keywords?: string | string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(localizedPath(locale, path));
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const imageUrl = absoluteUrl(ogImage);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(localizedPath(locale, path)),
      languages: buildHreflangMap(path),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    icons: SITE_ICONS,
    manifest: '/site.webmanifest',
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
      images: [{ url: imageUrl, width: DEFAULT_OG_WIDTH, height: DEFAULT_OG_HEIGHT, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function getRootLayoutMetadata({ locale }: { locale: Locale }): Promise<Metadata> {
  const t = await import(`../messages/${locale}/layout.json`);
  const meta = t.default.metadata;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: meta.template,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Bonitto Aesthetic' }],
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: buildHreflangMap(''),
    },
    robots: { index: true, follow: true },
    icons: SITE_ICONS,
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${locale}`,
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      images: [{
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: DEFAULT_OG_WIDTH,
        height: DEFAULT_OG_HEIGHT,
        alt: SITE_NAME,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    },
  };
}

export async function getPageMetadata({
  locale,
  path,
  page,
  title,
  description,
  keywords,
  image,
}: {
  locale: string;
  path: string;
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}): Promise<Metadata> {
  let resolvedTitle = title;
  let resolvedDescription = description;
  let resolvedKeywords = keywords;
  let resolvedImage = image;

  if (page) {
    try {
      const t = await import(`../messages/${locale}/${page}.json`);
      const metadata = t.default?.metadata;
      if (metadata) {
        resolvedTitle = resolvedTitle || metadata.title;
        resolvedDescription = resolvedDescription || metadata.description;
        resolvedKeywords = resolvedKeywords || metadata.keywords;
        resolvedImage = resolvedImage || metadata.ogImage || DEFAULT_OG_IMAGE;
      }
    } catch {
      // Fallback if page translation doesn't exist
    }
  }

  resolvedImage = resolvedImage || DEFAULT_OG_IMAGE;

  return buildMetadata({
    title: resolvedTitle || SITE_NAME,
    description: resolvedDescription || '',
    path,
    locale,
    image: resolvedImage,
    keywords: resolvedKeywords,
  });
}
