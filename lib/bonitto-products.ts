import productData from '@/data/bonitto-products.json';

export type BonittoProduct = {
  id: string;
  slug: string;
  sourceUrl: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  cardImage: string;
  productImage: { desktop: string; mobile: string; alt: string } | null;
  campaignImage: { desktop: string; mobile: string; alt: string } | null;
  technicalInfo: Array<{ icon: string; label: string; value: string }>;
  effects: string[];
  mainTarget: string;
  related: Array<{ slug: string; title: string; category: string; image: string }>;
  recommendedIndications?: string[];
  certificationImage?: string;
  certificationAlt?: string;
  composition?: string;
  howToUse?: string[];
};

export const bonittoProducts: BonittoProduct[] = productData.products;

export function getBonittoProduct(id: string) {
  return bonittoProducts.find((product) => product.id === id);
}

export function getCategorySlug(product: BonittoProduct): string {
  return product.categorySlug ?? '03';
}

export function getProductsByCategorySlug(categorySlug: string): BonittoProduct[] {
  return bonittoProducts.filter((product) => getCategorySlug(product) === categorySlug);
}
