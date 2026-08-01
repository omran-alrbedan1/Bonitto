
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
