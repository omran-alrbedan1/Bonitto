import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getLocalizedCategoryDescription, getLocalizedProducts } from "@/lib/product-translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const info = getLocalizedCategoryDescription(slug, locale);
  return getPageMetadata({
    locale,
    page: 'products',
    path: `/product-category/${slug}`,
    title: info?.title,
    description: info?.body?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  });
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const tn = await getTranslations({ locale, namespace: 'navigation' });
  const tp = await getTranslations({ locale, namespace: 'products' });
  const categories = tn.raw('megaMenu.categories') as Array<{ number: string; label: string }>;
  const category = categories?.find((c) => c.number === slug);
  const info = getLocalizedCategoryDescription(slug, locale);
  const title = info?.title || category?.label || `${tp('categoriesPrefix')} ${slug}`;
  const products = getLocalizedProducts(slug, locale);
  const discoverMore = tp('detail.discoverMore');

  return (
    <main className="min-h-screen">
      <div id="blocks-wrapper" className="horizontal-scroll product-category-scroll">
        <section className="block-wyswyg">
          <div className="container-fluid">
            <div className="wyswyg">
              <h1>{title}</h1>
              {info?.body && <div dangerouslySetInnerHTML={{ __html: info.body }} />}
            </div>
          </div>
        </section>

        <section className="plp md:!mt-44 ">
          {products.length > 0 ? (
            <div className="container-fluid">
              <div className="product-list">
                {products.map((product) => (
                  <div className="product-item" key={product.id}>
                    <Link href={`/product/${product.slug}`}>
                      <span className="product-img-overlay">
                        <span className="product-img-discover">{discoverMore}</span>
                      </span>
                      <img
                        loading="lazy"
                        className="product-img"
                        alt={product.productImage?.alt || product.title}
                        src={product.cardImage || product.productImage?.mobile || product.productImage?.desktop}
                      />
                      <span className="d-block product-title">{product.title}</span>
                      <span className="d-block product-subtitle">{product.category}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container-fluid flex min-h-[40vh] items-center justify-center">
              <p>{tp('detail.noProducts')}</p>
            </div>
          )}
        </section>

        <Footer />
      </div>
    </main>
  );
}
