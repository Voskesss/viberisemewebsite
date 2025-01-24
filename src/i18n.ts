import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import nl from './locales/nl.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import pl from './locales/pl.json';
import sv from './locales/sv.json';
import da from './locales/da.json';

export const languages = {
  en: { nativeName: 'English', flag: '🇬🇧' },
  nl: { nativeName: 'Nederlands', flag: '🇳🇱' },
  de: { nativeName: 'Deutsch', flag: '🇩🇪' },
  fr: { nativeName: 'Français', flag: '🇫🇷' },
  es: { nativeName: 'Español', flag: '🇪🇸' },
  it: { nativeName: 'Italiano', flag: '🇮🇹' },
  pt: { nativeName: 'Português', flag: '🇵🇹' },
  pl: { nativeName: 'Polski', flag: '🇵🇱' },
  sv: { nativeName: 'Svenska', flag: '🇸🇪' },
  da: { nativeName: 'Dansk', flag: '🇩🇰' }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      nl: { translation: nl },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
      pt: { translation: pt },
      pl: { translation: pl },
      sv: { translation: sv },
      da: { translation: da }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl', 'de', 'fr', 'es', 'it', 'pt', 'pl', 'sv', 'da'],
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
