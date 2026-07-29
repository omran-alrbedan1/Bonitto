import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";
import {
  getResearchArticleBySlug,
  researchArticles,
} from "@/constants/researchArticles";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params;
  const article = getResearchArticleBySlug(id);

  if (!article) {
    return getPageMetadata({ locale, page: 'news', path: '/research-articles/[id]' });
  }

  return {
    title: `${article.title} - Bonitto`,
    description: article.alt,
  };
}

export function generateStaticParams() {
  return researchArticles.map((article) => ({ id: article.slug }));
}

export default async function ResearchArticleDetailPage({ params }: { params: Promise<{ locale: Locale; id: string }> }) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const article = getResearchArticleBySlug(id);

  if (!article) notFound();

  const categoryLabel = t(`research.categories.${article.category}`);
  const fallbackContent = `
    <section>
      <h1>${article.title}</h1>
      <p><em>${categoryLabel}</em></p>
      <p>${article.alt}</p>
      <p>${t('research.detail.fallback')}</p>
    </section>
  `;

  return (
    <div id="blocks-wrapper" className="research-detail-page vertical-scroll">
      <article className="research-detail">
        <section className="research-detail-hero">
          <div className="research-detail-hero-media">
            <img src={article.image} alt={article.alt} />
          </div>
          <div className="research-detail-hero-copy">
            <Link href="/research-articles" className="event-back-link">
              {t('research.detail.back')}
            </Link>
            <div className="research-detail-meta">
              <span>{article.date}</span>
              <span>{categoryLabel}</span>
            </div>
            <div
              className="wyswyg research-detail-content"
              dangerouslySetInnerHTML={{ __html: article.contentHtml ?? fallbackContent }}
            />
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
