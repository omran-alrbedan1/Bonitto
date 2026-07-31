import { redirect } from "next/navigation";
import { type Locale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function LegacyCategoryRedirect({ params }: { params: Promise<{ locale: Locale; type: string }> }) {
  const { locale, type } = await params;
  redirect(`/${locale}/product-category/${type}`);
}
