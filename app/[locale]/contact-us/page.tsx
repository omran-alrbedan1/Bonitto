import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/sections/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'contact', path: '/contact-us' });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div id="blocks-wrapper" className="horizontal-scroll">
      <section className="contact-section contact-copy block-wyswyg w-full min-h-[100dvh] md:h-full flex items-center md:px-12 py-16 md:py-0">
        <div className="wyswyg max-w-[620px]">
          <h1>{t('hero.title')}</h1>
          <div className="h-8" />
          <p>{t('hero.description')}</p>
        </div>
      </section>

      <section className="contact-section contact-form-section block-form section-md w-full min-h-[100dvh] md:h-full flex items-center md:px-12 py-16 md:py-0">
        <div className="form-html w-full max-w-[680px]">
          <ContactForm />
        </div>
      </section>

      <section className="contact-section contact-media block-image section-md w-full min-h-[100dvh] md:h-full flex items-center justify-center overflow-hidden">
        <picture>
          <source
            width="1710"
            height="2560"
            media="(min-width:992px)"
            srcSet="https://www.bonittoaesthetic.com/wp-content/uploads/2024/08/07_hair-ultra-RGB-1.webp"
          />
          <img
            decoding="async"
            loading="lazy"
            width="684"
            height="1024"
            className="block-image-value"
            src="https://www.bonittoaesthetic.com/wp-content/uploads/2024/08/07_hair-ultra-RGB-1-684x1024.webp"
            title="07_hair ultra RGB"
            alt={t('image.alt')}
          />
        </picture>
      </section>

      <Footer />
    </div>
  );
}
