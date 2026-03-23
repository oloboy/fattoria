import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationIT from './locales/it/translation.json';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  it: {
    translation: translationIT
  },
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it', // lingua di default
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
