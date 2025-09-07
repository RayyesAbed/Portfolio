import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // React's bridge to connect i18n with React
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: "en", // the default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
