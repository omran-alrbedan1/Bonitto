'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  researchArticles,
  type ResearchArticleCategory,
} from '@/constants/researchArticles';

const filters: Array<'all' | ResearchArticleCategory> = ['all', 'fillers', 'skincare', 'mesotherapy'];

export function ResearchArticlesArchive({ categoryLabel }: { categoryLabel: string }) {
  const t = useTranslations('news');
  const [activeFilter, setActiveFilter] = useState<'all' | ResearchArticleCategory>('all');

  const visibleArticles = useMemo(() => {
    if (activeFilter === 'all') return researchArticles;
    return researchArticles.filter((article) => article.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="research-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`btn btn-white-outline publication-filter ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {t(`research.filters.${filter}`)}
          </button>
        ))}
      </div>

      <div className="news-list research-list mt-5">
        {visibleArticles.map((article) => (
          <div className="news-item publication-block-wrapper" data-cat={article.category} key={article.slug}>
            <Link className="post-link" href={`/research-articles/${article.slug}`}>
              <span className="post-img-wrapper">
                <span className="subcat-link">
                  <span className="subcat-link-text">{t(`research.categories.${article.category}`)}</span>
                </span>
                <img className="post-img" src={article.image} alt={article.alt} loading="lazy" />
              </span>
              <span className="post-text-wrapper">
                <span className="post-text-date">{article.date}</span>
                <span className="cat-link">{categoryLabel}</span>
                <h3>{article.title}</h3>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
