import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English", country: "GB" },
  { code: "de", label: "Deutsch", country: "DE" },
  { code: "es", label: "Espa\u00f1ol", country: "ES" },
  { code: "nl", label: "Dutch", country: "NL" },
];

export default function LanguageSwitcher({ inline = true, onSelected }) {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const current = useMemo(
    () => LANGUAGES.find((l) => l.code === language) || LANGUAGES[0],
    [language]
  );

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      const target = e.target;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSelect = async (code) => {
    await changeLanguage(code);
    setOpen(false);
    if (onSelected) onSelected(code);
  };

  const baseBtn =
    "inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition";
  const textCls = inline ? "text-sm" : "text-base";

  return (
    <div className="relative" role="group" aria-label={t("nav.language") || "Language"}>
      <button
        ref={btnRef}
        type="button"
        className={`${baseBtn} ${textCls}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
      >
        <ReactCountryFlag
          svg
          countryCode={current.country}
          style={{ width: "1.1em", height: "1.1em" }}
          title={current.label}
        />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-44 rounded-md bg-[#1f1f1f] shadow-lg ring-1 ring-black/10 overflow-hidden z-50"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="menuitem"
              className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-white/10 transition ${
                l.code === language ? "text-accent" : "text-white"
              }`}
              onClick={() => handleSelect(l.code)}
            >
              <ReactCountryFlag
                svg
                countryCode={l.country}
                style={{ width: "1.1em", height: "1.1em" }}
                title={l.label}
              />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
