import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/news-events/[slug]' });
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <Link href="/news-events" className="text-sm text-brand-teal font-semibold hover:underline">← Back to News</Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-brand-teal/8 px-3 py-0.5 text-xs font-bold text-brand-teal">Research Articles</span>
            <span className="text-xs text-brand-muted">2026-01-15</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Advances in HA Filler Technology</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-[min(800px,calc(100%-48px))]">
          <div className="prose prose-lg max-w-none text-brand-muted">
            <p>This article explores the latest advances in hyaluronic acid filler technology, including new cross-linking methods and improved biocompatibility profiles.</p>
            <p>The development of next-generation HA fillers represents a significant milestone in aesthetic medicine, offering practitioners enhanced precision and patients improved outcomes.</p>
            <p>Key innovations include optimized particle size distribution, extended duration of effect, and reduced inflammatory response compared to earlier formulations.</p>
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-brand-ink mb-4">{t('relatedArticles')}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[1,2,3].map(i => (
                <div key={i} className="rounded-xl border border-brand-line bg-white p-4">
                  <div className="aspect-[16/10] bg-brand-teal/5 rounded-lg mb-3" />
                  <p className="text-sm font-bold text-brand-ink">Related Article {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
