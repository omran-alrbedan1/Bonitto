# Bonitto — Live Site vs. Current Project Comparison

**Reference (live):** https://www.bonittoaesthetic.com
**Current project:** this repo (Next.js local build)

> Method note: this comparison is based on the live site's rendered HTML (fetched via web), the existing `docs/design-audit/measurements.json` + `detail-measurements.json` (browser-measured geometry of both sites at 390px mobile and 1366px desktop), and the current project source. The audit screenshots in `docs/design-audit/` could not be visually inspected (model has no image input), so pixel judgments below come from measurements and code, not screenshot review.

---

## 1. What already matches the live site

- **Body background:** identical radial gradient `radial-gradient(217.85% 157.63% at 50.01% 68.76%, #4AB2A8 9.99%, #000 100%)` and the teal accent `#4AB2A8`.
- **Font:** both sites use *Hurme Geometric Sans 1* (300/400/600/700 + obliques). The local app loads the woff2 files straight from the live site's CDN. Base typography (14px / 20px, weight 300, uppercase headings) matches.
- **Home page paradigm:** desktop horizontal scroll (one section = one viewport), vertical stacking on mobile. Confirmed identical in measurements (sections laid out side-by-side on 1366px on both).
- **Hero copy block:** headline + italic kicker (`em`) + 3-paragraph intro with `<strong>` emphasis + "Who we are / About us" outline CTA — structurally faithful.
- **Hero video:** same vertical 9:16 webm asset, same poster, autoplay/loop. Mobile geometry matches almost exactly (390×693 on both).
- **Home sections used:** Hero → Technology split (copy + product image) → Leadership (category list + packshot) → News preview → Footer. Same order as live.
- **Product detail page:** the closest match in the whole build — on desktop the packshot is at the same position/size as live (447×614 @ x=964), same tech-spec icon rows, same effects/target blocks. Intentional mirror per `globals.css` comment ("mirrors bonittoaesthetic.com/product").
- **Menu:** full-screen overlay menu with numbered categories (01–06) + page links reproduces the live menu's concept/layout.
- **Footer:** logo, "Contact us" CTA, socials, Vienna + Dubai addresses, email/phone, copyright — same structure.

---

## 2. Findable differences (content, structure, behavior)

### 2.6 Product category (PLP) — HIGH, most visual
| | Live | Local |
|---|---|---|
| Desktop | **5-column grid of 400px packshots** (400×404 images, gap 14), spans ~2080px wide | **Single horizontal row** of small cards (200–280px wide, 200×200 images, gap 24) |
| Mobile | Full-width single column, large images (369×515) | 2-column grid of small tiles (165×187) |
| Hover | Overlay "Discover" pill | Similar `product-img-overlay` exists locally |

The live PLP is a dense, editorial packshot gallery filling the viewport; the local build is a compact strip. Biggest single design gap on the site.

### 2.7 News & Events index — MEDIUM/HIGH
- Live: a long chronological feed grid (e.g. ~24 cards, horizontal-scroll grid spanning 8256px desktop; cards 307×239 desktop / 369×268 mobile), with category filtering.
- Local: a thin single-row horizontal card strip (`news-events-scroll`), only a handful of hardcoded items (page height mobile ≈1062px vs live 8500px).
- Home news preview cards: local **220×184 with 14px titles** vs live **210×184 with 18px titles** (`detail-measurements.json`) — local titles are visibly smaller.

### 2.8 About page — MEDIUM
- Live: compact alternating full-width text block → image (≈396px text, 562px image, 884px compliance text, 584px image on mobile; total ≈3019px).
- Local: two stacked `section-about-pair` panels, each `min-h-[100dvh]` with a `3fr/2fr` copy/image grid (≈3252px total). Same alternating idea, but bigger text columns and taller overall.

### 2.9 Contact page — LOW
Live: intro 306px → compact form 574px → image 584px. Local: intro 325px → taller form 741px (`min-h-[100dvh]` per-section) → image 552px. Same structure, local uses more vertical space. Form fields, consent checkbox, and "how did you find us" dropdown match the live spec.

### 2.10 Menu button / header cosmetics — LOW
Live header sits flush (60px mobile / 115px desktop, no blur bg measured); local header uses `padding: clamp(18…32px)`, a subtle top gradient + `backdrop-filter: blur(14px)`, taller 82–88px mobile. Both keep logo-left + text button-right, but local header is more "app-like" (frosted) than live.

### 2.11 Page titles / meta — LOW
Live uses titles like *"01 PRO AGE FINE - Wrinkle Filler - Bonitto®"* (includes the type tag in the h1); local product h1 omits the tagline inside the title. Homepage title matches the live SEO title. `sitemap.ts` points at a staging URL (`bonitto-rose.vercel.app`) and lists pages that don't exist (privacy/cookie/terms).

---

## 3. Asset & data notes

- Product images, packshots, icons (fillers/syringes/vials/cosmeceuticals SVGs), hero video, and fonts are **hot-linked from the live site's CDN** (`bonittoaesthetic.com/wp-content/...`). This reproduces visuals exactly now, but is not a durable/self-owned asset strategy and will break if live assets move.
- Local news items are hardcoded in `HomeNews.tsx` (imcas-paris-2026, dermal-filler, acne) — same 3 articles as live today; not CMS-driven as the original architecture intended.

---

## 4. Recommended priority order to close the gap

1. **Language switcher** — expose all locales (or at least a sane EN-first set); reconsider the Hebrew default for this EU-facing brand.
2. **Build missing pages** — Reserved Area, Privacy, Cookie, Terms (currently 404 despite being routed/sitemapped).
3. **GDPR cookie consent banner** — ✅ implemented (see 2.3).
4. **PLP layout** — restore the live 400px packshot grid (or a rich responsive two-up grid) instead of the small strip.
5. **Footer** — add LinkedIn + YouTube icons, legal links, and a `Powered by`/entity line.
6. **Header "Go to Cart"/Shop** link — currently absent even though a store subdomain exists on live.
7. **Header + Shop** CTA and news index — grow the news feed to a real grid list with category filtering like live.
8. **Home hero desktop** — enlarge the video to a true full-height right panel and widen the headline to match live proportions (18px→news titles too).