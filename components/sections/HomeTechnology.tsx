'use client';

import { useTranslations } from 'next-intl';

export function HomeTechnology() {
  const t = useTranslations('home');

  return (
    <section className="home-section w-full grid grid-cols-1 md:grid-cols-[3fr_1fr]">
      <div className="home-section-copy w-full flex items-center md:px-16 lg:px-20 py-12 md:py-0">
        <div className="max-w-[600px] w-full">
          <h2 className="mb-4">
            {t('technology.title')}
          </h2>
          <p className="mb-4">
            {t.rich('technology.highlight', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p>
            {t.rich('technology.description', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
        </div>
      </div>

      <div className="home-section-media flex items-center justify-center overflow-hidden md:px-16 lg:px-20">
        <img
          src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/15DropsHA.webp"
          alt="Innovative dermal fillers through all-in-one solutions"
          className="home-product-image w-[70%] h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
