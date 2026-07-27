import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'legal', path: '/cookie-policy', title: undefined });
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.cookie' });

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
          <p>This Cookie Policy explains how Bonitto Aesthetic S.r.l. uses cookies and similar technologies when you visit our website.</p>
          <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By continuing to use our website, you consent to the use of cookies as described in this policy.</p>
        </div>
      </section>
    </main>
  );
}
