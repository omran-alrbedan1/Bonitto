import { readdir, readFile, writeFile } from 'node:fs/promises';

const locales = ['fr', 'de', 'it', 'ru', 'tr', 'ar', 'es', 'he'];

const { products } = JSON.parse(await readFile('data/bonitto-products.json', 'utf8'));
const allIds = new Set(products.map((p) => p.id));

for (const locale of locales) {
  const files = (await readdir('data/product-translations/tmp')).filter((f) => f.startsWith(`${locale}-chunk-`));
  const merged = {};
  for (const file of files) {
    const data = JSON.parse(await readFile(`data/product-translations/tmp/${file}`, 'utf8'));
    Object.assign(merged, data);
  }
  const missing = [...allIds].filter((id) => !(id in merged));
  const extra = Object.keys(merged).filter((id) => !allIds.has(id));
  if (missing.length) console.log(`${locale}: MISSING ${missing.length}: ${missing.join(', ')}`);
  if (extra.length) console.log(`${locale}: EXTRA ${extra.length}: ${extra.join(', ')}`);
  await writeFile(`data/product-translations/${locale}.json`, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`${locale}: merged ${Object.keys(merged).length} products${missing.length ? ' (INCOMPLETE)' : ' OK'}`);
}

for (const locale of locales) {
  const file = `data/category-descriptions/${locale}.json`;
  const data = JSON.parse(await readFile(file, 'utf8'));
  const keys = Object.keys(data);
  console.log(`categories ${locale}: ${keys.length} keys -> ${keys.join(',')}`);
}
