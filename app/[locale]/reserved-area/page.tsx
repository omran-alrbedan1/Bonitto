import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'reservedArea', path: '/reserved-area', title: undefined });
}

export default async function ReservedAreaPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'reservedArea' });

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-brand-bg-warm">
        <div className="w-full max-w-md px-6">
          <div className="rounded-3xl border border-brand-line bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-brand-ink text-center">{t('login.title')}</h1>
            <p className="mt-2 text-sm text-brand-muted text-center">{t('login.description')}</p>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-brand-ink mb-1.5">{t('login.email')}</label>
                <input type="email" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-ink mb-1.5">{t('login.password')}</label>
                <input type="password" className="w-full rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-sm outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-full bg-brand-teal px-8 text-sm font-bold text-white transition hover:bg-brand-teal-light">
                {t('login.submit')}
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-brand-muted">
              <a href="#" className="text-brand-teal hover:underline">{t('login.forgotPassword')}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
