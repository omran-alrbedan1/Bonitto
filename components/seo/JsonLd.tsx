import { SITE_URL } from '@/lib/seo';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Bonitto Aesthetic',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: 'Premium medical aesthetics products — dermal fillers, professional cosmetics, and skincare for clinics and distributors worldwide.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+391234567890',
    contactType: 'customer service',
    availableLanguage: ['English', 'French', 'German', 'Italian', 'Russian', 'Turkish', 'Arabic', 'Spanish', 'Hebrew'],
    areaServed: 'Worldwide',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591763210416',
    'https://linkedin.com/company/bonittoaesthetic',
    'https://www.instagram.com/bonitto_israel',
    'https://youtube.com/@bonittoaesthetic',
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Bonitto Aesthetic',
  description: 'Premium medical aesthetics products for professionals.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es', 'he'],
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}