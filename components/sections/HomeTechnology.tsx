'use client';

import { useTranslations } from 'next-intl';

export function HomeTechnology() {
  const t = useTranslations('home');

  return (
    <section className="w-full min-h-[100dvh] md:h-full grid grid-cols-1 md:grid-cols-[3fr_1fr]">
      <div className="w-full flex items-center px-6 md:px-12 py-16 md:py-0">
        <div className="max-w-[600px]">
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

      <div className="flex items-center justify-center overflow-hidden px-6 md:px-12">
        <img
          src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/15DropsHA.webp"
          alt="Innovative dermal fillers through all-in-one solutions"
          className="w-[70%] h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
