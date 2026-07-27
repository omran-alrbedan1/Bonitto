import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'products', path: '/product-category/[slug]' });
}

const mockProducts = [
  { slug: 'product-1', name: 'HA Filler Premium 1ml', type: 'Sterile vials' },
  { slug: 'product-2', name: 'HA Filler Ultra 1ml', type: 'Syringe' },
  { slug: 'product-3', name: 'Amino Acid Complex', type: 'Sterile vials' },
  { slug: 'product-4', name: 'Skin Booster Pro', type: 'Vials 5x5ml' },
];

export default async function ProductCategoryPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });
  const tn = await getTranslations({ locale, namespace: 'navigation' });
  const categories = tn.raw('megaMenu.categories') as Array<{ number: string; label: string }>;
  const category = categories?.find(c => c.number === slug);

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <span className="inline-block rounded-full bg-brand-teal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
            {t('metadata.title')}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {category?.label || `Category ${slug}`}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockProducts.map((product) => (
              <Link key={product.slug} href={`/product/${product.slug}`}
                className="group rounded-2xl border border-brand-line bg-white overflow-hidden transition hover:shadow-md">
                <div className="aspect-square bg-brand-teal/5 flex items-center justify-center">
                  <span className="text-sm text-brand-muted">Product Image</span>
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-brand-teal/8 px-3 py-0.5 text-xs font-bold text-brand-teal mb-2">{product.type}</span>
                  <h3 className="text-lg font-bold text-brand-ink group-hover:text-brand-teal transition">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
