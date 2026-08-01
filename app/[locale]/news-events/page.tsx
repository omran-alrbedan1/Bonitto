import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { Link } from "@/i18n/routing";
import Footer from "@/components/Footer";
import { events, getLocalizedEvents } from "@/constants/events";
import { getLocalizedResearchArticles, type ResearchArticleCategory } from "@/constants/researchArticles";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/news-events' });
}

type FeedItem = {
  kind: 'event' | 'article';
  feedIndex: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  category: ResearchArticleCategory | null;
};

function dateToTime(date: string): number {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
}

function getFeed(locale: Locale): FeedItem[] {
  const localizedEvents = getLocalizedEvents(locale);
  const localizedResearchArticles = getLocalizedResearchArticles(locale);

  return [
    ...localizedEvents.map((event, i) => ({
      kind: 'event' as const,
      feedIndex: i,
      slug: event.slug,
      title: event.title,
      date: event.date,
      image: event.image,
      alt: event.alt,
      category: null,
    })),
    ...localizedResearchArticles.map((article, i) => ({
      kind: 'article' as const,
      feedIndex: events.length + i,
      slug: article.slug,
      title: article.title,
      date: article.date,
      image: article.image,
      alt: article.alt,
      category: article.category,
    })),
  ].sort((a, b) => {
    const diff = dateToTime(a.date) - dateToTime(b.date);
    if (diff !== 0) return diff;
    return b.feedIndex - a.feedIndex;
  });
}

export default async function NewsEventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const feed = getFeed(locale);

  return (
    <div id="blocks-wrapper" className="news-events-scroll horizontal-scroll">
      <section className="block-wyswyg section-md" id="block-1">
        <div className="container-fluid g-lg-0">
          <div className="wyswyg">
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.description')}</p>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container-fluid g-lg-0">
          <div className="news-list">
            {feed.map((item) => (
              <div className="news-item" key={`${item.kind}-${item.slug}`}>
                <Link
                  className="post-link"
                  href={
                    item.kind === 'event'
                      ? { pathname: '/events/[slug]', params: { slug: item.slug } }
                      : { pathname: '/research-articles/[id]', params: { id: item.slug } }
                  }
                >
                  <span className="post-img-wrapper">
                    <img className="post-img" src={item.image} alt={item.alt} />
                  </span>
                  <span className="post-text-wrapper">
                    <span className="post-text-date">{item.date}</span>
                    {item.kind === 'event' ? (
                      <span className="cat-link">{t('tabs.events')}</span>
                    ) : (
                      <>
                        <span className="cat-link">{t('tabs.researchArticles')}</span>
                        <span className="cat-link"> | </span>
                        <span className="cat-link">{t(`research.categories.${item.category}`)}</span>
                      </>
                    )}
                    <h3>{item.title}</h3>
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
