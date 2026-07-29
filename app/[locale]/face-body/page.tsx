import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import FaceBodyExperience from "@/components/sections/FaceBodyExperience";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'faceBody', path: '/face-body' });
}

export default async function FaceBodyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faceBody' });

  return (
    <main className="face-body-page">
      <div id="blocks-wrapper" className="horizontal-scroll">
        <section className="face-body-intro section-md">
          <div className="wyswyg">
            <p>
              <em>{t('hero.tag')}</em>
            </p>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.description')}</p>
          </div>
        </section>
        <FaceBodyExperience />
        <Footer />
      </div>
    </main>
  );
}
