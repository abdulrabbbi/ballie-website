import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n from "../i18n/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const allowed = new Set(["en", "de", "es", "nl"]);
  const initial = (() => {
    const stored = localStorage.getItem("lang");
    if (stored && allowed.has(stored)) return stored;
    const i18 = i18n.language;
    if (i18 && allowed.has(i18)) return i18;
    return "en";
  })();
  const [language, setLanguage] = useState(initial);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    // keep i18n in sync with stored lang
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const changeLanguage = async (lng) => {
    if (!lng || lng === language) return;
    if (!allowed.has(lng)) lng = "en";
    setIsSwitching(true);
    localStorage.setItem("lang", lng);
    await i18n.changeLanguage(lng);
    setLanguage(lng);
    try {
      document.documentElement.lang = lng;
    } catch {}
    // brief shimmer for UX feedback
    window.requestAnimationFrame(() => {
      setTimeout(() => setIsSwitching(false), 280);
    });
  };

  const value = useMemo(() => ({ language, isSwitching, changeLanguage }), [language, isSwitching]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
