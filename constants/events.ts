import type { Locale } from '@/lib/i18n';

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  intro: string;
  body: string[];
  videos?: string[];
  gallery?: Array<{
    desktop: string;
    mobile: string;
    alt: string;
  }>;
  translations?: Partial<Record<Locale, Partial<Pick<EventItem, 'title' | 'alt' | 'intro' | 'body'>>>>;
};

export const events: EventItem[] = [
  {
    slug: 'imcas-paris-2026',
    title: 'IMCAS Paris 2026',
    date: '03/02/2026',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/IMCAS_3.webp',
    alt: 'A promotional graphic for IMCAS Paris featuring the Eiffel Tower, green foliage, and event details for Bonitto at IMCAS Paris 2026.',
    intro: 'Paris, Palais des Congres de Paris - As IMCAS Paris 2026 approaches, BONITTO is eager to lead you into its renewed world of life-science.',
    body: [
      'Top ingredients, innovative techniques and a true commitment to enhancing modern lifestyle have become the path to BONITTO success.',
      'Discover its wide range of anti-aging formulas, with a focus on rejuvenation, hydration and brightness of the complexion.',
      'Join BONITTO at IMCAS Paris at Booth A 104 from 29 January to 31 January 2026.',
      'Visitors will be able to dive deep into BONITTO know-how and experience the product world firsthand.',
    ],
    videos: [
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-IMCAS-2026.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-1.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-2.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-3.1.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-3.2.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-4.1.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-4.2.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-5.webm',
      'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Video-inverviste-IMCAS-2026-part-6.webm',
    ],
    gallery: [
      {
        desktop: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_1-scaled.jpg',
        mobile: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_1-819x1024.jpg',
        alt: 'An aerial view of Paris with the Eiffel Tower and the Seine River, overlaid with IMCAS Paris 2026 text.',
      },
      {
        desktop: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_3-scaled.jpg',
        mobile: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_3-819x1024.jpg',
        alt: 'People stand at a bright green Bonitto booth with product displays.',
      },
      {
        desktop: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_5-scaled.jpg',
        mobile: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_5-819x1024.jpg',
        alt: 'Close-up of Bonitto skincare products displayed on a teal tray.',
      },
      {
        desktop: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_8-scaled.jpg',
        mobile: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/Bonitto_IMCAS_carosello_8-819x1024.jpg',
        alt: 'People gather at a turquoise Bonitto exhibition booth.',
      },
      {
        desktop: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/IMCAS-2_Bonitto_9.jpg',
        mobile: 'https://www.bonittoaesthetic.com/wp-content/uploads/2026/02/IMCAS-2_Bonitto_9-819x1024.jpg',
        alt: 'Bonitto skincare product boxes displayed upright.',
      },
    ],
  },
  {
    slug: 'bonitto-at-amwc-asia-pacific-2025',
    title: 'BONITTO® AT AMWC ASIA PACIFIC 2025',
    date: '04/12/2025',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/12/amwc-bangkok-2025.webp',
    alt: 'Promotional graphic for AMWC Asia Pacific 2025 in Bangkok.',
    intro: 'BONITTO joins AMWC Asia Pacific 2025 in Bangkok.',
    body: ['Meet the BONITTO team and discover the formulas, product lines, and aesthetic philosophy behind the brand.'],
  },
  {
    slug: 'bonitto-at-amwc-latin-america-2025',
    title: 'BONITTO® AT AMWC LATIN AMERICA 2025',
    date: '08/10/2025',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/10/Post-AMWC-colombia-05-scaled.webp',
    alt: 'Promotional graphic for AMWC Latin America 2025 in Medellin.',
    intro: 'BONITTO presents its world of life-science at AMWC Latin America 2025.',
    body: ['Join the event to connect with the brand, explore professional aesthetic solutions, and meet industry specialists.'],
  },
  {
    slug: 'beauty-and-beyond-summit-2025',
    title: 'Beauty and Beyond Summit 2025',
    date: '13/08/2025',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/08/beauty-and-beyond-1.webp',
    alt: 'Promotional graphic for Beauty and Beyond Summit 2025 in Dubai.',
    intro: 'BONITTO takes part in Beauty and Beyond Summit 2025 in Dubai.',
    body: ['A dedicated opportunity to explore Bonitto product innovation, professional cosmetic lines, and treatment-focused aesthetic solutions.'],
  },
  {
    slug: 'meidam-2025-dubai-world-trade-center',
    title: 'Meidam Congress 2025',
    date: '13/08/2025',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/08/Meidam-1.webp',
    alt: 'Promotional graphic for MEIDAM Congress 2025 in Dubai.',
    intro: 'BONITTO attends MEIDAM Congress 2025 at Dubai World Trade Center.',
    body: ['Meet the team, discover product highlights, and experience the Bonitto approach to modern aesthetic medicine.'],
  },
  {
    slug: 'amwc-dubai-2025',
    title: 'AMWC Dubai 2025',
    date: '01/12/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/Banner-orizzontali-22-min.webp',
    alt: 'Promotional graphic for AMWC Dubai 2025.',
    intro: 'BONITTO at AMWC Dubai 2025.',
    body: ['Discover the Bonitto product universe and connect directly with the people behind the brand.'],
  },
  {
    slug: 'meidam-congress-2024',
    title: 'Meidam Congress 2024',
    date: '30/11/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/Banner-orizzontali-21-min.webp',
    alt: 'Promotional graphic for Meidam Congress 2024.',
    intro: 'BONITTO at Meidam Congress 2024.',
    body: ['An event moment dedicated to innovation, professional exchange, and the Bonitto aesthetic philosophy.'],
  },
  {
    slug: 'dubai-derma-2025',
    title: 'Dubai Derma 2025',
    date: '29/11/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/Banner-orizzontali-24-min.webp',
    alt: 'Promotional graphic for Dubai Derma 2025.',
    intro: 'BONITTO at Dubai Derma 2025.',
    body: ['Visit the Bonitto booth to experience advanced aesthetic products and professional treatment concepts.'],
  },
  {
    slug: 'amwc-monaco-2025',
    title: 'AMWC Monaco 2025',
    date: '28/11/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/Banner-orizzontali-25-min.webp',
    alt: 'Promotional graphic for AMWC Monaco 2025.',
    intro: 'BONITTO at AMWC Monaco 2025.',
    body: ['A chance to explore the brand at one of the leading international meetings for aesthetic and anti-aging medicine.'],
  },
  {
    slug: 'imcas-paris-2025',
    title: 'IMCAS Paris 2025',
    date: '27/11/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/Banner-orizzontali-23-min.webp',
    alt: 'Promotional graphic for IMCAS Paris 2025.',
    intro: 'BONITTO at IMCAS Paris 2025.',
    body: ['Experience the Bonitto product world and meet specialists at the Paris congress.'],
  },
  {
    slug: 'zayed-derma-2025',
    title: 'Zayed Derma 2025',
    date: '12/11/2024',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/01/Zayed-Derma.webp',
    alt: 'Promotional graphic for Zayed Derma 2025.',
    intro: 'BONITTO at Zayed Derma 2025.',
    body: ['Connect with Bonitto and discover the professional aesthetic solutions presented at the event.'],
  },
];

const eventTitleTranslations: Record<string, Partial<Record<Locale, string>>> = {
  'imcas-paris-2026': {
    fr: 'IMCAS Paris 2026',
    de: 'IMCAS Paris 2026',
    it: 'IMCAS Parigi 2026',
    ru: 'IMCAS Париж 2026',
    tr: 'IMCAS Paris 2026',
    ar: 'آي إم كاس باريس 2026',
    es: 'IMCAS París 2026',
    he: 'IMCAS פריז 2026',
  },
  'bonitto-at-amwc-asia-pacific-2025': {
    fr: 'BONITTO® à AMWC Asie-Pacifique 2025',
    de: 'BONITTO® auf der AMWC Asia Pacific 2025',
    it: 'BONITTO® all’AMWC Asia Pacific 2025',
    ru: 'BONITTO® на AMWC Asia Pacific 2025',
    tr: 'BONITTO® AMWC Asia Pacific 2025’te',
    ar: 'بونيتو® في AMWC آسيا والمحيط الهادئ 2025',
    es: 'BONITTO® en AMWC Asia Pacific 2025',
    he: 'BONITTO® ב-AMWC אסיה-פסיפיק 2025',
  },
  'bonitto-at-amwc-latin-america-2025': {
    fr: 'BONITTO® à AMWC Amérique Latine 2025',
    de: 'BONITTO® auf der AMWC Latin America 2025',
    it: 'BONITTO® all’AMWC Latin America 2025',
    ru: 'BONITTO® на AMWC Latin America 2025',
    tr: 'BONITTO® AMWC Latin America 2025’te',
    ar: 'بونيتو® في AMWC أمريكا اللاتينية 2025',
    es: 'BONITTO® en AMWC Latinoamérica 2025',
    he: 'BONITTO® ב-AMWC אמריקה הלטינית 2025',
  },
  'beauty-and-beyond-summit-2025': {
    fr: 'Beauty and Beyond Summit 2025',
    de: 'Beauty and Beyond Summit 2025',
    it: 'Beauty and Beyond Summit 2025',
    ru: 'Саммит Beauty and Beyond 2025',
    tr: 'Beauty and Beyond Summit 2025',
    ar: 'قمة Beauty and Beyond 2025',
    es: 'Beauty and Beyond Summit 2025',
    he: 'פסגת Beauty and Beyond 2025',
  },
  'meidam-2025-dubai-world-trade-center': {
    fr: 'Congrès Meidam 2025',
    de: 'Meidam Congress 2025',
    it: 'Congresso Meidam 2025',
    ru: 'Конгресс Meidam 2025',
    tr: 'Meidam Kongresi 2025',
    ar: 'مؤتمر ميدام 2025',
    es: 'Congreso Meidam 2025',
    he: 'כנס Meidam 2025',
  },
  'amwc-dubai-2025': {
    fr: 'AMWC Dubaï 2025',
    de: 'AMWC Dubai 2025',
    it: 'AMWC Dubai 2025',
    ru: 'AMWC Дубай 2025',
    tr: 'AMWC Dubai 2025',
    ar: 'AMWC دبي 2025',
    es: 'AMWC Dubái 2025',
    he: 'AMWC דובאי 2025',
  },
  'meidam-congress-2024': {
    fr: 'Congrès Meidam 2024',
    de: 'Meidam Congress 2024',
    it: 'Congresso Meidam 2024',
    ru: 'Конгресс Meidam 2024',
    tr: 'Meidam Kongresi 2024',
    ar: 'مؤتمر ميدام 2024',
    es: 'Congreso Meidam 2024',
    he: 'כנס Meidam 2024',
  },
  'dubai-derma-2025': {
    fr: 'Dubai Derma 2025',
    de: 'Dubai Derma 2025',
    it: 'Dubai Derma 2025',
    ru: 'Dubai Derma 2025',
    tr: 'Dubai Derma 2025',
    ar: 'دبي ديرما 2025',
    es: 'Dubai Derma 2025',
    he: 'Dubai Derma 2025',
  },
  'amwc-monaco-2025': {
    fr: 'AMWC Monaco 2025',
    de: 'AMWC Monaco 2025',
    it: 'AMWC Monaco 2025',
    ru: 'AMWC Монако 2025',
    tr: 'AMWC Monako 2025',
    ar: 'AMWC موناكو 2025',
    es: 'AMWC Mónaco 2025',
    he: 'AMWC מונקו 2025',
  },
  'imcas-paris-2025': {
    fr: 'IMCAS Paris 2025',
    de: 'IMCAS Paris 2025',
    it: 'IMCAS Parigi 2025',
    ru: 'IMCAS Париж 2025',
    tr: 'IMCAS Paris 2025',
    ar: 'آي إم كاس باريس 2025',
    es: 'IMCAS París 2025',
    he: 'IMCAS פריז 2025',
  },
  'zayed-derma-2025': {
    fr: 'Zayed Derma 2025',
    de: 'Zayed Derma 2025',
    it: 'Zayed Derma 2025',
    ru: 'Zayed Derma 2025',
    tr: 'Zayed Derma 2025',
    ar: 'زايد ديرما 2025',
    es: 'Zayed Derma 2025',
    he: 'Zayed Derma 2025',
  },
};

const localizedEventCopy: Partial<Record<Locale, Pick<EventItem, 'intro' | 'body'>>> = {
  fr: {
    intro: 'BONITTO participe à cet événement pour présenter son univers life-science, ses formules professionnelles et sa vision de la médecine esthétique moderne.',
    body: ['Rencontrez l’équipe BONITTO, découvrez les nouveautés produit et échangez avec des spécialistes du secteur autour de solutions esthétiques professionnelles.'],
  },
  de: {
    intro: 'BONITTO nimmt an dieser Veranstaltung teil, um seine Life-Science-Welt, professionellen Formeln und die Vision moderner ästhetischer Medizin zu präsentieren.',
    body: ['Treffen Sie das BONITTO-Team, entdecken Sie Produktneuheiten und tauschen Sie sich mit Fachleuten über professionelle ästhetische Lösungen aus.'],
  },
  it: {
    intro: 'BONITTO partecipa a questo evento per presentare il suo mondo life-science, le formule professionali e la propria visione della medicina estetica moderna.',
    body: ['Incontra il team BONITTO, scopri le novità di prodotto e confrontati con specialisti del settore sulle soluzioni estetiche professionali.'],
  },
  ru: {
    intro: 'BONITTO участвует в этом событии, чтобы представить свой мир life-science, профессиональные формулы и видение современной эстетической медицины.',
    body: ['Познакомьтесь с командой BONITTO, узнайте о новинках и обсудите профессиональные эстетические решения со специалистами отрасли.'],
  },
  tr: {
    intro: 'BONITTO, life-science dünyasını, profesyonel formüllerini ve modern estetik tıp vizyonunu tanıtmak için bu etkinliğe katılıyor.',
    body: ['BONITTO ekibiyle tanışın, ürün yeniliklerini keşfedin ve profesyonel estetik çözümler hakkında sektör uzmanlarıyla görüşün.'],
  },
  ar: {
    intro: 'تشارك بونيتو في هذا الحدث لعرض عالمها القائم على علوم الحياة وتركيباتها المهنية ورؤيتها للطب التجميلي الحديث.',
    body: ['التقوا بفريق بونيتو، واكتشفوا أحدث المنتجات، وتواصلوا مع خبراء القطاع حول حلول تجميلية مهنية.'],
  },
  es: {
    intro: 'BONITTO participa en este evento para presentar su universo life-science, sus fórmulas profesionales y su visión de la medicina estética moderna.',
    body: ['Conoce al equipo de BONITTO, descubre las novedades de producto y conversa con especialistas del sector sobre soluciones estéticas profesionales.'],
  },
  he: {
    intro: 'BONITTO משתתפת באירוע זה כדי להציג את עולם ה-life-science שלה, את הפורמולות המקצועיות ואת החזון שלה לרפואה אסתטית מודרנית.',
    body: ['פגשו את צוות BONITTO, גלו חידושי מוצר ושוחחו עם מומחי התחום על פתרונות אסתטיים מקצועיים.'],
  },
};

export function getLocalizedEvent(event: EventItem, locale: Locale): EventItem {
  const eventSpecific = event.translations?.[locale];
  const sharedCopy = locale === 'en' ? undefined : localizedEventCopy[locale];

  return {
    ...event,
    ...sharedCopy,
    ...eventSpecific,
    title: eventSpecific?.title ?? eventTitleTranslations[event.slug]?.[locale] ?? event.title,
  };
}

export function getLocalizedEvents(locale: Locale): EventItem[] {
  return events.map((event) => getLocalizedEvent(event, locale));
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getLocalizedEventBySlug(slug: string, locale: Locale) {
  const event = getEventBySlug(slug);
  return event ? getLocalizedEvent(event, locale) : undefined;
}
