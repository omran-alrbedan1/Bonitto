export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  image: string;
  alt: string;
  // Add other fields as observed on bonittoaesthetic.com product pages
  // e.g., activeIngredients: string[];
  // volume: string;
  // concentration?: string;
  // effect: string[];
  // mainTarget: string;
};

// This is a placeholder for actual product data.
// In a real application, this data would likely come from a CMS.
export const products: Product[] = [
  { slug: 'product-a', name: 'Product A', categorySlug: '01', description: 'Description for Product A', image: '/images/products/product-a.webp', alt: 'Product A' },
  { slug: 'product-b', name: 'Product B', categorySlug: '01', description: 'Description for Product B', image: '/images/products/product-b.webp', alt: 'Product B' },
  { slug: 'product-c', name: 'Product C', categorySlug: '02', description: 'Description for Product C', image: '/images/products/product-c.webp', alt: 'Product C' },
  { slug: 'product-d', name: 'Product D', categorySlug: '03', description: 'Description for Product D', image: '/images/products/product-d.webp', alt: 'Product D' },
  { slug: 'product-e', name: 'Product E', categorySlug: '06', description: 'Description for Product E', image: '/images/products/product-e.webp', alt: 'Product E' },
  // Add more dummy products for other categories as needed
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}