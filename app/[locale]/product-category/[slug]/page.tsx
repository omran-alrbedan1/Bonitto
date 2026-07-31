import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Footer from "@/components/Footer";
import categoryDescriptions from "@/data/category-descriptions.json";
import { getProductsByCategorySlug } from "@/lib/bonitto-products";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const info = categoryDescriptions[slug as keyof typeof categoryDescriptions];
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
  const categories = tn.raw('megaMenu.categories') as Array<{ number: string; label: string }>;
  const category = categories?.find((c) => c.number === slug);
  const info = categoryDescriptions[slug as keyof typeof categoryDescriptions];
  const title = info?.title || category?.label || `Category ${slug}`;
  const products = getProductsByCategorySlug(slug);
  const rowsClass = products.length <= 5 ? 'rows-1' : 'rows-2';

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

        <section className="plp">
          <div className="container-fluid">
            {products.length > 0 ? (
              <div className={`product-list ${rowsClass}`}>
                {products.map((product) => (
                  <div className="product-item" key={product.id}>
                    <Link href={`/product/${product.slug}`}>
                      <img
                        loading="lazy"
                        className="product-img"
                        alt={product.title}
                        src={product.cardImage || product.productImage?.mobile || product.productImage?.desktop}
                      />
                      <span className="d-block product-title">{product.title}</span>
                      <span className="d-block">{product.category}</span>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[40vh] items-center justify-center">
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
