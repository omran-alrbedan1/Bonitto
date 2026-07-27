import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const [
    common,
    navigation,
    home,
    about,
    contact,
    layout,
    products,
    news,
    expertInsights,
    faceBody,
    distributors,
    reservedArea,
    legal,
    cookieConsent,
  ] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/navigation.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/layout.json`),
    import(`../messages/${locale}/products.json`),
    import(`../messages/${locale}/news.json`),
    import(`../messages/${locale}/expert-insights.json`),
    import(`../messages/${locale}/face-body.json`),
    import(`../messages/${locale}/distributors.json`),
    import(`../messages/${locale}/reserved-area.json`),
    import(`../messages/${locale}/legal.json`),
    import(`../messages/${locale}/cookie-consent.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      navigation: navigation.default,
      home: home.default,
      about: about.default,
      contact: contact.default,
      layout: layout.default,
      products: products.default,
      news: news.default,
      expertInsights: expertInsights.default,
      faceBody: faceBody.default,
      distributors: distributors.default,
      reservedArea: reservedArea.default,
      legal: legal.default,
      cookieConsent: cookieConsent.default,
    },
  };
});
