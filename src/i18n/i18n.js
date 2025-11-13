import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Preload the common namespace for all languages. Additional namespaces can be added lazily later.
import enCommon from "../locales/en/common.json";
import deCommon from "../locales/de/common.json";
import esCommon from "../locales/es/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "de", "es"],
    defaultNS: "common",
    ns: ["common"],
    resources: {
      en: { common: enCommon },
      de: { common: deCommon },
      es: { common: esCommon },
    },
    detection: {
      // order: querystring -> localStorage -> navigator
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "lang",
    },
    interpolation: { escapeValue: false },
    returnNull: false,
    react: { useSuspense: true },
  });

// Reflect current language in <html lang>
if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language || "en";
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng || "en";
    try {
      localStorage.setItem("lang", lng);
    } catch {}
  });
}

export default i18n;

