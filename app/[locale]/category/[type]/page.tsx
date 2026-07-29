import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; type: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'news', path: '/category/[type]' });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: Locale; type: string }> }) {
  const { locale, type } = await params;
  if (type === 'events') redirect(`/${locale}/events`);
  if (type === 'research-articles') redirect(`/${locale}/research-articles`);

  redirect(`/${locale}/news-events`);
}
  
