# Page-by-Page Build Spec
**Companion to:** `project-brief-nextjs-website.md`
**Reference:** https://www.bonittoaesthetic.com

## ⚠️ Important note on "exact same design / exact same colors"

Read this before handing the brief to your agent, it affects how they should work:

- I can browse and read the reference site's **text and structure**, but my browsing tool does not render pages visually or expose their CSS — so I cannot pull literal hex codes, exact font files, or pixel measurements from it. Anything below labeled "inferred palette" is my best reading of the photography/branding, **not** a color-picker-verified value.
- To get the **exact** hex values, font names, and spacing, your agent should open the live site in a browser, use DevTools (`Inspect` → `Computed` styles) or a color-picker extension (e.g. ColorZilla) directly on `bonittoaesthetic.com`, and log the real values into the design tokens file below.
- One more thing worth flagging honestly: replicating another live company's design **pixel-for-pixel** (same layout, same imagery treatment, same color codes) can raise trade-dress/copyright issues, especially since Bonitto is a real, currently-operating brand in a regulated industry. It's safer — and just as fast to build — to use this brief to match the **feel, layout logic, and UX patterns**, with your own brand's actual colors/logo/copy. If your client is a different company, I'd recommend that approach. If this **is** the Bonitto team building their own new site, that's a different situation — just confirm ownership with your agent so they don't get flagged by anyone reviewing the work later.

With that caveat out of the way, here's everything else, in full detail.

---

## 1. Scroll Behavior

- **Vertical scroll only.** Every page on the reference site is a standard single-column, top-to-bottom scrolling page. There is **no horizontal scroll / horizontal scroll-jacking section** anywhere observed (no side-scrolling galleries, no `overflow-x` panels).
- Implementation: do **not** build horizontal-scroll sections (no `scroll-snap-x`, no sideways carousels for main content). The only place a horizontal *swipe* pattern is appropriate is a small **related-products carousel** on product pages (see §7) — everything else scrolls down normally.
- Use smooth-scroll (`scroll-behavior: smooth` or Lenis) for anchor links and "back to top."
- Sticky header on scroll (shrinks/condenses after ~80px scroll).
- Section reveal-on-scroll (fade + slight translate-Y up), triggered once per section, respecting `prefers-reduced-motion`.

---

## 2. Inferred Visual Language (starting point — verify with DevTools)

| Token | Inferred value | Notes |
|---|---|---|
| Primary background | Off-white / warm white `#F7F5F1`–`#FAFAF8` | Clean clinical base |
| Secondary/accent background | Teal-green `#1F5C52`–`#2E6B5E` range | Recurs heavily as a photo-backdrop color across research/skincare article thumbnails — likely a core brand accent |
| Text (body) | Near-black / dark charcoal `#1A1A1A`–`#222222` | High contrast on white |
| Accent/CTA | Deep green or bottle-green, possibly with a gold/beige secondary | Matches "Italian elegance / wellness" positioning |
| Typography feel | Serif or high-contrast display serif for headlines (elegant, editorial), clean sans-serif for body/UI | Matches "classic elegance meets science" brand tone |
| Imagery style | Desaturated, editorial beauty photography; product shots on white/gradient backdrops; teal/green as a recurring color grade | |
| Corner radius | Minimal/sharp on structural elements, soft on cards/buttons | Typical for premium medical-aesthetic brands |

**Action item for the agent:** create `tailwind.config.ts` color tokens (`brand-bg`, `brand-teal`, `brand-ink`, `brand-accent`) as *variables*, not hardcoded values, and finalize the real hex codes either from client brand guidelines or a DevTools pass on the reference site.

---

## 3. Global Layout (every page)

**Header (sticky)**
- Logo (left)
- Center/right: primary nav — About us · Events · Research Articles · Expert Insights & Demonstrations · 3D Touch · Contact us · Distributors · Reserved Area
- Language switcher (flag or text code, dropdown) — 8 locales
- "Go to Cart" / Shop link (external, opens store subdomain)
- Hamburger on mobile → full-screen or slide-in drawer nav
- Nav includes a **mega-menu "Our Products"** panel: numbered list (01–06) of product categories with hover-reveal or click-to-expand behavior

**Footer (every page, identical)**
- CTA button: "Contact us"
- Social icons: Facebook, LinkedIn, Instagram, YouTube
- Two office addresses (e.g., HQ city + secondary city) — stacked
- Email (mailto:) and phone (tel:) links
- Copyright line + legal entity name
- Legal links: Privacy Policy / Cookie Policy / Terms
- Optional "Powered by [Agency]" credit line

**Cookie consent banner**
- 4 categories: Functional (always on, disabled toggle) / Preferences / Statistics / Marketing
- Accept / Deny / "View preferences" (opens detailed modal with per-category toggles + "manage vendors" link)
- Must block GA/marketing scripts until consent given

---

## 4. Home Page

**Sections, top to bottom:**

1. **Hero** — large headline (brand positioning statement) + italic sub-tagline + 2-paragraph intro copy with bold emphasis on key terms + primary CTA button ("Who we are" → About). Background: looping muted autoplay video (self-hosted, poster image fallback, `prefers-reduced-motion` shows static image instead).
2. **Technology/product intro split section** — image left, text right (or reverse), scroll-reveal fade-in. Headline + supporting paragraph.
3. **"Leadership" split section** — text block + a **6-item icon grid** linking to each product category (icon + label, hover state lifts/underlines), paired with a large supporting product-group photo.
4. **News & Events preview** — section intro line, then a **3-card row** pulled dynamically from CMS: image thumbnail, category tag + date overline, title, links to article. "View all" link to `/news-events`.
5. **Contact CTA band** — full-width strip, single button.
6. **Footer** (global, see §3).

**Interactions:** hero video autoplay+muted+loop; icon grid hover states; card hover lift on news items.

---

## 5. About Us Page

1. Hero/intro block: page title + 2–3 paragraph company story with bold key-term emphasis, supporting image (lab/science imagery) alongside.
2. **"Quality & Compliance" section** — headline + multiple paragraphs, organized around: (a) cosmetic-line regulatory notification process, (b) medical-device-line certification/quality-system standard, (c) general quality-commitment statement. Present as distinct sub-blocks (icon or bold-label + paragraph each), **not** as unverified blanket claims — all specific certifications must be supplied and confirmed by the real client.
3. Supporting secondary image (alternating layout).
4. Contact CTA + footer.

---

## 6. Product Category Page (`/product-category/[slug]`)

- Category title + short intro
- Grid of product cards: product image (white background), name, product-type tag (e.g. "Sterile vials," "Syringe"), link to detail page
- Optional filter/sort if catalog is large
- Footer CTA

## 7. Product Detail Page (`/product/[slug]`)

1. Product name + type tag (e.g. "Sterile vials")
2. Short description paragraph (what it is / what it does)
3. **Spec blocks** (icon + label + value), e.g.:
   - Active ingredients (icon + comma-separated list)
   - Volume/packaging (icon + value, e.g. "Vials 5 x 5 ml")
   - (extend per product: pH, cross-linking %, injection depth, etc. — pull from client data)
4. Product image (white/studio background)
5. **"Effect" bullet list** (3–5 short benefit bullets)
6. **Main target** label (e.g. "Lifting," "Hydration," "Volume")
7. **Related Products** — small horizontal card row/carousel (this is the one place a side-scrolling swipe pattern is acceptable, on mobile especially)
8. Footer CTA

## 8. News & Events Index (`/news-events`)

- Intro line
- Chronological card grid (reverse date order), each card: cover image, date + category tag (e.g. "Events" or "Research Articles | Fillers"), title, links to detail
- Two content types share one feed: **Events** (trade-show announcements: booth #, city, venue, dates) and **Research Articles** (skincare/filler/mesotherapy education pieces)
- Consider tab/filter UI: All / Events / Research Articles
- Pagination or "load more"

## 9. Category Filtered Views (`/category/events`, `/category/research-articles`)

- Same card grid as News & Events, pre-filtered by type
- Same card component, reused

## 10. Article/Event Detail Page

- Cover image (hero)
- Category tag + publish date
- Rich text body (CMS-authored)
- Social share icons
- Related articles (3-card row)

## 11. Expert Insights & Demonstrations

- Grid of video thumbnails (play-button overlay), grouped by topic or expert name
- Click opens modal player or inline expand (lazy-loaded iframe/video, deferred until click — don't preload all videos)

## 12. 3D Touch / Face-Body Interactive Tool

- Interactive diagram of face/body zones (SVG-based is simplest and most accessible)
- Clicking/tapping a zone highlights it and surfaces relevant product recommendations in a side panel or modal
- **Accessible fallback required:** a plain list of zone names as links/buttons for keyboard and screen-reader users, and for reduced-motion/no-JS contexts
- This is the one page where richer interaction/animation is expected — but it should still be **vertical-scroll page** with the interactive diagram contained in one viewport section, not a horizontal-scroll experience

## 13. Contact Us Page

- Intro paragraph: partnership pitch + response-time expectation (e.g. "reply within 24 hours")
- **Form fields:** Name, Email, Company, Country/Phone, Message, **"How did you find us?" dropdown** (Ads / Social – Facebook / Social – Instagram / Social – YouTube / Exhibitions / Clinics / Search – Google / Search – Bing / Other), **Privacy Policy consent checkbox** (required)
- Supporting portrait/beauty image alongside form
- Client-side validation (Zod) + server-side validation + honeypot/Turnstile spam protection
- Success/error state messaging (inline, accessible `aria-live`)
- Office addresses + email/phone + footer

## 14. Distributors Page

- "Presence worldwide" headline
- **Interactive/visual world map or country list** highlighting countries with active distribution (list example set: a dozen+ countries across regions) — build as an SVG world map with highlighted countries + tooltip, with a plain-list fallback under/beside it for accessibility
- CTA to Contact (for prospective distributors — could route to a distributor-specific form variant)
- Footer

## 15. Reserved Area

- Login gate (email/password or magic link) for verified professionals/distributors
- Post-login: simple dashboard shell (placeholder — scope with client: price lists, order docs, downloadable certificates, etc.)
- Not indexed by search engines (`noindex` + excluded from sitemap)

## 16. Legal Pages (Privacy / Cookie / Terms)

- Simple long-form rich text template, table of contents anchor-links for long documents
- Must be reviewed/provided by client's legal counsel — do not invent legal text

---

## 17. Component Reuse Map

| Component | Used on |
|---|---|
| `Header` / `MegaMenu` / `MobileNav` | all pages |
| `Footer` | all pages |
| `CookieConsentBanner` | all pages |
| `HeroVideo` | Home |
| `SplitSection` (image+text, alternating) | Home, About |
| `IconGrid` (6 categories) | Home |
| `NewsCard` / `NewsGrid` | Home preview, News & Events, Category views |
| `ProductCard` / `ProductGrid` | Product category pages |
| `SpecBlock` (icon+label+value) | Product detail |
| `RelatedCarousel` | Product detail, Article detail |
| `ContactForm` | Contact us, Distributors (variant) |
| `WorldMap` | Distributors |
| `InteractiveBodyDiagram` | 3D Touch |
| `VideoGrid` / `VideoModal` | Expert Insights |

---

## 18. Per-Page Animation Notes

- **Home hero:** fade-in text on load, video autoplay muted/loop
- **Split sections:** fade + slide-up on scroll into view (once)
- **Icon grid / product grid:** stagger children fade-in, hover = lift + shadow
- **News/product cards:** hover = image scale(1.03) + shadow lift
- **Mega-menu:** height/opacity expand on hover/click
- **Mobile drawer nav:** slide-in from right + backdrop fade
- **3D Touch diagram:** zone hover = highlight/pulse; click = side-panel slide-in
- **Modals (video, preferences):** fade + scale-in backdrop
- All motion ≤ 400ms, easing `ease-out`, and disabled under `prefers-reduced-motion: reduce`

---

## 19. Handoff Checklist for the Agent

- [ ] Confirm ownership/authorization to closely match Bonitto's design, or proceed with brief's UX patterns + client's own brand colors
- [ ] Pull exact hex/typography from client brand guide or DevTools pass (see §2)
- [ ] Build design tokens file first (`tailwind.config.ts` + CSS variables) before any page work
- [ ] Confirm real product catalog data model with client before building Product Detail spec blocks (fields vary per product type)
- [ ] Confirm real certifications/compliance claims with client + legal before writing About-Us "Quality & Compliance" copy
- [ ] Build `WorldMap` and `InteractiveBodyDiagram` as separate, isolated components early — they're the highest-effort/highest-risk items
