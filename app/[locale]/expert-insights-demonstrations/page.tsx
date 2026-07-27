import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'expertInsights', path: '/expert-insights-demonstrations' });
}

const mockVideos = [
  { id: '1', title: 'HA Filler Injection Technique — Nasolabial Folds', expert: 'Dr. Maria Rossi', thumb: null },
  { id: '2', title: 'Cheek Augmentation with Volumizing Filler', expert: 'Dr. Hans Mueller', thumb: null },
  { id: '3', title: 'Lip Enhancement: Natural Results Approach', expert: 'Dr. Sophie Laurent', thumb: null },
  { id: '4', title: 'Skin Booster Treatment Protocol', expert: 'Dr. Alessandro Bianchi', thumb: null },
  { id: '5', title: 'PLLA Biostimulation: Clinical Guidelines', expert: 'Dr. Elena Petrov', thumb: null },
  { id: '6', title: 'Jawline Contouring Masterclass', expert: 'Dr. Maria Rossi', thumb: null },
];

export default async function ExpertInsightsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'expertInsights' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <span className="inline-block rounded-full bg-brand-teal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
            {t('hero.tag')}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{t('hero.title')}</h1>
          <p className="mt-3 text-brand-muted max-w-[500px]">{t('hero.description')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockVideos.map((video) => (
              <div key={video.id} className="group rounded-2xl border border-brand-line bg-white overflow-hidden transition hover:shadow-md cursor-pointer">
                <div className="relative aspect-video bg-brand-teal/5 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition">
                    <svg className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-brand-teal font-semibold mb-1">{video.expert}</p>
                  <h3 className="text-sm font-bold text-brand-ink group-hover:text-brand-teal transition">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
