import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'products', path: '/product/[slug]' });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <Link href="/product-category/01" className="text-sm text-brand-teal font-semibold hover:underline">← Back to Category</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Product: {slug}</h1>
          <span className="mt-2 inline-block rounded-full bg-brand-teal/8 px-3 py-1 text-xs font-bold text-brand-teal">Sterile Vials</span>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-brand-teal/5 aspect-square flex items-center justify-center">
              <span className="text-brand-muted">Product Image</span>
            </div>
            <div>
              <p className="text-base text-brand-muted leading-relaxed">
                Advanced hyaluronic acid filler designed for deep wrinkle correction and volume restoration. Suitable for facial contouring and augmentation procedures.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-brand-line bg-white p-4">
                  <p className="text-xs font-bold uppercase text-brand-teal mb-1">{t('detail.specifications')}</p>
                  <p className="text-sm text-brand-ink">HA 20mg/ml, Lidocaine 0.3%</p>
                </div>
                <div className="rounded-xl border border-brand-line bg-white p-4">
                  <p className="text-xs font-bold uppercase text-brand-teal mb-1">Volume</p>
                  <p className="text-sm text-brand-ink">1ml Syringe</p>
                </div>
                <div className="rounded-xl border border-brand-line bg-white p-4">
                  <p className="text-xs font-bold uppercase text-brand-teal mb-1">{t('detail.target')}</p>
                  <p className="text-sm text-brand-ink">Lifting & Volume</p>
                </div>
                <div className="rounded-xl border border-brand-line bg-white p-4">
                  <p className="text-xs font-bold uppercase text-brand-teal mb-1">{t('detail.indications')}</p>
                  <p className="text-sm text-brand-ink">Nasolabial folds, cheeks, chin</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact-us" className="inline-flex h-11 items-center rounded-full bg-brand-teal px-6 text-sm font-bold text-white transition hover:bg-brand-teal-light">
                  {t('detail.contactDistributor')}
                </a>
                <button className="inline-flex h-11 items-center rounded-full border border-brand-line bg-white px-6 text-sm font-bold text-brand-ink transition hover:bg-brand-teal/5">
                  {t('detail.downloadDatasheet')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
