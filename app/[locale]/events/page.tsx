import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { Link } from "@/i18n/routing";
import Footer from "@/components/Footer";
import { getLocalizedEvents } from "@/constants/events";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/events' });
}

export default async function EventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const categoryLabel = t('tabs.events');
  const events = getLocalizedEvents(locale);

  return (
    <div id="blocks-wrapper" className="events-page vertical-scroll">
      <section className="events-section news">
        <div className="container-fluid">
          <h1 className="mb-5 text-center">{categoryLabel}</h1>
          <div className="category-description text-center">
            {t('categories.events.description')}
          </div>
          <div className="news-list !mt-12">
            {events.map((event) => (
              <div className="news-item" key={event.slug}>
                <Link className="post-link" href={{ pathname: '/events/[slug]', params: { slug: event.slug } }}>
                  <span className="post-img-wrapper">
                    <img className="post-img" src={event.image} alt={event.alt} />
                  </span>
                  <span className="post-text-wrapper">
                    <span className="post-text-date">{event.date}</span>
                    <span className="cat-link">{categoryLabel}</span>
                    <h3>{event.title}</h3>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
