import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'distributors', path: '/distributors' });
}

const distributorPins = [
  { country: 'Egypt', left: '58%', top: '40%' },
  { country: 'Libya', left: '54%', top: '40%' },
  { country: 'United Arab Emirates', left: '65%', top: '40%' },
  { country: 'Iraq', left: '61%', top: '33%' },
  { country: 'Romania', left: '55%', top: '25%' },
  { country: 'Morocco', left: '40%', top: '40%' },
  { country: 'Lebanon', left: '58%', top: '33%' },
  { country: 'Kuwait', left: '58%', top: '33%' },
  { country: 'Lithuania', left: '40%', top: '20%' },
  { country: 'Armenia', left: '50%', top: '30%' },
  { country: 'Azerbaijan', left: '51%', top: '30%' },
];

export default async function DistributorsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'distributors' });

  return (
    <div id="blocks-wrapper" className="horizontal-scroll">
      <section className="block-wyswyg section-sm distributors-title-panel">
        <div className="container-fluid g-lg-0">
          <div className="wyswyg">
            <h1>{t('hero.title')}</h1>
          </div>
        </div>
      </section>

      <section className="block-map">
        <div className="block-map-inner">
          <div className="block-map-svg-wrapper">
            <img src="/distributors-map.svg" alt={t('map.alt')} />
          </div>
          {distributorPins.map((pin) => (
            <div
              className="block-map-pin"
              data-country={pin.country}
              key={`${pin.country}-${pin.left}-${pin.top}`}
              style={{ left: pin.left, top: pin.top }}
            >
              <div className="block-map-pin-text">
                <div className="block-map-pin-title">{pin.country}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
