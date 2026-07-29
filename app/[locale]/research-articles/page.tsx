import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { ResearchArticlesArchive } from "@/components/sections/ResearchArticlesArchive";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/research-articles' });
}

export default async function ResearchArticlesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const categoryLabel = t('tabs.researchArticles');

  return (
    <div id="blocks-wrapper" className="research-archive-page vertical-scroll">
      <section className="research-archive-section news">
        <div className="container-fluid">
          <h1 className="mb-5 text-center">{categoryLabel}</h1>
          <div className="category-description text-center">
            {t('research.description')}
          </div>
          <ResearchArticlesArchive categoryLabel={categoryLabel} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
