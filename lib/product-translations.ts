import { type Locale } from './i18n';
import { bonittoProducts, getBonittoProduct, type BonittoProduct } from './bonitto-products';
import categoryDescriptionsEn from '@/data/category-descriptions.json';
import fr from '@/data/product-translations/fr.json';
import de from '@/data/product-translations/de.json';
import it from '@/data/product-translations/it.json';
import ru from '@/data/product-translations/ru.json';
import tr from '@/data/product-translations/tr.json';
import ar from '@/data/product-translations/ar.json';
import es from '@/data/product-translations/es.json';
import he from '@/data/product-translations/he.json';

import catFr from '@/data/category-descriptions/fr.json';
import catDe from '@/data/category-descriptions/de.json';
import catIt from '@/data/category-descriptions/it.json';
import catRu from '@/data/category-descriptions/ru.json';
import catTr from '@/data/category-descriptions/tr.json';
import catAr from '@/data/category-descriptions/ar.json';
import catEs from '@/data/category-descriptions/es.json';
import catHe from '@/data/category-descriptions/he.json';

const productTranslations: Record<string, Record<string, ProductTranslation>> = {
  fr,
  de,
  it,
  ru,
  tr,
  ar,
  es,
  he,
};

const categoryTranslations: Record<string, Record<string, CategoryTranslation>> = {
  fr: catFr,
  de: catDe,
  it: catIt,
  ru: catRu,
  tr: catTr,
  ar: catAr,
  es: catEs,
  he: catHe,
};

export type ProductTranslation = {
  title?: string;
  category?: string;
  description?: string;
  technicalInfo?: Array<{ label: string; value: string }>;
  effects?: string[];
  mainTarget?: string;
  related?: Array<{ slug: string; title: string; category: string }>;
  productImageAlt?: string;
  campaignImageAlt?: string;
};

export type CategoryTranslation = {
  title?: string;
  body?: string;
};

export function getLocalizedProduct(id: string, locale: Locale): BonittoProduct | undefined {
  const base = getBonittoProduct(id);
  if (!base || locale === 'en') return base;

  const tr = productTranslations[locale]?.[id];
  if (!tr) return base;

  const relatedBySlug = new Map((tr.related ?? []).map((r) => [r.slug, r]));

  return {
    ...base,
    title: tr.title ?? base.title,
    category: tr.category ?? base.category,
    description: tr.description ?? base.description,
    technicalInfo: base.technicalInfo.map((item, i) => ({
      ...item,
      label: tr.technicalInfo?.[i]?.label ?? item.label,
      value: tr.technicalInfo?.[i]?.value ?? item.value,
    })),
    effects: tr.effects && tr.effects.length ? tr.effects : base.effects,
    mainTarget: tr.mainTarget || base.mainTarget,
    related: base.related.map((r) => {
      const rt = relatedBySlug.get(r.slug);
      return rt ? { ...r, title: rt.title, category: rt.category } : r;
    }),
    productImage: base.productImage
      ? { ...base.productImage, alt: tr.productImageAlt || base.productImage.alt }
      : base.productImage,
    campaignImage: base.campaignImage && tr.campaignImageAlt
      ? { ...base.campaignImage, alt: tr.campaignImageAlt }
      : base.campaignImage,
  };
}

export function getLocalizedProducts(categorySlug: string, locale: Locale): BonittoProduct[] {
  return bonittoProducts
    .filter((product) => (product.categorySlug ?? '03') === categorySlug)
    .map((product) => getLocalizedProduct(product.id, locale))
    .filter((product): product is BonittoProduct => Boolean(product));
}

export function getLocalizedCategoryDescription(slug: string, locale: Locale) {
  const base = categoryDescriptionsEn[slug as keyof typeof categoryDescriptionsEn];
  if (!base) return undefined;
  if (locale === 'en') return base;

  const tr = categoryTranslations[locale]?.[slug];
  if (!tr) return base;

  return {
    title: tr.title ?? base.title,
    body: tr.body ?? base.body,
  };
}
