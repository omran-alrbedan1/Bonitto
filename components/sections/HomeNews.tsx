'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const articles = [
  {
    slug: 'imcas-paris-2026',
    type: 'event' as const,
    titleKey: 'imcasTitle',
    date: '03/02/2026',
    categoryKeys: ['events'],
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/IMCAS_3.webp',
    alt: 'A promotional graphic for IMCAS Paris featuring the Eiffel Tower and event details',
  },
  {
    slug: 'dermal-filler',
    type: 'article' as const,
    titleKey: 'dermalFillerTitle',
    date: '01/01/2026',
    categoryKeys: ['researchArticles', 'fillers'],
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/12/hyaluronic-acid.webp',
    alt: 'Abstract image showing transparent spheres floating above a mesh-like surface in greenish-blue hues',
  },
  {
    slug: 'the-relevant-acne-solutions',
    type: 'article' as const,
    titleKey: 'acneSolutionsTitle',
    date: '10/12/2025',
    categoryKeys: ['researchArticles', 'mesotherapy'],
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/12/acne.webp',
    alt: 'A close-up of a woman with visible acne and redness against a green background',
  },
];

export function HomeNews() {
  const t = useTranslations('home');

  return (
    <section className="home-section home-news-section">
      <div className="home-section-copy">
        <div className="home-copy-inner home-news-copy">
          <h2 className="mb-4">
            {t('news.title')}
          </h2>
          <p className="home-body-copy mb-8">
            {t('news.description')}
          </p>
          <Link href="/news-events" className="btn btn-white-outline">
            {t('news.viewAll')}
          </Link>
        </div>
      </div>

      <div className="home-news-list">
        <div className="home-news-grid">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.type === 'event' ? `/events/${article.slug}` : `/research-articles/${article.slug}`}
              className="post-link"
            >
              <span className="block">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="post-img"
                  loading="lazy"
                />
              </span>
              <span className="post-text-wrapper">
                <span className="post-text-date">{article.date}</span>
                {article.categoryKeys.map((catKey, i) => (
                  <span key={catKey}>
                    {i > 0 && <span> | </span>}
                    <span>{t(`news.categories.${catKey}`)}</span>
                  </span>
                ))}
                <h3>{t(`news.${article.titleKey}`)}</h3>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
