'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function HomeHero() {
  const t = useTranslations('home');

  return (
    <section className="home-section home-hero">
      <div className="home-section-copy">
        <div className="home-copy-inner">
          <h1 className="mb-6">
            {t('hero.title')}
          </h1>

          <p className="home-kicker mb-4">
            <em>{t('hero.subtitle')}</em>
          </p>

          <div className="home-body-copy mb-8">
            <p>
              {t.rich('hero.descriptionBridge', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p>
              {t.rich('hero.descriptionBrand', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p>
              {t.rich('hero.descriptionVision', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
          </div>

          <Link href="/about-us" className="btn btn-white-outline">
            {t('hero.cta')}
          </Link>
        </div>
      </div>

      <div className="home-section-media home-video-panel">
        <video className="home-hero-video w-full h-full object-cover" autoPlay muted loop playsInline controls>
          <source src="https://www.bonittoaesthetic.com/wp-content/uploads/2025/04/250326-BONITTO-90sec-V6-verticale.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
