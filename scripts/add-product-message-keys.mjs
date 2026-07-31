import { readFile, writeFile } from 'node:fs/promises';

const additions = {
  en: {
    categoriesPrefix: 'Category',
    detail: {
      home: 'Home',
      discoverMore: 'Discover more',
      noProducts: 'No products found in this category.',
      treatmentAlt: '{title} treatment',
    },
  },
  fr: {
    categoriesPrefix: 'Catégorie',
    detail: {
      home: 'Accueil',
      discoverMore: 'En savoir plus',
      noProducts: 'Aucun produit trouvé dans cette catégorie.',
      treatmentAlt: 'Traitement {title}',
    },
  },
  de: {
    categoriesPrefix: 'Kategorie',
    detail: {
      home: 'Startseite',
      discoverMore: 'Mehr erfahren',
      noProducts: 'Keine Produkte in dieser Kategorie gefunden.',
      treatmentAlt: '{title} Behandlung',
    },
  },
  it: {
    categoriesPrefix: 'Categoria',
    detail: {
      home: 'Home',
      discoverMore: 'Scopri di più',
      noProducts: 'Nessun prodotto trovato in questa categoria.',
      treatmentAlt: 'Trattamento {title}',
    },
  },
  ru: {
    categoriesPrefix: 'Категория',
    detail: {
      home: 'Главная',
      discoverMore: 'Узнать больше',
      noProducts: 'В этой категории товары не найдены.',
      treatmentAlt: 'Процедура {title}',
    },
  },
  tr: {
    categoriesPrefix: 'Kategori',
    detail: {
      home: 'Ana Sayfa',
      discoverMore: 'Daha fazlası',
      noProducts: 'Bu kategoride ürün bulunamadı.',
      treatmentAlt: '{title} uygulaması',
    },
  },
  ar: {
    categoriesPrefix: 'الفئة',
    detail: {
      home: 'الرئيسية',
      discoverMore: 'اكتشف المزيد',
      noProducts: 'لا توجد منتجات في هذه الفئة.',
      treatmentAlt: 'علاج {title}',
    },
  },
  es: {
    categoriesPrefix: 'Categoría',
    detail: {
      home: 'Inicio',
      discoverMore: 'Descubre más',
      noProducts: 'No se encontraron productos en esta categoría.',
      treatmentAlt: 'Tratamiento {title}',
    },
  },
  he: {
    categoriesPrefix: 'קטגוריה',
    detail: {
      home: 'דף הבית',
      discoverMore: 'גלה עוד',
      noProducts: 'לא נמצאו מוצרים בקטגוריה זו.',
      treatmentAlt: 'טיפול {title}',
    },
  },
};

const locales = ['en', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'es', 'he'];
for (const locale of locales) {
  const file = `messages/${locale}/products.json`;
  const data = JSON.parse(await readFile(file, 'utf8'));
  data.categoriesPrefix = additions[locale].categoriesPrefix;
  data.detail = { ...data.detail, ...additions[locale].detail };
  await writeFile(file, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`updated ${file}`);
}
