export async function getTranslations(locale: string, page: string) {
  try {
    const messages = await import(`../messages/${locale}/${page}.json`);
    return messages.default;
  } catch {
    // Fallback to English
    const messages = await import(`../messages/en/${page}.json`);
    return messages.default;
  }
}
