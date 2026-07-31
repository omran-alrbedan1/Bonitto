import { readdir, readFile } from 'node:fs/promises';

const locales = ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es', 'he'];
const baseDir = 'messages';

const coreFiles = [
  'about.json', 'category.json', 'common.json', 'contact.json', 'cookie-consent.json',
  'distributors.json', 'expert-insights.json', 'face-body.json', 'home.json', 'layout.json',
  'legal.json', 'navigation.json', 'news.json', 'products.json', 'reserved-area.json',
];

function flatten(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out.push(...flatten(v, key));
    } else {
      out.push([key, v]);
    }
  }
  return out;
}

for (const locale of locales) {
  console.log(`\n===== ${locale} =====`);
  const files = await readdir(`${baseDir}/${locale}`);
  for (const file of coreFiles) {
    if (!files.includes(file)) {
      console.log(`  MISSING FILE: ${file}`);
      continue;
    }
    const a = JSON.parse(await readFile(`${baseDir}/${locale}/${file}`, 'utf8'));
    const keys = new Set(flatten(a).map(([k]) => k));
    const en = JSON.parse(await readFile(`${baseDir}/en/${file}`, 'utf8'));
    const enKeys = new Set(flatten(en).map(([k]) => k));
    const missing = [...enKeys].filter((k) => !keys.has(k));
    if (missing.length) {
      console.log(`  ${file}: missing ${missing.length} keys -> ${missing.slice(0, 8).join(', ')}`);
    }
  }
}
