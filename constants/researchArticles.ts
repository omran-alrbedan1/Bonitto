export type ResearchArticleCategory = 'fillers' | 'skincare' | 'mesotherapy';

export type ResearchArticle = {
  slug: string;
  title: string;
  date: string;
  category: ResearchArticleCategory;
  image: string;
  alt: string;
  contentHtml?: string;
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

export function getResearchArticleBySlug(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}
