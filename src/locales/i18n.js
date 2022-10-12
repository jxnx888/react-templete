import i18n from 'i18next';
import en_US from './en_US.json';
import fr_FR from './fr_FR.json';
import {
  initReactI18next
} from 'react-i18next';
// i18nextLng is saved by i18n automatically
const localLang = window.localStorage.getItem('i18nextLng');

i18n
  .use(initReactI18next) // init i18next
  .init({
    // 引入资源文件
    resources: {
      en: {
        translation: en_US,
        // antTranslation: enus,
      },
      fr: {
        translation: fr_FR,
      },
    },
    // Select the default language, and the selection content is the key in the above configuration, that is, en/th
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default; react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
