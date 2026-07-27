# Next.js Best Practices Guide
**Companion to:** `project-brief-nextjs-website.md`, `page-by-page-spec.md`
**Stack:** Next.js 14+ (App Router) · TypeScript · Tailwind CSS · next-intl · Framer Motion

This is a reference doc for the dev team: how to structure the project, wire up translations, handle SEO/metadata, animate correctly, and theme the app — in a way that scales cleanly as pages/locales/products are added.

---

## 1. File & Folder Structure

Use the **App Router**, colocate by feature, keep locale routing at the root of `app/`.

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx                 # root layout per locale (html lang, dir, providers)
│   │   ├── page.tsx                   # Home
│   │   ├── loading.tsx                # route-level skeleton
│   │   ├── error.tsx                  # route-level error boundary
│   │   ├── not-found.tsx
│   │   ├── template.tsx               # optional: page-transition wrapper (Framer Motion)
│   │   ├── about-us/page.tsx
│   │   ├── contact-us/
│   │   │   ├── page.tsx
│   │   │   └── contact-form.tsx       # client component, colocated
│   │   ├── distributors/page.tsx
│   │   ├── news-events/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── category/[type]/page.tsx
│   │   ├── product-category/[slug]/page.tsx
│   │   ├── product/[slug]/page.tsx
│   │   ├── expert-insights-demonstrations/page.tsx
│   │   ├── face-body/page.tsx
│   │   ├── reserved-area/
│   │   │   ├── page.tsx               # login
│   │   │   └── dashboard/page.tsx     # noindex
│   │   └── (legal)/
│   │       ├── privacy-policy/page.tsx
│   │       ├── cookie-policy/page.tsx
│   │       └── terms/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── distributor-application/route.ts
│   ├── sitemap.ts                     # dynamic, locale-aware
│   ├── robots.ts
│   └── globals.css
│
├── components/
│   ├── ui/                            # Button, Input, Select, Badge, Modal, Card…
│   ├── layout/                        # Header, Footer, MegaMenu, MobileNav, LanguageSwitcher
│   ├── sections/                      # HeroVideo, SplitSection, IconGrid, NewsGrid…
│   └── motion/                        # FadeIn, StaggerGroup, PageTransition wrappers
│
├── lib/
│   ├── seo/                           # metadata builders, JSON-LD builders
│   ├── i18n/                          # next-intl config, locale list, routing config
│   ├── cms/                           # CMS client + typed fetchers
│   ├── validators/                    # Zod schemas (contact form, distributor form)
│   └── utils/
│
├── messages/
│   ├── en.json
│   ├── fr.json
│   ├── de.json
│   ├── it.json
│   ├── ru.json
│   ├── tr.json
│   ├── ar.json
│   └── es.json
│
├── types/
├── public/
│   ├── icons/
│   ├── fonts/
│   └── images/
├── middleware.ts                      # locale detection/redirect
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

**Rules of thumb:**
- One component per file; colocate a page's one-off client components next to `page.tsx` (e.g. `contact-form.tsx`), only promote to `components/` once reused elsewhere.
- Server Components by default. Add `"use client"` only where you need interactivity/state/browser APIs (forms, animated components, the Face/Body tool, language switcher dropdown).
- Keep data-fetching in Server Components or route handlers, not client components.
- No business logic in `page.tsx` files beyond composing sections + fetching data — push logic into `lib/`.

---

## 2. i18n with `next-intl`

### 2.1 Setup

```
npm install next-intl
```

`i18n/routing.ts`:
```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always', // /en/about-us, /fr/about-us, etc.
});
```

`middleware.ts`:
```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

`app/[locale]/layout.tsx`:
```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 2.2 Message files

Structure `messages/en.json` by feature, not by page name only, so shared strings (nav, footer, form labels) aren't duplicated:

```json
{
  "nav": { "about": "About us", "events": "Events", "contact": "Contact us" },
  "footer": { "copyright": "© {year} {company}. All Rights Reserved." },
  "contactForm": {
    "howDidYouFindUs": "How did you find us?",
    "options": { "ads": "Ads", "socialFacebook": "Social Media – Facebook" },
    "privacyConsent": "I've read and agree to the Privacy Policy"
  }
}
```

- Use ICU message syntax for pluralization/interpolation (`{count, plural, one {...} other {...}}`).
- Never hardcode user-facing strings in components — always route through `useTranslations()` / `getTranslations()`.
- CMS-authored content (product descriptions, articles) should carry its **own** per-locale fields in the CMS — don't try to force long-form editorial content through the static `messages/*.json` files, which are meant for UI strings.

### 2.3 Using translations

Server Component:
```tsx
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');
  return <h1>{t('title')}</h1>;
}
```

Client Component:
```tsx
'use client';
import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('contactForm');
  return <label>{t('howDidYouFindUs')}</label>;
}
```

### 2.4 Localized links & navigation

Wrap `next/link` and `useRouter` via `next-intl`'s navigation helpers so locale prefixes are handled automatically:

```ts
// i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```
Use this `Link` everywhere instead of `next/link` directly.

### 2.5 RTL (Arabic)

- Set `dir="rtl"` on `<html>` when `locale === 'ar'` (done above).
- Use Tailwind **logical properties**: `ps-4` / `pe-4` (padding-inline-start/end), `ms-*` / `me-*`, `text-start` / `text-end` instead of `pl-*`/`pr-*`/`text-left`/`text-right`.
- Mirror directional icons (arrows, chevrons) with a `rtl:scale-x-[-1]` utility or a dedicated icon variant.
- Test the mega-menu, mobile drawer, and carousels specifically in RTL — these are the components most likely to break.

### 2.6 Translation workflow

- English is the source of truth; every new UI string ships in `en.json` first, then gets flagged for translation.
- Consider a CI check that fails the build if any locale's JSON is missing keys present in `en.json`.
- For CMS content, use the CMS's native localization feature (Sanity document internationalization, Strapi i18n plugin, etc.) rather than duplicating content trees manually.

---

## 3. SEO & Metadata

### 3.1 Metadata API (per page)

Use the built-in Metadata API — do **not** hand-roll `<Head>` tags.

```tsx
// app/[locale]/about-us/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about.seo' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://example.com/${locale}/about-us`,
      languages: buildHreflangMap('/about-us'),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://example.com/${locale}/about-us`,
      images: ['/images/og/about-us.jpg'],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}
```

`buildHreflangMap` (in `lib/seo/hreflang.ts`) should generate the full alternate-locale map + `x-default`:

```ts
export function buildHreflangMap(path: string) {
  const locales = ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es'];
  return Object.fromEntries([
    ...locales.map((l) => [l, `https://example.com/${l}${path}`]),
    ['x-default', `https://example.com/en${path}`],
  ]);
}
```

### 3.2 Root metadata + template

`app/[locale]/layout.tsx` should set a `title.template` so child pages only need to set their own segment:

```ts
export const metadata: Metadata = {
  title: { default: 'Brand Name', template: '%s | Brand Name' },
  metadataBase: new URL('https://example.com'),
};
```

### 3.3 Sitemap & robots

`app/sitemap.ts`:
```ts
import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/about-us', '/contact-us', '/distributors'];
  return staticPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `https://example.com/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `https://example.com/${l}${path}`])
        ),
      },
    }))
  );
  // + dynamically append product/article slugs fetched from the CMS
}
```

`app/robots.ts`:
```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/reserved-area/dashboard', '/api/'] },
    ],
    sitemap: 'https://example.com/sitemap.xml',
  };
}
```

Reserved-area dashboard pages: also set `export const metadata = { robots: { index: false, follow: false } }` directly on that route.

### 3.4 Structured data (JSON-LD)

Inject via a small server component that renders a `<script type="application/ld+json">`. Minimum set:

- `Organization` (sitewide, in root layout): name, logo, sameAs (social links), contact points
- `WebSite` (home page): includes `SearchAction` if you add on-site search
- `BreadcrumbList` (all inner pages)
- `Product` (product detail pages): name, image, description; **omit price/availability schema entirely** if products aren't sold directly online (medical device regulatory context)
- `Article` / `NewsArticle` (news/research detail pages): headline, image, datePublished, author

```tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### 3.5 Images & Core Web Vitals

- Always `next/image`; set explicit `width`/`height` or `fill` with a sized container to avoid CLS.
- Hero video: `poster` attribute set, `preload="none"` or `metadata`, autoplay only if `muted` + `playsInline`; provide a static image swap for `prefers-reduced-motion`.
- Above-the-fold hero image/video should not be `lazy`; everything below the fold should be.
- Self-host fonts via `next/font` (avoids extra DNS/render-blocking requests, gets automatic `font-display: swap`).
- Run Lighthouse/PageSpeed Insights per template (home, product, article) before launch; target LCP < 2.5s, CLS < 0.1, INP < 200ms.

### 3.6 Content rules

- One `<h1>` per page; logical heading order (no skipped levels).
- Descriptive, translated `alt` text on every content image (decorative images: `alt=""`).
- Canonical URLs must be absolute and locale-correct on every page — this is the #1 most common i18n-SEO bug (forgetting per-locale canonicals leads to duplicate-content issues).

---

## 4. Animation (Framer Motion)

### 4.1 Principles

- Motion should clarify hierarchy/flow, never delay content or block interaction.
- Respect `prefers-reduced-motion` **everywhere** — build one shared hook, don't re-implement the check per component.
- Keep durations short: 150–400ms for micro-interactions, up to 600ms for full-section reveals. Easing: `ease-out` for entrances, `ease-in-out` for looping/continuous motion.

### 4.2 Reduced-motion hook

```ts
// lib/hooks/use-reduced-motion.ts
import { useReducedMotion } from 'framer-motion';
export const useMotionSafe = () => !useReducedMotion();
```

### 4.3 Reusable primitives

```tsx
// components/motion/fade-in.tsx
'use client';
import { motion, useReducedMotion } from 'framer-motion';

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

```tsx
// components/motion/stagger-group.tsx
'use client';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export function StaggerGroup({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}
export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={item}>{children}</motion.div>
);
```

### 4.4 Page transitions

Use `template.tsx` (re-mounts on every navigation, unlike `layout.tsx`) with `AnimatePresence`:

```tsx
// app/[locale]/template.tsx
'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
```

### 4.5 What to animate vs. what not to

| Animate | Don't animate |
|---|---|
| Section reveal on scroll (once) | Layout-shifting properties (width/height) without `layout` prop |
| Card hover lift/scale | Anything on the LCP element's initial paint |
| Mega-menu/drawer open-close | Long, looping decorative animation that competes with content |
| Modal/video overlay fade+scale | Motion during form submission validation (use simple state, not animation, for error/success text) |

- For the Face/Body interactive diagram: use CSS transitions or lightweight SVG animation, not heavy JS animation libraries, to keep it responsive on touch.
- For the smooth-scroll library (Lenis, if used): initialize once at the root layout, disable entirely under `prefers-reduced-motion`.

---

## 5. Theming

### 5.1 CSS variables + Tailwind

Define theme tokens as CSS variables in `globals.css`, then reference them from `tailwind.config.ts` — this makes future rebranding a one-file change and enables potential dark-mode/locale-based theme swaps later.

```css
/* app/globals.css */
:root {
  --color-bg: 250 250 248;
  --color-ink: 26 26 26;
  --color-accent: 31 92 82;      /* placeholder — replace with verified brand hex */
  --color-accent-contrast: 255 255 255;
  --font-display: 'YourDisplayFont', serif;
  --font-body: 'YourBodyFont', sans-serif;
  --radius-card: 0.75rem;
  --radius-button: 999px;
}
```

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
      },
    },
  },
} satisfies Config;
```

Use `bg-accent`, `text-ink`, `font-display`, etc. throughout instead of raw hex utility classes — this is what makes "the client changed their mind about the green" a 5-minute fix instead of a find-and-replace across 80 files.

### 5.2 Fonts via `next/font`

```ts
// lib/fonts.ts
import { Playfair_Display, Inter } from 'next/font/google';
// or Local: import localFont from 'next/font/local'

export const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
```
Apply the variables on `<html className={`${displayFont.variable} ${bodyFont.variable}`}>` in the root layout. If Arabic needs a different typeface for legibility, load an Arabic-friendly font too and switch via `lang="ar"` CSS selector.

### 5.3 Dark mode (only if the client actually wants it)

Not part of the reference brand's likely direction, but if requested: `darkMode: 'class'` (already set above) + a `ThemeProvider` client component toggling a `dark` class on `<html>`, persisted via a cookie (read server-side to avoid flash-of-wrong-theme) rather than `localStorage` alone.

### 5.4 Design tokens ownership

- Keep **one** source of truth for tokens (the CSS variables block). Never let hex values leak into component files.
- Once the real brand hex/typography is confirmed (see the design-spec doc's note on verifying via DevTools/brand guide), update only `globals.css` — everything downstream inherits it.

---

## 6. General Next.js Best Practices Checklist

- [ ] Server Components by default; `"use client"` only where necessary
- [ ] Data fetching co-located with the Server Component that needs it; use `fetch` caching (`next: { revalidate }`) for CMS content instead of client-side fetching
- [ ] Environment variables typed and validated at startup (e.g. with Zod) — fail fast on missing `CMS_URL`, `RESEND_API_KEY`, etc.
- [ ] `loading.tsx` + `error.tsx` per major route segment
- [ ] Strict TypeScript (`strict: true`), no implicit `any`
- [ ] ESLint (`next/core-web-vitals` config) + Prettier + Husky pre-commit hook running lint + typecheck
- [ ] Images/assets optimized before commit (no unoptimized multi-MB PNGs in `public/`)
- [ ] Analytics/marketing scripts loaded via `next/script` with `strategy="afterInteractive"` or `"worker"`, and gated behind cookie-consent state
- [ ] Accessibility pass: keyboard navigation through mega-menu/drawer/modals, visible focus states, form errors announced via `aria-live`
- [ ] Preview/staging environment mirrors production env vars and CMS dataset for client review before each release
