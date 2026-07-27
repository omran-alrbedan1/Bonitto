'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function HomeHero() {
  const t = useTranslations('home');

  return (
    <section className="w-full min-h-[100dvh] md:h-full grid grid-cols-1 md:grid-cols-[3fr_1fr]">
      <div className="w-full flex items-center px-6 md:px-12 py-16 md:py-0">
        <div className="max-w-[600px]">
          <h1 className="mb-6">
            {t('hero.title')}
          </h1>

          <p className="mb-4" style={{ fontSize: 'inherit' }}>
            <em>{t('hero.subtitle')}</em>
          </p>

          <div className="mb-8">
            <p className="text-sm md:text-base leading-relaxed">
              {t.rich('hero.descriptionBridge', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {t.rich('hero.descriptionBrand', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {t.rich('hero.descriptionVision', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
          </div>

          <Link href="/about-us" className="btn btn-white-outline">
            {t('hero.cta')}
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls>
          <source src="https://www.bonittoaesthetic.com/wp-content/uploads/2025/04/250326-BONITTO-90sec-V6-verticale.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
