import { mkdir, readFile, writeFile } from 'node:fs/promises';

const { products } = JSON.parse(await readFile('data/bonitto-products.json', 'utf8'));

const chunkDefs = {
  'chunk-1': ['01', '02', '04', '05'],
  'chunk-2': ['03'],
  'chunk-3': ['06'],
};

await mkdir('data/product-translations/.source', { recursive: true });

for (const [chunk, slugs] of Object.entries(chunkDefs)) {
  const items = products.filter((p) => slugs.includes(p.categorySlug));
  const count = items.length;
  await writeFile(
    `data/product-translations/.source/${chunk}.json`,
    `${JSON.stringify({ count, products: items }, null, 2)}\n`
  );
  console.log(`${chunk}: ${count} products`);
}
