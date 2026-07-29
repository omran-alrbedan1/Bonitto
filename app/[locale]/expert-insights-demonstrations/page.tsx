import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

const demoVideoUrl = "https://www.bonittoaesthetic.com/wp-content/uploads/2026/01/16-9-BONITTO-Before-and-After-_1-1.mp4";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'expertInsights', path: '/expert-insights-demonstrations' });
}

export default async function ExpertInsightsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'expertInsights' });
  const bullets = t.raw('demo.bullets') as string[];

  return (
    <main className="expert-insights-page">
      <div id="blocks-wrapper" className="horizontal-scroll">
        <section className="expert-insights-intro section-md">
          <div className="wyswyg">
            <p>
              <em>{t('hero.tag')}</em>
            </p>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.description')}</p>
          </div>
        </section>

        <section className="expert-insights-demo section-about-pair">
          <div className="expert-demo-media" aria-label={t('demo.videoLabel')}>
            <div className="expert-demo-frame">
              <video className="expert-demo-video" controls preload="metadata" playsInline>
                <source src={demoVideoUrl} type="video/mp4" />
                {t('demo.videoFallback')}
              </video>
            </div>
          </div>

          <div className="expert-demo-copy">
            <div className="wyswyg">
              <p>
                <em>{t('demo.eyebrow')}</em>
              </p>
              <h2>{t('demo.title')}</h2>
              <p>{t('demo.description')}</p>
              <ul>
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="block-footer section-md">
          <div className="footer-main">
            <div className="wyswyg">
              <h2>{t('closing.title')}</h2>
              <p>{t('closing.description')}</p>
              <a className="btn btn-white-outline" href={`/${locale}/contact-us`}>
                {t('closing.cta')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
