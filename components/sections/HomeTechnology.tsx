'use client';

import { useTranslations } from 'next-intl';

export function HomeTechnology() {
  const t = useTranslations('home');

  return (
    <section className="home-section home-technology">
      <div className="home-section-copy">
        <div className="home-copy-inner">
          <h2 className="mb-4">
            {t('technology.title')}
          </h2>
          <p className="home-kicker mb-4">
            {t.rich('technology.highlight', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p className="home-body-copy">
            {t.rich('technology.description', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
        </div>
      </div>

      <div className="home-section-media home-product-panel">
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
