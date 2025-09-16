import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // React's bridge to connect i18n with React
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import detectComputerLanguage from "./utils/detectComputerLanguage";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: detectComputerLanguage(), // use the computer's language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
