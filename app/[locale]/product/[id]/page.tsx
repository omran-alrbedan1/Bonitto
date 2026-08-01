import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { bonittoProducts } from '@/lib/bonitto-products';
import { getLocalizedProduct } from '@/lib/product-translations';
import { type Locale } from '@/lib/i18n';

type ProductPageParams = Promise<{ locale: Locale; id: string }>;

export function generateStaticParams() {
  return bonittoProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const { locale, id } = await params;
  const product = getLocalizedProduct(id, locale);
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
  const product = getLocalizedProduct(id, locale);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: 'products' });
  const discoverMore = t('detail.discoverMore');

  return (
    <main className="product-detail-page">
      <div id="blocks-wrapper" className="horizontal-scroll product-detail-scroll">
        <section className="block-wyswyg product-detail-intro">
          <div className="container-fluid g-lg-0">
            <h1>{product.title}</h1>
            <div className="mb-4 tagline">{product.category}</div>
            <div className="wyswyg">
              <p className="product-detail-description">{product.description}</p>
            </div>

            <div className="product-detail-tech-list">
              {product.technicalInfo.map((item) => (
                <div className="tech-info-wrapper" key={`${product.id}-${item.label}`}>
                  {item.icon && (
                    <div className="tech-info-logo-wrapper">
                      <img className="tech-info-logo" src={item.icon} alt="" aria-hidden="true" />
                    </div>
                  )}
                  <div className="tech-info-text-wrapper">
                    <div className="text-info-label">{item.label}</div>
                    <div className="text-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {product.productImage && (
          <section className="section-md block-image product-detail-packshot">
            <div className="mx-auto text-center">
              <picture>
                {product.productImage.desktop && (
                  <source media="(min-width: 992px)" srcSet={product.productImage.desktop} />
                )}
                <img
                  className="pdp-image"
                  src={product.productImage.mobile || product.productImage.desktop}
                  alt={product.productImage.alt || product.title}
                />
              </picture>
            </div>
          </section>
        )}

        {(product.effects.length > 0 || product.mainTarget) && (
          <section className="section-sm block-wyswyg product-detail-results">
            <div className="container-fluid g-lg-0">
              <div className="col-12 col-lg-8">
                <div className="wyswyg">
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
              </div>
            </div>
          </section>
        )}

        {product.campaignImage && (
          <section className="block-image product-detail-campaign">
            <div className="mx-auto text-center">
              <picture>
                {product.campaignImage.desktop && (
                  <source media="(min-width: 992px)" srcSet={product.campaignImage.desktop} />
                )}
                <img
                  className="block-image-value"
                  src={product.campaignImage.mobile || product.campaignImage.desktop}
                  alt={product.campaignImage.alt || t('detail.treatmentAlt', { title: product.title })}
                />
              </picture>
            </div>
          </section>
        )}

        {product.related.length > 0 && (
          <section className="plp product-detail-related">
            <div className="container-fluid g-lg-0">
              <h2 className="text-center mb-4">{t('detail.relatedProducts')}</h2>
              <div className="product-list rows-1">
                {product.related.map((related) => (
                  <div className="product-item" key={related.slug}>
                    <Link href={`/product/${related.slug}`}>
                      <span className="product-img-overlay">
                        <span className="product-img-discover">{discoverMore}</span>
                      </span>
                      <img
                        loading="lazy"
                        className="product-img"
                        alt={related.title}
                        src={related.image}
                      />
                      <span className="d-block product-title">{related.title}</span>
                      <span className="d-block product-subtitle">{related.category}</span>
                    </Link>
                  </div>
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
