'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const categoryIcons: Record<string, string> = {
  '01': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/fillers.svg',
  '02': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/fillers.svg',
  '03': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/sterile-syringes.svg',
  '04': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/vials.svg',
  '05': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/vials.svg',
  '06': 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/cosmeceuticals.svg',
};

export function HomeLeadership() {
  const t = useTranslations('home');
  const tn = useTranslations('navigation');
  const categories = tn.raw('megaMenu.categories') as Array<{ number: string; label: string }>;

  return (
    <section className="w-full min-h-[100dvh] md:h-full grid grid-cols-1 md:grid-cols-[3fr_2fr]">
      <div className="w-full flex items-center px-6 md:px-12 py-16 md:py-0">
        <div className="max-w-[600px]">
          <h2 className="mb-4">
            {t('leadership.title')}
          </h2>
          <p className="mb-4">
            {t.rich('leadership.highlight', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>
          <p className="mb-8">
            {t.rich('leadership.description', { strong: (chunks) => <strong>{chunks}</strong> })}
          </p>

          <div>
            {categories?.map((cat) => (
              <Link
                key={cat.number}
                href={`/product-category/${cat.number}`}
                className="product-cat-link flex flex-row items-center gap-4"
              >
                <span className="shrink-0 w-[30px] md:w-[46px]">
                  {categoryIcons[cat.number] && (
                    <img
                      src={categoryIcons[cat.number]}
                      alt={cat.label}
                      className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]"
                      loading="lazy"
                    />
                  )}
                </span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden px-6 md:px-12">
        <img
          src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/GruppoPackBonitto_HR-RGB-con-trademark.webp"
          alt="Wide range of products: dermal fillers, mesotherapies and professional skin care"
          className="w-[70%] h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
