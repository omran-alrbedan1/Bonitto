export const locales = ["en", "fr", "de", "it", "ru", "tr", "ar", "es","he"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
