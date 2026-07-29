import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const slugs = [
  'age',
  'btx',
  'btx-2-0',
  'collagen-ultra',
  'cor-control',
  'dna-booster',
  'exogenix',
  'ey',
  'gold-stem',
  'ha-booster-aa15',
  'hairscalp',
  'hair-ultra',
  'hyavital-hl',
  'lipo',
  'lips-on',
  'mevita-15-ha',
  'mst-redox',
  'n-01-bonitto-pro-age-fine',
  'n-02-bonitto-lips-plum',
  'n-03-bonitto-age-solution',
  'n-04-bonitto-face-sculpt',
  'n-05-bonitto-volume',
  'ox',
  'ox-ultra',
  'peel-4-0',
  'power-oxy',
  'pro-age',
  'pro-cells',
  'radiance-pro',
  'shine-power',
  'whitening',
];

function decodeEntities(value = '') {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#039;/gi, "'")
    .replace(/&ndash;/gi, '–')
    .replace(/&mdash;/gi, '—')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function text(value = '') {
  return decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function first(html, pattern, group = 1) {
  return html.match(pattern)?.[group] ?? '';
}

function absoluteUrl(value = '') {
  if (!value) return '';
  if (value.startsWith('//')) return `https:${value}`;
  return value;
}

function parseProduct(slug, html) {
  const content = first(html, /<div id="blocks-wrapper" class="horizontal-scroll">([\s\S]*?)<section id="footer">/i);
  if (!content) throw new Error(`Could not find product content for ${slug}`);

  const intro = first(content, /<section>([\s\S]*?)<\/section>/i);
  const title = text(first(intro, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const category = text(first(intro, /<div class="mb-4 tagline">([\s\S]*?)<\/div>/i));
  const description = text(first(intro, /<div class="wyswyg">([\s\S]*?)<\/div>/i));
  const technicalInfo = [...intro.matchAll(/<div class="row mt-4 tech-info-wrapper">([\s\S]*?class="text-info-label">[\s\S]*?class="text-info-value">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/gi)]
    .map((match) => {
      const block = match[1];
      return {
        icon: absoluteUrl(first(block, /<img[^>]+src="([^"]+)"/i)),
        label: text(first(block, /class="text-info-label">([\s\S]*?)<\/div>/i)),
        value: text(first(block, /class="text-info-value">([\s\S]*?)<\/div>/i)),
      };
    })
    .filter((item) => item.label && item.value);

  const imageSections = [...content.matchAll(/<section[^>]*class="[^"]*block-image[^"]*"[^>]*>([\s\S]*?)<\/section>/gi)]
    .map((match) => {
      const block = match[1];
      return {
        desktop: absoluteUrl(first(block, /<source[^>]+srcset="([^"]+)"/i)),
        mobile: absoluteUrl(first(block, /<img[^>]+src="([^"]+)"/i)),
        alt: text(first(block, /<img[^>]+alt="([^"]*)"/i)),
      };
    })
    .filter((item) => item.desktop || item.mobile);

  const effectBlock = first(content, /<div class="wyswyg"><h2>Effect<\/h2>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i);
  const effects = [...effectBlock.matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((match) => text(match[1]));
  const mainTarget = text(first(effectBlock, /<h3>Main target<\/h3>\s*<p>([\s\S]*?)<\/p>/i));

  const relatedBlock = first(content, /<section class="plp">([\s\S]*?)<\/section>/i);
  const related = [...relatedBlock.matchAll(/<div class="product-item">([\s\S]*?)<\/div>/gi)]
    .map((match) => {
      const block = match[1];
      const href = first(block, /<a href="([^"]+)"/i);
      return {
        slug: first(href, /\/product\/([^/]+)\//i),
        title: text(first(block, /class="d-block product-title">([\s\S]*?)<\/span>/i)),
        category: text(first(block, /class="d-block product-title">[\s\S]*?<\/span>\s*<span[^>]*>([\s\S]*?)<\/span>/i)),
        image: absoluteUrl(first(block, /<img[^>]+src="([^"]+)"/i)),
      };
    })
    .filter((item) => item.slug);

  const cardImage = first(
    html,
    new RegExp(`<a href="https:\\/\\/www\\.bonittoaesthetic\\.com\\/product\\/${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/">[\\s\\S]*?<img[^>]+src="([^"]+)"`, 'i')
  );

  return {
    id: slug,
    slug,
    sourceUrl: `https://www.bonittoaesthetic.com/product/${slug}/`,
    title,
    category,
    description,
    cardImage: absoluteUrl(cardImage || imageSections[0]?.mobile || imageSections[0]?.desktop),
    productImage: imageSections[0] ?? null,
    campaignImage: imageSections[1] ?? null,
    technicalInfo,
    effects,
    mainTarget,
    related,
  };
}

async function fetchProduct(slug) {
  const url = `https://www.bonittoaesthetic.com/product/${slug}/`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Bonitto project content importer)',
    },
  });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return parseProduct(slug, await response.text());
}

async function runPool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index]);
      process.stdout.write(`Fetched ${items[index]}\n`);
    }
  }

  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

const products = await runPool(slugs, 4, fetchProduct);
const outputDir = path.join(process.cwd(), 'data');
await mkdir(outputDir, { recursive: true });
await writeFile(
  path.join(outputDir, 'bonitto-products.json'),
  `${JSON.stringify({ fetchedAt: new Date().toISOString(), products }, null, 2)}\n`,
  'utf8'
);

process.stdout.write(`Stored ${products.length} products in data/bonitto-products.json\n`);
