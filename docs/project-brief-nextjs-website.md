# Project Brief — Corporate / B2B Aesthetics Supplier Website
**Reference site (design & structure inspiration):** https://www.bonittoaesthetic.com
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + i18n + Framer Motion
**Audience:** Development agency / freelance dev team

> Note: This brief describes the **structure, features, and UX patterns** of the reference site so the dev team can build an original, independently designed website with equivalent functionality. Do not copy the reference site's text, images, or code — write original copy and use licensed/owned imagery.

---

## 1. Goal

Build a fast, elegant, multilingual corporate website for a B2B/B2C brand in the medical aesthetics / cosmetics space (dermal fillers, skincare, professional cosmetics). The site must feel premium, clinical-but-warm, and convert visitors into leads/distributors, while linking out to a separate e-commerce store (subdomain or headless shop).

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router, React Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables for theming |
| Animation | Framer Motion (page/section transitions, scroll reveals), Lenis (smooth scroll) |
| i18n | `next-intl` (or `next-i18next`) — routing via `/[locale]/...` |
| CMS | Headless CMS (Sanity, Strapi, or Payload) for products, news/events, translations |
| Forms | React Hook Form + Zod validation + email via Resend/SendGrid |
| Hosting | Vercel (preferred) |
| Images | `next/image` with CMS-hosted assets, AVIF/WebP |
| Analytics | GA4 or Plausible + consent-gated loading |
| Cookie consent | `react-cookie-consent` or custom banner (GDPR: functional/preferences/statistics/marketing categories) |

---

## 3. Languages (i18n)

Default locale: **English (en)**. Additional locales (mirroring reference site scope — adjust to client's actual markets):

- `en` English (default)
- `fr` Français
- `de` Deutsch
- `it` Italiano
- `ru` Русский
- `tr` Türkçe
- `ar` العربية (**RTL layout support required**)
- `es` Español

Requirements:
- URL-based locale routing: `bonitto.com/fr/about-us`
- Language switcher in header, listing all locales with native names
- `hreflang` alternate tags on every page for all locales
- RTL support for Arabic (mirrored layout, logical CSS properties `ps-`/`pe-` instead of `pl-`/`pr-`)
- All copy, meta titles/descriptions, and CMS content fields translatable
- Fallback to default locale for missing translations

---

## 4. Sitemap / Pages

```
/                          Home
/about-us                  Company story, quality & compliance
/product-category/[slug]   Product category listing (6 categories)
/product/[slug]            Individual product detail page
/news-events                News & Events index
/category/events            Events listing
/category/research-articles  Research articles listing
/expert-insights-demonstrations  Video/expert content hub
/face-body                  Interactive 3D visual tool (face/body area selector)
/contact-us                  Contact form + map + offices
/distributors                Become-a-distributor / distributor locator
/reserved-area                Gated login area (B2B professionals/distributors)
/privacy-policy, /cookie-policy, /terms   Legal pages
[shop]                       External link to e-commerce store (subdomain)
```

### Product categories (example taxonomy — adapt to client's real catalog)
1. Hyaluronic Acid Fillers (HA Technology)
2. MDR-Approved HA & Amino Acid Fillers
3. Professional Cosmetics — Vials
4. Professional Cosmetics — Syringes
5. Poly-L-Lactic Acid (PLLA) Line
6. Skincare

---

## 5. Page-by-Page Requirements

### 5.1 Home
- Sticky header: logo, mega-menu (products dropdown with numbered list + icons), nav links, language switcher, cart/shop external link
- Full-bleed hero: headline + subhead + CTA ("Who we are") + background/looping muted video (self-hosted `.webm`/`.mp4`, `next/image` poster fallback, lazy-loaded, respects `prefers-reduced-motion`)
- "About the technology" section — split layout (image + text), scroll-reveal animation
- "Leadership in formulation" section — text + grid of 6 product-category cards (icon, label, link), plus supporting image
- News & Events preview — 3 latest cards (image, category tag, date, title) pulled from CMS, "View all" link
- Contact CTA banner
- Footer: social links (Facebook, LinkedIn, Instagram, YouTube), office addresses (multi-location), email, phone, copyright, legal links, dev-credit (optional)

### 5.2 About Us
- Intro paragraph with bold key-term emphasis
- "Quality & Compliance" section explaining certifications (configurable via CMS: ISO standards, CE/MDR marking, regulatory notifications) — presented as icon+text blocks, not raw legal claims (client to provide real, verifiable certification data)
- Supporting imagery (lab/microscope, product-in-use), alternating left/right layout
- CTA to Contact

### 5.3 Product Category & Product Detail
- Category page: grid/list of products with filter (by line/category), image, name, short description
- Product detail: gallery, composition/technical specs table, indications, downloadable PDF (IFU/datasheet), "Contact for distribution" CTA (B2B — no direct e-commerce checkout for medical devices, per typical regulatory practice; link to Shop only for non-restricted cosmetic items)

### 5.4 News & Events / Research Articles
- Index with category filter tabs (Events / Research Articles)
- Card grid: cover image, category badge, publish date, title
- Detail page: rich text (CMS), related articles, social share

### 5.5 Expert Insights & Demonstrations
- Video gallery (embedded, lazy-loaded, thumbnail + play overlay), grouped by topic/expert

### 5.6 3D / Interactive Tool ("Face/Body")
- Interactive SVG or WebGL diagram of face/body zones; clicking a zone surfaces relevant product recommendations
- Build as a progressively-enhanced client component; provide accessible fallback (list of zones as links) for no-JS/reduced-motion users

### 5.7 Contact Us
- Form: name, email, company, country, message, consent checkbox (GDPR) — validated client+server side, spam-protected (honeypot + reCAPTCHA/Turnstile)
- Office cards with embedded map (lazy-loaded iframe behind consent gate)
- Direct email/phone links (`mailto:`, `tel:`)

### 5.8 Distributors
- "Become a distributor" form (separate from general contact) + distributor benefits content
- Optional: distributor locator map by country

### 5.9 Reserved Area
- Auth-gated area (NextAuth or custom) for professionals/distributors to access price lists, order docs, etc.

---

## 6. SEO Requirements

- Per-locale, per-page `<title>` and `<meta description>`, editable via CMS
- Open Graph + Twitter Card tags (image, title, description) on every page
- `canonical` URL on every page; correct `hreflang` cluster for all locale variants
- `sitemap.xml` (auto-generated, locale-aware) and `robots.txt` via Next.js Metadata API / route handlers
- Semantic HTML: one `<h1>` per page, logical heading hierarchy
- Structured data (JSON-LD): `Organization`, `WebSite`, `BreadcrumbList`, `Product`, `Article`/`NewsArticle` for news/events
- Image `alt` text (translatable, CMS-managed)
- Core Web Vitals budget: LCP < 2.5s, CLS < 0.1, INP < 200ms — optimize hero video/image loading accordingly
- Clean, crawlable URLs (kebab-case, no query-string-based content)

---

## 7. Animation & Motion Guidelines

- Scroll-triggered fade/slide-up reveals for sections (Framer Motion `whileInView`)
- Smooth anchor scrolling
- Subtle hover states on cards/buttons (scale, shadow, underline-draw)
- Page transitions: soft fade/slide between routes (App Router `template.tsx` + Framer Motion `AnimatePresence`)
- Mega-menu open/close animation (height/opacity)
- All motion must respect `prefers-reduced-motion: reduce` — provide static fallback
- No animation should block interaction or delay LCP content

---

## 8. Design System / Best Practices

- Tailwind config: custom color palette (brand primary, neutral/greige tones, accent), typographic scale, spacing scale, container widths
- Component library approach: `components/ui` (Button, Card, Badge, Input, Select, Modal) + `components/sections` (Hero, ProductGrid, NewsGrid, etc.)
- Fully responsive (mobile-first): mobile nav as slide-in drawer with same product mega-list
- Accessibility: WCAG 2.1 AA — keyboard-navigable menus, focus states, sufficient color contrast, ARIA labels on interactive/icon-only elements, form error announcements
- Dark-mode not required unless client requests
- Reusable `<LocalizedLink>` component to keep locale prefix consistent
- Environment-based config for CMS URL, form endpoint, analytics IDs
- Strict TypeScript, ESLint + Prettier, Husky pre-commit hooks
- Image optimization: all imagery through `next/image`, responsive `sizes`, blur placeholders

---

## 9. Folder Structure (suggested)

```
/app
  /[locale]
    /(marketing)
      page.tsx                     Home
      about-us/page.tsx
      contact-us/page.tsx
      distributors/page.tsx
      product-category/[slug]/page.tsx
      product/[slug]/page.tsx
      news-events/page.tsx
      category/[type]/page.tsx
      expert-insights-demonstrations/page.tsx
      face-body/page.tsx
      reserved-area/page.tsx
    layout.tsx
  /api
    /contact/route.ts
    /distributor-application/route.ts
/components
  /ui
  /sections
  /layout (Header, Footer, MobileNav, LanguageSwitcher)
/lib (cms client, i18n config, seo helpers, validators)
/messages (en.json, fr.json, de.json, it.json, ru.json, tr.json, ar.json, es.json)
/public
```

---

## 10. Content & Assets Needed From Client

- Final copy per language (or approval to professionally translate from English source)
- Logo (SVG), brand colors/fonts, imagery/video (licensed, original)
- Product catalog data (names, categories, specs, certifications, datasheets/PDFs)
- Real certification/compliance details (ISO numbers, CE/MDR documentation) — must be accurate and legally reviewed
- Office addresses, contact details, social links
- Any existing brand guidelines

---

## 11. Deliverables & Milestones

1. **Discovery & IA** — sitemap sign-off, wireframes (low-fi), content model in CMS
2. **Design** — Figma UI kit (desktop + mobile), motion spec
3. **Build Sprint 1** — layout, header/footer, i18n scaffolding, Home + About
4. **Build Sprint 2** — Product categories/detail, News/Events, Contact/Distributors
5. **Build Sprint 3** — Reserved area, Face/Body interactive tool, animations polish
6. **QA** — cross-browser, accessibility audit, Lighthouse/Core Web Vitals pass, translation review
7. **Launch** — DNS/hosting cutover, analytics/consent verification, sitemap submission to Search Console

---

## 12. Non-Functional Requirements

- GDPR-compliant cookie consent (block analytics/marketing scripts until consent given)
- Legal pages (Privacy Policy, Cookie Policy, Terms) reviewed by client's legal counsel
- Backup/versioning via CMS + Git
- Staging environment for client review before each release
