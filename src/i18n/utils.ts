import enTranslations from './en.json';
import esTranslations from './es.json';

// Define a type for your translations (optional but good practice)
export type Translations = typeof enTranslations;

const translations = {
  en: enTranslations,
  es: esTranslations,
};

/**
 * Gets the translations for the given locale.
 * @param locale The current locale (e.g., 'en' or 'es')
 * @returns The translations object for that locale.
 */
export function getTranslations(locale: string | undefined): Translations {
  // Astro.currentLocale can be undefined
  if (locale === 'es') {
    return translations.es;
  }
  // Default to English
  return translations.en;
}