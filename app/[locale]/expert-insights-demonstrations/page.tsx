import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";

const demoVideoUrl = "https://www.bonittoaesthetic.com/wp-content/uploads/2026/01/16-9-BONITTO-Before-and-After-_1-1.mp4";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'expertInsights', path: '/expert-insights-demonstrations' });
}

export default async function ExpertInsightsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'expertInsights' });

  return (
    <main className="expert-insights-page">
      <div id="blocks-wrapper" className="horizontal-scroll">
        <section className="block-wyswyg section-md">
          <div className="wyswyg">
            <h1>{t('hero.title')}</h1>
          </div>
        </section>

        <section className="block-wyswyg expert-insights-demo-copy section-md">
          <div className="wyswyg">
            <h2>{t('demo.title')}</h2>
            <p>{t('demo.description')}</p>
          </div>
        </section>

        <section className="block-video section-md expert-insights-video" aria-label={t('demo.videoLabel')}>
          <video className="video-full-height" controls preload="metadata" playsInline>
            <source src={demoVideoUrl} type="video/mp4" />
            {t('demo.videoFallback')}
          </video>
        </section>

        <Footer />
      </div>
    </main>
  );
}
