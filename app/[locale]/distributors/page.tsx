import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'distributors', path: '/distributors' });
}

export default async function DistributorsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'distributors' });
  const benefits = t.raw('benefits.items') as string[];

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <span className="inline-block rounded-full bg-brand-teal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
            {t('hero.tag')}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{t('hero.title')}</h1>
          <p className="mt-3 text-brand-muted max-w-[600px]">{t('hero.description')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-ink mb-6">{t('benefits.title')}</h2>
              <div className="grid gap-3">
                {benefits?.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-brand-line bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-teal/8 text-xs font-bold text-brand-teal">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm text-brand-ink font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-brand-line bg-white p-8">
              <h2 className="text-xl font-bold text-brand-ink mb-2">{t('form.title')}</h2>
              <p className="text-sm text-brand-muted mb-6">{t('form.description')}</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Name" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal" />
                <input placeholder="Email" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal" />
                <input placeholder="Company" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal" />
                <input placeholder="Country" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal" />
                <textarea placeholder="Tell us about your distribution network..." rows={4} className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal resize-y" />
                <button type="submit" className="inline-flex h-11 items-center rounded-full bg-brand-teal px-8 text-sm font-bold text-white transition hover:bg-brand-teal-light">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
