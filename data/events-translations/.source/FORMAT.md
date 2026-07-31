# Events & research translation output format

## Events file: data/events-translations/{locale}.json
JSON map keyed by event `slug`:
```json
{
  "<slug>": {
    "title": "keep EXACTLY as-is (proper event name, e.g. IMCAS Paris 2026)",
    "alt": "TRANSLATED image alt",
    "intro": "TRANSLATED intro",
    "body": ["TRANSLATED paragraph", "..."],
    "galleryAlts": ["TRANSLATED gallery alt", "..."]
  }
}
```
- `body` must keep the same number of entries as English.
- `galleryAlts` must keep the same order/count as the English gallery array. Omit if the event has no gallery.
- Event titles are proper names (congress/brand names) — do NOT translate.

## Research file: data/research-translations/{locale}.json
JSON map keyed by article `slug`:
```json
{
  "<slug>": {
    "title": "TRANSLATED title",
    "alt": "TRANSLATED image alt",
    "contentHtml": "TRANSLATED full HTML content (only for articles that have it; omit otherwise)"
  }
}
```
- For `contentHtml`: translate all visible text, PRESERVE all HTML tags, tag attributes, `<b>`, `<em>`, `<h1>`–`<h3>`, `<ul>/<ol>/<li>` structure exactly. Keep code/numeric content as-is.
- Article titles (e.g. "Dermal Filler", "Natural-looking fillers") ARE content — translate them.
- Medical/scientific terms translate naturally into the target language; INCI and product brand names stay in English.

Rules for both files:
- Output a single valid JSON object per file. No comments, no trailing commas, no truncation.
- Every slug from the English source must be present.
