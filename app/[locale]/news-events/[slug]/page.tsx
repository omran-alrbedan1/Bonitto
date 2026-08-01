import { redirect } from "next/navigation";
import { type Locale } from "@/lib/i18n";
import { getEventBySlug } from "@/constants/events";

export const dynamic = "force-dynamic";

export default async function LegacyNewsEventsDetailRedirect({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;

  if (getEventBySlug(slug)) {
    redirect(`/${locale}/events/${slug}`);
  }

  redirect(`/${locale}/research-articles/${slug}`);
}
