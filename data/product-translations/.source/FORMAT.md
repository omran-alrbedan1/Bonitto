# Translation output format

Write a JSON **map** keyed by product `id`. For each product, include ONLY these translatable fields
(omit every non-translatable field: id, slug, sourceUrl, cardImage, productImage, campaignImage, categorySlug):

```json
{
  "<product.id>": {
    "title": "keep EXACTLY the same as English (product brand name)",
    "category": "TRANSLATED category label",
    "description": "TRANSLATED description",
    "technicalInfo": [
      { "label": "TRANSLATED label (e.g. Volume, Needle, Concentration, Active ingredients)", "value": "TRANSLATED value if prose; keep numeric/INCI units as-is" }
    ],
    "effects": ["TRANSLATED effect", "..."],
    "mainTarget": "TRANSLATED main target (may be empty string)",
    "related": [
      { "slug": "keep as-is", "title": "keep as-is (brand name)", "category": "TRANSLATED category" }
    ],
    "productImageAlt": "TRANSLATED alt text (omit if empty)",
    "campaignImageAlt": "TRANSLATED alt text (omit if empty)"
  }
}
```

Rules:
- `technicalInfo` array order must match English order, same length.
- `effects` may be empty array if English has no effects.
- `related` must preserve the English `slug` values; match by slug.
- Product titles are registered brand names (e.g. "01 PRO AGE FINE", "COLLAGEN ULTRA") — do NOT translate them.
- `category` values are generic terms (e.g. "Fillers", "Sterile vials", "Syringes", "Serum", "Cream") — translate them naturally.
- INCI ingredient names, chemical formulas, units (ml, mg), gauge numbers (30 G) stay as-is.
- Translate naturally and professionally; do not invent facts; keep medical claims accurate.
- Output a single valid JSON object. Do NOT include comments or trailing commas.
