import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'legal', path: '/terms', title: undefined });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.terms' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(800px,calc(100%-48px))]">
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{t('title')}</h1>
          <p className="mt-2 text-sm text-brand-muted">{t('lastUpdated')}</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto w-[min(800px,calc(100%-48px))] text-brand-muted text-sm leading-relaxed space-y-6">
          <p>These Terms and Conditions govern your use of the Bonitto Aesthetic website and services. By accessing or using our website, you agree to be bound by these terms.</p>
          <p>Please read these terms carefully before using our services. If you do not agree to these terms, please do not use our website.</p>
        </div>
      </section>
    </main>
  );
}
