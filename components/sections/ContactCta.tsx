'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/motion/FadeIn';
import Link from 'next/link';

export function ContactCta() {
  const t = useTranslations('home');

  return (
    <section className="py-24 sm:py-32 bg-brand-teal">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('contactCta.title')}
          </h2>
          <p className="mt-4 mx-auto max-w-[500px] text-base text-white/80">
            {t('contactCta.description')}
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-bold text-brand-teal transition hover:bg-white/90"
          >
            {t('contactCta.cta')}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
