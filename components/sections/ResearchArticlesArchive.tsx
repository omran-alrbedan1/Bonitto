'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { NewsCard } from '@/components/NewsCard';
import type { Locale } from '@/lib/i18n';
import {
  getLocalizedResearchArticles,
  type ResearchArticleCategory,
} from '@/constants/researchArticles';

const filters: Array<'all' | ResearchArticleCategory> = ['all', 'fillers', 'skincare', 'mesotherapy'];

export function ResearchArticlesArchive({ categoryLabel }: { categoryLabel: string }) {
  const t = useTranslations('news');
  const locale = useLocale() as Locale;
  const [activeFilter, setActiveFilter] = useState<'all' | ResearchArticleCategory>('all');
  const localizedResearchArticles = useMemo(() => getLocalizedResearchArticles(locale), [locale]);

  const visibleArticles = useMemo(() => {
    if (activeFilter === 'all') return localizedResearchArticles;
    return localizedResearchArticles.filter((article) => article.category === activeFilter);
  }, [activeFilter, localizedResearchArticles]);

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
            <NewsCard
              href={{ pathname: '/research-articles/[id]', params: { id: article.slug } }}
              image={article.image}
              alt={article.alt}
              title={article.title}
              date={article.date}
              category={categoryLabel}
              label={t(`research.categories.${article.category}`)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
