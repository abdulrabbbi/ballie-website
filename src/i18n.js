import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        businessBenefits: "Business Benefits",
        footballMap: "Football Map",
        blogsNews: "Blogs & News",
        download: "Download App",
        language: "Language",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        businessBenefits: "Avantages Entreprise",
        footballMap: "Carte Football",
        blogsNews: "Blogs & Actus",
        download: "Télécharger l’appli",
        language: "Langue",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        businessBenefits: "Unternehmensvorteile",
        footballMap: "Fußballkarte",
        blogsNews: "Blogs & News",
        download: "App herunterladen",
        language: "Sprache",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    // sanitize stored language; fallback to 'en' if 'ur' or unknown
    lng: (() => {
      const stored = localStorage.getItem("lang");
      const allowed = new Set(["en", "fr", "de"]);
      if (!stored || !allowed.has(stored)) {
        if (stored === "ur") localStorage.removeItem("lang");
        return "en";
      }
      return stored;
    })(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnNull: false,
  });

export default i18n;
