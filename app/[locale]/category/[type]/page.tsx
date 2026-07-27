import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; type: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/category/[type]' });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: Locale; type: string }> }) {
  const { locale, type } = await params;
  if (type === 'events') redirect(`/${locale}/events`);

  const t = await getTranslations({ locale, namespace: 'news' });
  const categoryLabel = type === 'events' ? t('tabs.events') : t('tabs.researchArticles');

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{categoryLabel}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <p className="text-brand-muted">Filtered articles for: {categoryLabel}</p>
        </div>
      </section>
    </main>
  );
}
  