import type { Locale } from '@/lib/i18n';

export type ResearchArticleCategory = 'fillers' | 'skincare' | 'mesotherapy';

export type ResearchArticle = {
  slug: string;
  title: string;
  date: string;
  category: ResearchArticleCategory;
  image: string;
  alt: string;
  contentHtml?: string;
  translations?: Partial<Record<Locale, Partial<Pick<ResearchArticle, 'title' | 'alt' | 'contentHtml'>>>>;
};

export const researchCategoryLabels: Record<ResearchArticleCategory, string> = {
  fillers: 'Fillers',
  skincare: 'Skincare',
  mesotherapy: 'Mesotherapy',
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: 'dermal-filler',
    title: 'Dermal Filler',
    date: '01/01/2026',
    category: 'fillers',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/12/hyaluronic-acid.webp',
    alt: 'Abstract image showing transparent spheres floating above a mesh-like surface in greenish-blue hues.',
    contentHtml: `
      <section>
        <h1>Dermal Filler</h1>
        <p><em>Science behind crosslinking</em></p>
        <p>In aesthetic medicine, <b>not all fillers are created equal</b> — not even hyaluronic acid-based ones.</p>
        <p>HA - hyaluronic acid - is a molecule naturally found in the skin. Its production decreases over time, contributing to loss of firmness and the appearance of wrinkles. <b>Hyaluronic acid plays a central role in dermal fillers</b>, but its cross-linked forms are the foundation of the Bonitto product line.</p>
        <p>That is why <b>all Bonitto fillers are cross-linked</b>.</p>
      </section>
      <section>
        <h2>What is crosslinking?</h2>
        <p><b>Crosslinking is a chemical process</b> that connects hyaluronic acid molecules, creating a stable, three-dimensional network.</p>
        <p>This structure allows the filler to <b>maintain shape and performance</b> for 6 to 18 months, depending on the formulation and treatment area.</p>
        <p>From denser fillers for deep structural support to softer ones for lips and fine lines, Bonitto fillers use <b>different degrees of cross-linking</b> to meet specific needs:</p>
        <ul>
          <li><b>High density</b> - Structural volumization</li>
          <li><b>Medium density</b> - Moderate wrinkle correction, contour definition</li>
          <li><b>Low density</b> - Lips, superficial lines, deep hydration</li>
        </ul>
      </section>
      <section>
        <h2>Our philosophy and method</h2>
        <p>When planning a filler treatment, a qualified professional always considers individual facial anatomy, specific aesthetic goals, skin texture and dermal thickness, previous treatments, and patient expectations.</p>
        <p>And there are four further principles that play a crucial role in the world of cross-linked fillers:</p>
        <ul>
          <li><b>Surgical Precision</b><br />The stable structure of cross-linked HA allows for millimetric control in sculpting and reshaping, ensuring defined, symmetrical and predictable results over time.</li>
          <li><b>Proven Safety</b><br />Decades of clinical research and documented treatments confirm the high safety profile of premium cross-linked fillers.</li>
          <li><b>Natural Results</b><br />New-generation formulations provide softness, optimal tissue integration and natural movement.</li>
          <li><b>Reversibility</b><br />If necessary, hyaluronic acid fillers can be dissolved using hyaluronidase, offering an additional layer of safety, control and personalization.</li>
        </ul>
      </section>
      <section>
        <h2>Why Bonitto?</h2>
        <p>Choosing Bonitto is not just about a filler: it is an invitation to <b>redefine beauty with awareness and harmony</b>.</p>
        <p>Our crosslinked fillers embody cutting-edge research, technological rigor, and an aesthetic philosophy rooted in well-being.</p>
        <p>Discover an approach that blends science, Italian craftsmanship, and <b>a global vision of beauty</b>.</p>
      </section>
    `,
  },
  {
    slug: 'the-relevant-acne-solutions',
    title: 'The relevant acne solutions',
    date: '10/12/2025',
    category: 'mesotherapy',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/12/acne.webp',
    alt: 'A close-up of a woman touching her chin, showing visible acne and redness against a green background.',
  },
  {
    slug: 'l-proline-glycine-scientific-innovation-in-bdde-crosslinked-hyaluronic-acid-fillers',
    title: 'L-Proline & Glycine: Scientific Innovation in BDDE-Crosslinked Hyaluronic Acid Fillers',
    date: '21/11/2025',
    category: 'fillers',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/11/articolo-novembre.webp',
    alt: 'A woman receives a cosmetic cheek injection from someone wearing green gloves.',
  },
  {
    slug: 'lightnet-cream-gentle-brightening-with-barrier-support',
    title: 'Lightnet Cream: Gentle Brightening with Barrier Support',
    date: '25/09/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/09/eye-brightening-2.webp',
    alt: 'A woman with clear skin gently cups her face with both hands against a teal background.',
  },
  {
    slug: 'science-behind-eye-brightening-care',
    title: 'Science Behind Eye & Brightening Care',
    date: '24/09/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/09/eye-brightening.webp',
    alt: 'A close-up of a woman with white cream applied to her cheek against a teal background.',
  },
  {
    slug: 'bonittos-customized-skincare-solutions',
    title: "BONITTO's Customized Skincare Solutions",
    date: '25/08/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/09/skincare-2.webp',
    alt: 'A close-up face partly obscured by green leaves with water droplets on the skin.',
  },
  {
    slug: 'why-skincare-kits-outshine-single-products',
    title: 'Why Skincare Kits Outshine Single Products',
    date: '24/08/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/09/skincare.webp',
    alt: 'A smooth teal-colored cream smeared in abstract curved shapes.',
  },
  {
    slug: 'the-science-behind-dermal-fillers',
    title: 'Science behind dermal fillers',
    date: '16/07/2025',
    category: 'fillers',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/07/science.webp',
    alt: 'A stylized DNA double helix with water-like textures set against a teal background.',
  },
  {
    slug: 'the-summer-hydration-hero',
    title: 'Summer Hydration Hero',
    date: '16/07/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/07/hydration.webp',
    alt: 'A woman with glowing skin gently touches her face with both hands.',
  },
  {
    slug: 'seasonal-skincare-switch-up',
    title: 'Seasonal Skincare Switch-up',
    date: '11/06/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/06/bonitto-summer.webp',
    alt: 'A woman applies a dab of cream under her eye with her fingertip.',
  },
  {
    slug: 'natural-looking-fillers',
    title: 'Natural-looking fillers',
    date: '11/06/2025',
    category: 'fillers',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/06/natural-looking-fillers.webp',
    alt: 'A close-up of lips being injected with a syringe held by a gloved hand.',
    contentHtml: `
      <section>
        <h1>Natural-looking fillers</h1>
        <h2>Enjoy a gentle awakening and a rejuvenated look this summer.</h2>
        <p>Summer is the season of <b>sun, beauty and, in a way, freedom</b>.</p>
        <p>It is also the season where make-up becomes lighter and more natural. <b>There is a secret to looking your best</b>, even without foundation, blush and kajal.</p>
        <p>Natural-looking fillers are a lightweight and ultra-hydrating solution, also one of the finest ways to <b>restore freshness, smooth out lines and improve facial harmony</b>, making the skin toned, radiant and summer-proof.</p>
        <p>Whether it is for a little touch of rejuvenation <b>before your summer travels or at special events</b>, this is the perfect time to go natural.</p>
      </section>
      <section>
        <h3>N-01 BONITTO PRO-AGE FINE</h3>
        <p><b>Hyaluronic Acid Filler | Fine Lines & Skin Boosting</b></p>
        <ul>
          <li><b>What it targets</b>: Expression lines, under-eye shadows, barcode lines, and delicate signs of aging.</li>
          <li><b>Why in summer</b>: The filler revives tired areas without adding heaviness, ideal for warm weather when skin tends to swell more easily.</li>
          <li><b>The result</b>: A refreshed, luminous look that feels like a week off, without leaving the city.</li>
        </ul>
      </section>
      <section>
        <h3>N-02 BONITTO LIPS PLUM</h3>
        <p><b>Hyaluronic Acid Filler | Lip Volume & Contour</b></p>
        <ul>
          <li><b>What it targets</b>: Loss of lip volume, asymmetry, or simply a desire for juicier, more defined lips.</li>
          <li><b>Why in summer</b>: Its smooth texture and balanced elasticity make it ideal for effortless beauty.</li>
          <li><b>The result</b>: Fuller, hydrated lips with natural curves that fit your face and your season.</li>
        </ul>
      </section>
      <section>
        <h3>And what about the post-filler skincare?</h3>
        <p><b>Your filler treatment</b> may only take minutes, but how you care for your skin afterward makes all the difference.</p>
        <p>Especially in summer, when sweat and SPF can irritate the injection area, remember to take care of your skin to <b>prolong the results of the treatment</b>.</p>
        <ol>
          <li><b>Keep safe</b>, clean and free of make-up the treatment area, avoiding direct exposure to sun and heat.</li>
          <li><b>Stay hydrated</b>: support your skin hydration with moisturising creams and calming serums.</li>
          <li><b>Avoid pressure</b> and sleep on your back to maintain symmetry and filler placement during the first nights.</li>
          <li><b>Be gentle</b> with your beauty routine and avoid strong active ingredients immediately after treatment.</li>
          <li><b>Wear SPF</b> to help prevent pigment changes, especially in summer.</li>
        </ol>
      </section>
    `,
  },
  {
    slug: 'spring-skincare-refresh',
    title: 'Spring Skincare Refresh',
    date: '08/05/2025',
    category: 'skincare',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/05/spring.webp',
    alt: 'Bonitto daily skincare products for serum, moisturizer and cleanser.',
  },
  {
    slug: 'mesotherapy',
    title: 'Mesotherapy',
    date: '08/05/2025',
    category: 'mesotherapy',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/05/mesotherapy.webp',
    alt: 'Bonitto mesotherapy visual about non-surgical microinjections and skin renewal.',
  },
];

const researchArticleTitleTranslations: Record<string, Partial<Record<Locale, string>>> = {
  'dermal-filler': {
    fr: 'Comblement dermique',
    de: 'Dermal Filler',
    it: 'Filler dermico',
    ru: 'Дермальный филлер',
    tr: 'Dermal Dolgu',
    ar: 'الفيلر الجلدي',
    es: 'Relleno dérmico',
    he: 'פילר דרמלי',
  },
  'the-relevant-acne-solutions': {
    fr: 'Les solutions pertinentes contre l’acné',
    de: 'Relevante Lösungen gegen Akne',
    it: 'Le soluzioni più rilevanti per l’acne',
    ru: 'Актуальные решения против акне',
    tr: 'Akne için etkili çözümler',
    ar: 'حلول فعالة لحب الشباب',
    es: 'Soluciones relevantes para el acné',
    he: 'הפתרונות הרלוונטיים לאקנה',
  },
  'l-proline-glycine-scientific-innovation-in-bdde-crosslinked-hyaluronic-acid-fillers': {
    fr: 'L-Proline et glycine : innovation scientifique dans les fillers d’acide hyaluronique réticulés au BDDE',
    de: 'L-Prolin und Glycin: wissenschaftliche Innovation in BDDE-vernetzten Hyaluronsäure-Fillern',
    it: 'L-Prolina e glicina: innovazione scientifica nei filler di acido ialuronico reticolati con BDDE',
    ru: 'L-пролин и глицин: научная инновация в филлерах гиалуроновой кислоты, сшитых BDDE',
    tr: 'L-Prolin ve Glisin: BDDE ile çapraz bağlı hyaluronik asit dolgularında bilimsel yenilik',
    ar: 'إل-برولين والجلايسين: ابتكار علمي في فيلرات حمض الهيالورونيك المتصالبة بـ BDDE',
    es: 'L-prolina y glicina: innovación científica en rellenos de ácido hialurónico reticulados con BDDE',
    he: 'L-פרולין וגליצין: חדשנות מדעית בפילרים של חומצה היאלורונית מצולבת BDDE',
  },
  'lightnet-cream-gentle-brightening-with-barrier-support': {
    fr: 'Crème Lightnet : éclat doux et soutien de la barrière cutanée',
    de: 'Lightnet Cream: sanfte Aufhellung mit Unterstützung der Hautbarriere',
    it: 'Lightnet Cream: luminosità delicata con supporto alla barriera cutanea',
    ru: 'Крем Lightnet: мягкое осветление и поддержка кожного барьера',
    tr: 'Lightnet Krem: bariyer desteğiyle nazik aydınlatma',
    ar: 'كريم Lightnet: تفتيح لطيف مع دعم حاجز البشرة',
    es: 'Crema Lightnet: luminosidad suave con apoyo a la barrera cutánea',
    he: 'קרם Lightnet: הבהרה עדינה עם תמיכה במחסום העור',
  },
  'science-behind-eye-brightening-care': {
    fr: 'La science derrière les soins contour des yeux et éclat',
    de: 'Die Wissenschaft hinter Augen- und Aufhellungspflege',
    it: 'La scienza dietro la cura occhi e illuminante',
    ru: 'Наука ухода для сияния и области вокруг глаз',
    tr: 'Göz çevresi ve aydınlatıcı bakımın bilimi',
    ar: 'العلم وراء عناية العين والتفتيح',
    es: 'La ciencia detrás del cuidado de ojos e iluminación',
    he: 'המדע שמאחורי טיפוח העיניים וההבהרה',
  },
  'bonittos-customized-skincare-solutions': {
    fr: 'Les solutions skincare personnalisées de BONITTO',
    de: 'BONITTOs personalisierte Skincare-Lösungen',
    it: 'Le soluzioni skincare personalizzate di BONITTO',
    ru: 'Индивидуальные решения BONITTO для ухода за кожей',
    tr: 'BONITTO’nun kişiselleştirilmiş cilt bakım çözümleri',
    ar: 'حلول بونيتو المخصصة للعناية بالبشرة',
    es: 'Soluciones personalizadas de skincare de BONITTO',
    he: 'פתרונות טיפוח העור המותאמים של BONITTO',
  },
  'why-skincare-kits-outshine-single-products': {
    fr: 'Pourquoi les kits skincare surpassent les produits individuels',
    de: 'Warum Skincare-Kits Einzelprodukte übertreffen',
    it: 'Perché i kit skincare superano i singoli prodotti',
    ru: 'Почему наборы ухода эффективнее отдельных продуктов',
    tr: 'Cilt bakım kitleri neden tek ürünlerden daha güçlüdür',
    ar: 'لماذا تتفوق مجموعات العناية بالبشرة على المنتجات الفردية',
    es: 'Por qué los kits de skincare superan a los productos individuales',
    he: 'מדוע ערכות טיפוח עולות על מוצרים בודדים',
  },
  'the-science-behind-dermal-fillers': {
    fr: 'La science derrière les fillers dermiques',
    de: 'Die Wissenschaft hinter Dermal Fillern',
    it: 'La scienza dietro i filler dermici',
    ru: 'Наука, стоящая за дермальными филлерами',
    tr: 'Dermal dolguların arkasındaki bilim',
    ar: 'العلم وراء الفيلرات الجلدية',
    es: 'La ciencia detrás de los rellenos dérmicos',
    he: 'המדע שמאחורי פילרים דרמליים',
  },
  'the-summer-hydration-hero': {
    fr: 'Le héros de l’hydratation estivale',
    de: 'Der Sommer-Hydration-Held',
    it: 'L’eroe dell’idratazione estiva',
    ru: 'Герой летнего увлажнения',
    tr: 'Yazın nem kahramanı',
    ar: 'بطل الترطيب الصيفي',
    es: 'El héroe de la hidratación de verano',
    he: 'גיבור הלחות של הקיץ',
  },
  'seasonal-skincare-switch-up': {
    fr: 'Changer sa routine skincare avec la saison',
    de: 'Saisonale Umstellung der Hautpflege',
    it: 'Cambio skincare stagionale',
    ru: 'Сезонное обновление ухода за кожей',
    tr: 'Mevsimsel cilt bakımı değişimi',
    ar: 'تغيير روتين العناية بالبشرة حسب الموسم',
    es: 'Cambio estacional de skincare',
    he: 'שינוי עונתי בטיפוח העור',
  },
  'natural-looking-fillers': {
    fr: 'Fillers à l’effet naturel',
    de: 'Natürlich wirkende Filler',
    it: 'Filler dall’aspetto naturale',
    ru: 'Филлеры с естественным результатом',
    tr: 'Doğal görünümlü dolgular',
    ar: 'فيلرات بمظهر طبيعي',
    es: 'Rellenos de aspecto natural',
    he: 'פילרים במראה טבעי',
  },
  'spring-skincare-refresh': {
    fr: 'Rafraîchir sa skincare au printemps',
    de: 'Spring Skincare Refresh',
    it: 'Refresh skincare di primavera',
    ru: 'Весеннее обновление ухода за кожей',
    tr: 'İlkbahar cilt bakımı yenilemesi',
    ar: 'انتعاش العناية بالبشرة في الربيع',
    es: 'Renovación de skincare de primavera',
    he: 'רענון טיפוח עור לאביב',
  },
  mesotherapy: {
    fr: 'Mésothérapie',
    de: 'Mesotherapie',
    it: 'Mesoterapia',
    ru: 'Мезотерапия',
    tr: 'Mezoterapi',
    ar: 'الميزوثيرابي',
    es: 'Mesoterapia',
    he: 'מזותרפיה',
  },
};

export function getLocalizedResearchArticle(article: ResearchArticle, locale: Locale): ResearchArticle {
  const articleSpecific = article.translations?.[locale];

  return {
    ...article,
    ...articleSpecific,
    title: articleSpecific?.title ?? researchArticleTitleTranslations[article.slug]?.[locale] ?? article.title,
  };
}

export function getLocalizedResearchArticles(locale: Locale): ResearchArticle[] {
  return researchArticles.map((article) => getLocalizedResearchArticle(article, locale));
}

export function getResearchArticleBySlug(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}

export function getLocalizedResearchArticleBySlug(slug: string, locale: Locale) {
  const article = getResearchArticleBySlug(slug);
  return article ? getLocalizedResearchArticle(article, locale) : undefined;
}
