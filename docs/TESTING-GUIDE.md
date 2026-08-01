# Bonitto Aesthetic — Client Testing Guide

This guide explains how to test the Bonitto Aesthetic website end-to-end before final handover. Follow every section in order and mark each check as **PASS** or **FAIL**. Report anything that fails using the template at the end.

---

## 1. Getting Started

### 1.1 Requirements
- Node.js 18.18+ (or LTS 20/22)
- A browser: Chrome (latest), plus one of Firefox / Edge / Safari
- A phone or emulated mobile viewport for responsive checks

### 1.2 Run the project locally

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open **http://localhost:3000/en** in your browser.

> If the site is already deployed, you can skip this step and test the live URL instead.

### 1.3 Test environment
Record this before you start:

| Item | Value |
|---|---|
| URL tested | |
| Browser + version | |
| OS + device | |
| Date | |
| Tester name | |

---


## 5. Product Categories (`/en/product-category/01` … `/06`)

Test all 6 categories. Expected product counts: 01 → 5, 02 → 4, 03 → 28, 04 → 4, 05 → 3, 06 → 17.

- [ ] Category heading and description show correctly.
- [ ] The full product grid/list renders — no empty category, no missing products.
- [ ] Each product card shows image, title and subtitle.
- [ ] Hovering a card shows a "Discover more" overlay.
- [ ] Clicking a card opens the correct product detail page.
- [ ] No duplicate or broken product links.

---

## 6. Product Detail Page (`/en/product/<slug>`)

Pick one product from each category (6 total).

- [ ] Breadcrumb shows Home / Category / Product name.
- [ ] Product title, category and description are present.
- [ ] Technical info blocks (with icons where applicable) render.
- [ ] Product packshot image loads.
- [ ] Effects list and "target area" show when available.
- [ ] Campaign image section loads where available.
- [ ] Related products section shows and each related card opens the right product.
- [ ] No 500 error on any product URL.

---

## 7. Face & Body (`/en/face-body`)

Interactive page — test carefully.

### 7.1 Face figure
- [ ] Intro heading and description show.
- [ ] A face image is displayed inside a circle (SVG).
- [ ] Clicking each face zone (forehead, nose, under-eye, eyebrow, side-eye, cheek, jawline, double-chin, side-mouth, smile lines, neck, hair, mouth) highlights that zone.
- [ ] After clicking a zone, the products panel scrolls into view and shows the matching products.
- [ ] **Filter buttons** (Mesotherapy / Fillers) work — only the matching products appear; the unavailable filter is disabled.
- [ ] Each product card links to the correct product page.
- [ ] The card images and titles render (no broken images).

### 7.2 Body figure
- [ ] Repeat the same checks for the body figure (arm, back, buttocks, leg, belly, hand).

### 7.3 Responsive
- [ ] On mobile the figure is readable and zones are clickable/tappable.
- [ ] Product cards scroll horizontally without being cut off.

---

## 8. Events (`/en/events`)

- [ ] The events list shows all event cards with image, date, category and title.
- [ ] Clicking an event opens its detail page.
- [ ] Event detail shows: back link, title, date, intro, body paragraphs, image.
- [ ] Videos on the IMCAS Paris event load and can be played/paused (not just the first — check a few).
- [ ] Gallery images load (desktop and mobile sizes).
- [ ] "Back to events" returns to the list.

---

## 9. Research Articles (`/en/research-articles`)

- [ ] The archive page lists all articles with image, title, date and category.
- [ ] Filter tabs (View all / Fillers / Skincare / Mesotherapy) filter the list correctly.
- [ ] Opening an article shows hero image, meta, back link and full content.
- [ ] Articles with content (e.g. "Dermal Filler") render fully formatted (headings, lists, bold).
- [ ] Articles without custom content still render a sensible fallback (title + description) — no blank page.

---

## 10. News & Events (`/en/news-events`)

> Note: this page currently displays **sample/mock articles** for review.

- [ ] Heading, description and category pills display.
- [ ] 6 article cards show; each links to a detail page.
- [ ] Article detail page shows a back link, category, date, title and body text.
- [ ] Related articles section displays 3 placeholders.

---

## 11. Expert Insights & Demonstrations (`/en/expert-insights-demonstrations`)

- [ ] Intro section (eyebrow, title, description) renders.
- [ ] The demo video loads and plays with native controls.
- [ ] Bullet list renders.
- [ ] Closing section has title, description and a "Contact us" button that opens the contact page in the same language.

---

## 12. Contact Us (`/en/contact-us`)

> Note: the form currently shows a success message without sending an email to a real inbox. Confirm with the client whether this is acceptable for this milestone.

- [ ] Intro section renders.
- [ ] Form fields all present: How did you find us, First name, Last name, Company, Email, Phone, Country, Message, privacy checkbox.
- [ ] Submitting an empty form shows browser validation (required fields).
- [ ] Entering an invalid email blocks submission.
- [ ] Filling all fields + checking consent + Submit shows the success message.
- [ ] Unchecking the consent checkbox prevents submission.

---

## 13. Distributors (`/en/distributors`)

- [ ] Heading "Distributors" renders.
- [ ] The world map image loads.
- [ ] 11 country pins are visible on the map (Egypt, Libya, UAE, Iraq, Romania, Morocco, Lebanon, Kuwait, Lithuania, Armenia, Azerbaijan).
- [ ] Pins are positioned roughly on the correct countries (not off the map).
- [ ] Hovering/tapping a pin shows the country name.

---

## 14. Language & Localisation

Test the whole site in at least: **English**, **Arabic**, and **one European language** (e.g. French or German).

- [ ] All pages render in the selected language (no untranslated English blocks on the page).
- [ ] Arabic / Hebrew pages are RTL and the layout mirrors correctly.
- [ ] Product category and product detail pages show translated product titles and descriptions (Arabic and others).
- [ ] Events and research articles show translated labels (titles may stay in English — flag any that shouldn't).
- [ ] Dates and numbers display sensibly.

---

## 15. Responsive & Mobile Checks

Test at: **Desktop 1366px**, **Tablet 768px**, **Mobile 375px**.

- [ ] No horizontal scroll on the body (except the intended horizontal-scroll sections).
- [ ] Menu is usable on mobile.
- [ ] Text is readable — no tiny unreadable text or huge overflowing words.
- [ ] Images scale correctly and are not stretched.
- [ ] Buttons and links are large enough to tap easily.
- [ ] The Face & Body figures are usable on a phone.
- [ ] Videos have working controls on mobile.

---

## 16. SEO / Browser Checks (optional but recommended)

- [ ] Page title and meta description exist (view source).
- [ ] Favicon loads in the tab.
- [ ] `robots.txt` and `sitemap.xml` respond (e.g. `/robots.txt`, `/sitemap.xml`).
- [ ] 404 page shows on a wrong URL (e.g. `/en/nonexistent-page`) without an error screen.

---

## 17. Bug Report Template

Use one block per issue found.

```
**Area/Page:** Home / About / Face & Body / Product … (name the page)
**URL:** /en/…
**Device & browser:** Desktop Chrome 125 / iPhone 13 Safari / …
**Expected:** What should happen
**Actual:** What actually happened
**Steps to reproduce:**
1. …
2. …
**Screenshot / video:** (attach if possible)
**Console errors (if any):**
```

---

## 18. Handover Checklist

- [ ] All sections 3–15 checked in at least one language.
- [ ] Arabic + English full walkthrough done.
- [ ] Responsive checks done at 3 breakpoints.
- [ ] No console errors.
- [ ] All reported FAIL items either fixed or approved as "known issue".
- [ ] Screenshots of each page saved for the client.
