import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'about', path: '/about-us' });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const rich = {
    strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
  };

  return (
    <div id="blocks-wrapper" className="horizontal-scroll">
      <section className="section-about-pair w-full min-h-[100dvh] md:h-full grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <div className="block-wyswyg flex items-center px-6 md:px-12 py-16 md:py-0">
          <div className="wyswyg max-w-[660px]">
            <h1>{t('hero.title')}</h1>
            <div className="h-8" />
            <p className="p1">{t.rich('hero.intro', rich)}</p>
          </div>
        </div>

        <div className="block-image flex items-center justify-center overflow-hidden px-6 pb-16 md:px-0 md:pb-0">
          <picture className="h-full w-full">
            <source
              width="1776"
              height="2560"
              media="(min-width:992px)"
              srcSet="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/14Microscopio.webp"
            />
            <img
              decoding="async"
              loading="lazy"
              width="710"
              height="1024"
              className="block-image-value"
              src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/14Microscopio-710x1024.webp"
              title="14Microscopio"
              alt={t('images.microscopeAlt')}
            />
          </picture>
        </div>
      </section>

      <section className="section-about-pair w-full min-h-[100dvh] md:h-full grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        <div className="block-wyswyg flex items-center px-6 md:px-12 py-16 md:py-0">
          <div className="wyswyg max-w-[760px]">
            <h2 className="p1">{t('quality.title')}</h2>
            <div className="h-8" />
            <p className="p1">{t.rich('quality.intro', rich)}</p>
            <p className="p1">{t.rich('quality.cosmeticLines', rich)}</p>
            <p className="p1">{t.rich('quality.medicalDeviceLines', rich)}</p>
            <p className="p1">{t.rich('quality.qualityDriven', rich)}</p>
            <p className="p1">{t.rich('quality.support', rich)}</p>
          </div>
        </div>

        <div className="block-image flex items-center justify-center overflow-hidden px-6 pb-16 md:px-0 md:pb-0">
          <picture className="h-full w-full">
            <source
              width="1710"
              height="2560"
              media="(min-width:992px)"
              srcSet="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/00BlondeModelSigned.webp"
            />
            <img
              decoding="async"
              loading="lazy"
              width="684"
              height="1024"
              className="block-image-value"
              src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/10/00BlondeModelSigned-684x1024.webp"
              title="00BlondeModelSigned"
              alt={t('images.modelAlt')}
            />
          </picture>
        </div>
      </section>

      <Footer />
    </div>
  );
}
