import productData from '@/data/bonitto-products.json';

export type BonittoProduct = (typeof productData.products)[number];

export const bonittoProducts = productData.products;

export function getBonittoProduct(id: string) {
  return bonittoProducts.find((product) => product.id === id);
}

export function getCategorySlug(product: BonittoProduct): string {
  return product.categorySlug ?? '03';
}

export function getProductsByCategorySlug(categorySlug: string): BonittoProduct[] {
  return bonittoProducts.filter((product) => getCategorySlug(product) === categorySlug);
}
