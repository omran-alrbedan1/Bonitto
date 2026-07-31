import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { bonittoProducts, getBonittoProduct, getCategorySlug } from '@/lib/bonitto-products';
import { PRODUCT_CATEGORIES } from '@/constants/data';
import { type Locale } from '@/lib/i18n';
import NextLink from 'next/link';

type ProductPageParams = Promise<{ locale: Locale; id: string }>;

export function generateStaticParams() {
  return bonittoProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const { id } = await params;
  const product = getBonittoProduct(id);
  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/product/${product.id}` },
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.productImage?.desktop ? [{ url: product.productImage.desktop }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: ProductPageParams }) {
  const { locale, id } = await params;
  const product = getBonittoProduct(id);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: 'products' });
  
  const categorySlug = getCategorySlug(product);
  const category = PRODUCT_CATEGORIES.find((cat) => cat.slug === categorySlug);

  return (
    <main className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container mx-auto px-4 py-4">
          <NextLink href={`/${locale}`} className="text-gray-600 hover:text-teal-600">
            Home
          </NextLink>
          <span className="mx-2 text-gray-400">/</span>
          {category && (
            <>
              <NextLink href={`/${locale}/product-category/${categorySlug}`} className="text-gray-600 hover:text-teal-600">
                {category.name}
              </NextLink>
              <span className="mx-2 text-gray-400">/</span>
            </>
          )}
          <span className="text-gray-900">{product.title}</span>
        </div>
      </nav>

      <div id="blocks-wrapper" className="horizontal-scroll product-detail-scroll">
        <section className="section-md product-detail-intro">
          <div className="product-detail-copy">
            <h1>{product.title}</h1>
            <p className="product-detail-tagline">{product.category}</p>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-tech-list">
              {product.technicalInfo.map((item) => (
                <div className="product-detail-tech" key={`${product.id}-${item.label}`}>
                  {item.icon && <img src={item.icon} alt="" aria-hidden="true" />}
                  <div>
                    <h2>{item.label}</h2>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {product.productImage && (
          <section className="section-md product-detail-packshot">
            <picture>
              {product.productImage.desktop && (
                <source media="(min-width: 992px)" srcSet={product.productImage.desktop} />
              )}
              <img
                src={product.productImage.mobile || product.productImage.desktop}
                alt={product.productImage.alt || product.title}
              />
            </picture>
          </section>
        )}

        {(product.effects.length > 0 || product.mainTarget) && (
          <section className="section-sm product-detail-results">
            <div>
              {product.effects.length > 0 && (
                <>
                  <h2>{t('detail.effects')}</h2>
                  <ul>
                    {product.effects.map((effect) => <li key={effect}>{effect}</li>)}
                  </ul>
                </>
              )}
              {product.mainTarget && (
                <div className="product-detail-target">
                  <h3>{t('detail.target')}</h3>
                  <p>{product.mainTarget}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {product.campaignImage && (
          <section className="product-detail-campaign">
            <picture>
              {product.campaignImage.desktop && (
                <source media="(min-width: 992px)" srcSet={product.campaignImage.desktop} />
              )}
              <img
                src={product.campaignImage.mobile || product.campaignImage.desktop}
                alt={product.campaignImage.alt || `${product.title} treatment`}
              />
            </picture>
          </section>
        )}

        {product.related.length > 0 && (
          <section className="product-detail-related">
            <div>
              <h2>{t('detail.relatedProducts')}</h2>
              <div className="product-detail-related-list">
                {product.related.map((related) => (
                  <Link href={`/product/${related.slug}`} key={related.slug}>
                    <img src={related.image} alt={related.title} loading="lazy" />
                    <strong>{related.title}</strong>
                    <span>{related.category}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  );
}
