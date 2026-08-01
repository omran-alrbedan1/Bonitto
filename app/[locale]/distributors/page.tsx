import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'distributors', path: '/distributors' });
}

const distributorContent: Record<Locale, { title: string  ; countries: string[] }> = {
  en: {
    title: 'presence\nworldwide',
    countries: ['Egypt', 'Libya', 'United Arab Emirates', 'Iraq', 'Romania', 'Morocco', 'Lebanon', 'Kuwait', 'Lithuania', 'Armenia', 'Azerbaijan'],
  },
  fr: {
    title: 'présence\nmondiale',
    countries: ['Égypte', 'Libye', 'Émirats arabes unis', 'Irak', 'Roumanie', 'Maroc', 'Liban', 'Koweït', 'Lituanie', 'Arménie', 'Azerbaïdjan'],
  },
  de: {
    title: 'weltweite\npräsenz',
    countries: ['Ägypten', 'Libyen', 'Vereinigte Arabische Emirate', 'Irak', 'Rumänien', 'Marokko', 'Libanon', 'Kuwait', 'Litauen', 'Armenien', 'Aserbaidschan'],
  },
  it: {
    title: 'presenza\nmondiale',
    countries: ['Egitto', 'Libia', 'Emirati Arabi Uniti', 'Iraq', 'Romania', 'Marocco', 'Libano', 'Kuwait', 'Lituania', 'Armenia', 'Azerbaigian'],
  },
  ru: {
    title: 'присутствие\nпо всему миру',
    countries: ['Египет', 'Ливия', 'Объединенные Арабские Эмираты', 'Ирак', 'Румыния', 'Марокко', 'Ливан', 'Кувейт', 'Литва', 'Армения', 'Азербайджан'],
  },
  tr: {
    title: 'dünya çapında\nvarlık',
    countries: ['Mısır', 'Libya', 'Birleşik Arap Emirlikleri', 'Irak', 'Romanya', 'Fas', 'Lübnan', 'Kuveyt', 'Litvanya', 'Ermenistan', 'Azerbaycan'],
  },
  ar: {
    title: 'حضور\nعالمي',
    countries: ['مصر', 'ليبيا', 'الإمارات العربية المتحدة', 'العراق', 'رومانيا', 'المغرب', 'لبنان', 'الكويت', 'ليتوانيا', 'أرمينيا', 'أذربيجان'],
  },
  es: {
    title: 'presencia\nmundial',
    countries: ['Egipto', 'Libia', 'Emiratos Árabes Unidos', 'Irak', 'Rumanía', 'Marruecos', 'Líbano', 'Kuwait', 'Lituania', 'Armenia', 'Azerbaiyán'],
  },
  he: {
    title: 'נוכחות\nעולמית',
    countries: ['מצרים', 'לוב', 'איחוד האמירויות הערביות', 'עיראק', 'רומניה', 'מרוקו', 'לבנון', 'כווית', 'ליטא', 'ארמניה', 'אזרבייג׳ן'],
  },
};

export default async function DistributorsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = distributorContent[locale] ?? distributorContent.en;

  return (
    <div id="blocks-wrapper" className="horizontal-scroll">
      <section className="block-wyswyg section-sm distributors-title-panel">
        <div className="container-fluid g-lg-0">
          <div className="wyswyg">
            <h1>
              {content.title.split('\n').map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>
      <section className="block-map distributors-map-panel" aria-label="Bonitto distributor presence map">
        <div className="block-map-inner">
          <div className="block-map-svg-wrapper">
            <img src="/distributors-map.svg" alt="World map showing Bonitto distributor presence worldwide" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
