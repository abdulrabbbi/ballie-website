import React from "react";
import { Link } from "react-router-dom";
import { APPLE_STORE_BADGE, GOOGLE_PLAY_BADGE } from "../images";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const SOCIAL_ICONS = [
    "/icons/Social icon.png",
    "/icons/Group.png",
    "/icons/Social icon (1).png",
    "/icons/Social icon (2).png",
    "/icons/Social icon (3).png",
  ];

  return (
    <footer className="bg-black text-white mt-20 px-6 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Advertising Sign-up */}
        <section
          id="advertise"
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          aria-label="Advertising Sign-up"
        >
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-accent">{t("footer.advertise.title")}</h3>
            <p className="mt-3 text-sm text-gray-300 max-w-2xl">{t("footer.advertise.desc")}</p>
          </div>
          <div className="md:w-1/3 w-full flex justify-end">
            <form
              className="flex items-stretch gap-0 w-full max-w-md"
              aria-label="Advertise signup form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="ad-email" className="sr-only">{t("footer.form.emailLabel")}</label>
              <input
                id="ad-email"
                type="email"
                required
                placeholder={t("footer.form.emailPlaceholder")}
                className="px-4 py-2 rounded-l-full border border-white/10 text-sm flex-1 outline-none bg-[#0f0f0f] text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-accent text-black px-4 py-2 rounded-r-full text-sm font-medium hover:bg-accent/90 transition"
              >
                {t("footer.form.submit")}
              </button>
            </form>
          </div>
        </section>

        {/* Main grid: Left nav list, Right contact + badges */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left big nav list */}
          <nav aria-label="Primary footer navigation" className="space-y-4">
            <ul className="space-y-3 font-extrabold tracking-wide">
              <li>
                <Link to="/" className="text-3xl md:text-4xl hover:text-accent transition-colors">
                  {t("footer.menu.home")}
                </Link>
              </li>
              <li>
                <a href="#advertise" className="text-3xl md:text-4xl hover:text-accent transition-colors">
                  {t("footer.menu.advertise")}
                </a>
              </li>
              <li>
                <Link to="/business-benefits" className="text-3xl md:text-4xl hover:text-accent transition-colors">
                  {t("footer.menu.cases")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-3xl md:text-4xl hover:text-accent transition-colors">
                  {t("footer.menu.careers")}
                </a>
              </li>
              <li>
                <a href="#app" className="text-3xl md:text-4xl hover:text-accent transition-colors">
                  {t("footer.menu.app")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Right column: Contact + Download badges */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:text-right">
              <div className="text-gray-300 text-sm">
                <p>Johan Huizingalaan 763A</p>
                <p>1066VH Amsterdam</p>
              </div>
              <div className="text-gray-300 text-sm">
                <p>partnerships@ballie.app</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">{t("footer.download.title")}</p>
              <div className="flex items-center gap-3">
                <a className="px-3 py-2 bg-white text-black flex items-center text-sm gap-2 rounded-md hover:opacity-90 transition">
                  <img src={APPLE_STORE_BADGE} alt="App Store" className="h-6 w-6 invert" loading="lazy" decoding="async" />
                  <div className="leading-tight">
                    <p className="text-[10px] text-gray-600">{t("footer.download.on")}</p>
                    <p className="text-sm font-medium">{t("footer.download.appStore")}</p>
                  </div>
                </a>
                <a className="px-3 py-2 bg-white text-black flex items-center text-sm gap-2 rounded-md hover:opacity-90 transition">
                  <img src={GOOGLE_PLAY_BADGE} alt="Google Play" className="h-6 w-6" loading="lazy" decoding="async" />
                  <div className="leading-tight">
                    <p className="text-[10px] text-gray-600">{t("footer.download.getItOn")}</p>
                    <p className="text-sm font-medium">{t("footer.download.googlePlay")}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social icons row */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {SOCIAL_ICONS.map((src, idx) => (
            <div
              key={idx}
              className="bg-[#1d1d1d] rounded-2xl p-8 flex items-center justify-center hover:bg-[#272727] transition"
            >
              <img src={src} alt="social" className="h-7 w-auto" loading="lazy" decoding="async" />
            </div>
          ))}
        </section>

        <hr className="border-white/10" />

        {/* Bottom bar */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p>{t("footer.rights", { year })}</p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-accent transition-colors">
              {t("footer.legal.terms")}
            </Link>
            <Link to="/blogs-news" className="hover:text-accent transition-colors">
              {t("footer.legal.blog")}
            </Link>
          </nav>
          <img
            src="/images/logoTransparent.png"
            alt="Ballie logo"
            className="h-10 md:h-12 lg:h-14 w-auto opacity-100 drop-shadow-[0_6px_18px_rgba(163,255,0,0.25)]"
            loading="lazy"
            decoding="async"
          />
        </section>
      </div>
    </footer>
  );
};

export default Footer;

