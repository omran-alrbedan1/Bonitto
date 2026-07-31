export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  image: string;
  alt: string;
  fullDescriptionHtml?: string; // For rich text content
  activeIngredients?: string[];
  volume?: string;
  concentration?: string;
  effect?: string[]; // Bullet points
  mainTarget?: string;
  relatedProductSlugs?: string[]; // For related products section
};

// This is a placeholder for actual product data.
// In a real application, this data would likely come from a CMS.
export const products: Product[] = [
  {
    slug: 'dermal-filler-pro-age-fine',
    name: '01 PRO AGE FINE',
    categorySlug: '01', // Hyaluronic Acid Fillers
    description: 'Hyaluronic Acid Filler | Fine Lines & Skin Boosting',
    image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/06/natural-looking-fillers.webp', // Example image
    alt: 'Bonitto Pro Age Fine product',
    fullDescriptionHtml: `<p>This filler revives tired areas without adding heaviness, ideal for warm weather when skin tends to swell more easily.</p>`,
    activeIngredients: ['Hyaluronic Acid'],
    volume: '1 x 1.0 ml',
    concentration: '20 mg/ml',
    effect: ['Refreshed, luminous look', 'Smooths fine lines'],
    mainTarget: 'Fine Lines & Skin Boosting',
    relatedProductSlugs: ['02-lips-plump'],
  },
  { slug: '02-lips-plump', name: '02 LIPS PLUMP', categorySlug: '01', description: 'Hyaluronic Acid Filler | Lip Volume & Contour', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/06/natural-looking-fillers.webp', alt: 'Bonitto Lips Plump product', fullDescriptionHtml: `<p>Its smooth texture and balanced elasticity make it ideal for effortless beauty.</p>`, activeIngredients: ['Hyaluronic Acid'], volume: '1 x 1.0 ml', concentration: '20 mg/ml', effect: ['Fuller, hydrated lips', 'Natural curves'], mainTarget: 'Lip Volume & Contour', relatedProductSlugs: ['dermal-filler-pro-age-fine'] },
  { slug: 'age-plus-vials', name: 'AGE+', categorySlug: '03', description: 'Sterile cosmetic solution designed to rejuvenate and revitalize the skin.', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/07/age-plus.webp', alt: 'Bonitto AGE+ vials', activeIngredients: ['Sodium Hyaluronate', 'Butylene Glycol', 'Lysine'], volume: 'Vials 5 x 5ml', effect: ['Reduction in fine lines and wrinkles', 'Enhanced skin texture', 'Increased hydration'], mainTarget: 'Anti-age' },
  { slug: 'hyperskin-cream', name: 'HyperSkin', categorySlug: '06', description: 'Vitamin C Radiance Cream formulated to enhance skin radiance.', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2025/07/hyperskin.webp', alt: 'Bonitto HyperSkin cream', activeIngredients: ['Vitamin C', 'Hyaluronic Acid'], volume: '50 ml', effect: ['Enhances skin radiance', 'Reduces signs of aging'], mainTarget: 'Skin Radiance' },
  // Add more dummy products for other categories as needed, matching the structure observed on bonittoaesthetic.com
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}