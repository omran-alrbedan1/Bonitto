import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeTechnology } from "@/components/sections/HomeTechnology";
import { HomeLeadership } from "@/components/sections/HomeLeadership";
import { HomeNews } from "@/components/sections/HomeNews";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'home', path: '' });
}

export default function HomePage() {
  return (
    <div id="blocks-wrapper" className="horizontal-scroll">
      <HomeHero />
      <HomeTechnology />
      <HomeLeadership />
      <HomeNews />
      <Footer />
    </div>
  );
}
