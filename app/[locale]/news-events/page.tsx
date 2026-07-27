import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/news-events' });
}

const mockArticles = [
  { id: '1', title: 'Advances in HA Filler Technology', date: '2026-01-15', category: 'Research Articles' },
  { id: '2', title: 'Bonitto at Aesthetic Medicine Expo 2026', date: '2026-02-20', category: 'Events' },
  { id: '3', title: 'Skincare Innovation: New PLLA Formulation', date: '2026-03-10', category: 'Research Articles' },
  { id: '4', title: 'International Distributor Conference 2026', date: '2026-04-05', category: 'Events' },
  { id: '5', title: 'Clinical Results: Poly-L-Lactic Acid Studies', date: '2026-05-12', category: 'Research Articles' },
  { id: '6', title: 'MEDEF Congress Paris', date: '2026-06-18', category: 'Events' },
];

export default async function NewsEventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <span className="inline-block rounded-full bg-brand-teal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
            {t('hero.tag')}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{t('hero.title')}</h1>
          <p className="mt-3 text-brand-muted max-w-[500px]">{t('hero.description')}</p>
          <div className="mt-6 flex gap-2">
            <span className="rounded-full bg-brand-teal px-4 py-2 text-xs font-bold text-white">{t('tabs.all')}</span>
            <span className="rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-bold text-brand-ink">{t('tabs.events')}</span>
            <span className="rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-bold text-brand-ink">{t('tabs.researchArticles')}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockArticles.map((article) => (
              <Link key={article.id} href={`/news-events/${article.id}`}
                className="group rounded-2xl border border-brand-line bg-white overflow-hidden transition hover:shadow-md">
                <div className="aspect-[16/10] bg-brand-teal/5 flex items-center justify-center">
                  <span className="text-sm text-brand-muted">Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-brand-teal/8 px-3 py-0.5 text-xs font-bold text-brand-teal">{article.category}</span>
                    <span className="text-xs text-brand-muted">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-ink group-hover:text-brand-teal transition">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
