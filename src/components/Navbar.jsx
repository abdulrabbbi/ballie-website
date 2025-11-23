import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: "home", name: t("nav.home", "Home"), path: "/" },
    {
      key: "businessBenefits",
      name: t("nav.businessBenefits", "Business Benefits"),
      path: "/business-benefits",
    },
    {
      key: "footballMap",
      name: t("nav.footballMap", "Football Map"),
      path: "/football-map",
    },
    {
      key: "ballieCoins",
      name: t("nav.ballieCoins", "Ballie Coins"),
      path: "/ballie-coins",
    },
    {
      key: "blogsNews",
      name: t("nav.blogsNews", "Blogs & News"),
      path: "/blogs-news",
    },
  ];

  const navSecondary = navItems.filter(
    (i) => i.path !== "/" && i.path !== "/business-benefits"
  );

  const [open, setOpen] = useState(false);
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);

        const goingDown = y > lastY.current;
        if (Math.abs(y - lastY.current) > 6) {
          setHiddenOnScroll(goingDown && y > 64);
          lastY.current = y;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    setHiddenOnScroll(false);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[1000] text-white transition-[transform,opacity,backdrop-filter,box-shadow] duration-300 ease-out ${
        hiddenOnScroll
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      } ${
        scrolled ? "backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div
        className="bg-[#1e201d]/90"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex items-center justify-between rounded-xl py-3">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to home"
            className="flex items-center space-x-2 ml-2 md:ml-4"
          >
            <img
              src="/images/logoTransparent.png"
              alt="BALLIE logo"
              className="h-12 w-auto object-contain md:h-14 lg:h-16 transition-all duration-300"
            />
          </Link>

          {/* Desktop/Laptop nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {/* Tabs: Ballie for You / Ballie for Business */}
            <div className="hidden lg:flex items-center bg-white/5 rounded-full p-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm transition ${
                    isActive
                      ? "bg-accent text-black"
                      : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {t("nav.ballieForYou", "Ballie For You")}
              </NavLink>
              <NavLink
                to="/business-benefits"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm transition ${
                    isActive
                      ? "bg-accent text-black"
                      : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {t("nav.ballieForBusiness", "Ballie For Business")}
              </NavLink>
            </div>

            {/* Secondary desktop links */}
            {navSecondary.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm hover:text-accent transition ${
                    isActive ? "text-accent font-semibold" : "text-gray-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href="#"
                className="bg-accent text-black font-medium text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {t("nav.download", "Download")} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile/Tablet: language toggle + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher inline />
            <button
              type="button"
              aria-label={
                open
                  ? t("nav.closeMenu", "Close menu")
                  : t("nav.openMainMenu", "Open main menu")
              }
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span className="sr-only">
                {t("nav.openMainMenu", "Open main menu")}
              </span>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet side menu (drawer) */}
        {open &&
          createPortal(
            <div
              className="fixed inset-0 z-[1001]"
              aria-modal="true"
              role="dialog"
              aria-label="Main Menu"
              id="mobile-menu"
            >
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/70 transition-opacity"
                onClick={handleNavClick}
                aria-hidden="true"
              />

              {/* Drawer */}
              <aside className="absolute right-0 top-0 h-full w-80 max-w-[88%] bg-[#1f1f1f] text-white shadow-2xl transform transition-transform duration-300 ease-out translate-x-0 overflow-y-auto z-[1002]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <span className="font-semibold">{t("nav.menu", "Menu")}</span>
                  <button
                    type="button"
                    aria-label={t("nav.closeMenu", "Close menu")}
                    onClick={handleNavClick}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav
                  className="px-4 py-3 space-y-5"
                  aria-label="Mobile navigation"
                >
                  {/* Tabs inside drawer */}
                  <div className="flex items-center bg-white/5 rounded-full p-1">
                    <NavLink
                      to="/"
                      end
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `flex-1 text-center px-3 py-1.5 rounded-full text-sm transition ${
                          isActive
                            ? "bg-accent text-black"
                            : "text-gray-200 hover:text-white"
                        }`
                      }
                    >
                      {t("nav.ballieForYou", "Ballie For You")}
                    </NavLink>
                    <NavLink
                      to="/business-benefits"
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `flex-1 text-center px-3 py-1.5 rounded-full text-sm transition ${
                          isActive
                            ? "bg-accent text-black"
                            : "text-gray-200 hover:text-white"
                        }`
                      }
                    >
                      {t("nav.ballieForBusiness", "Ballie For Business")}
                    </NavLink>
                  </div>

                  {/* Main sections: ONLY 4 cards now */}
                  <div className="space-y-3">
                    <NavLink
                      to="/ballie-coins"
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        [
                          "block rounded-2xl px-3 py-2.5 border transition",
                          "bg-white/0 hover:bg-white/5",
                          isActive
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-gray-100",
                        ].join(" ")
                      }
                    >
                      <p className="text-sm font-semibold">
                        {t("nav.ballieCoins", "Ballie Coins")}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-300">
                        {t(
                          "nav.ballieCoinsDesc",
                          "Earn. Personalise. Experience."
                        )}
                      </p>
                    </NavLink>

                    <NavLink
                      to="/football-map"
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        [
                          "block rounded-2xl px-3 py-2.5 border transition",
                          "bg-white/0 hover:bg-white/5",
                          isActive
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-gray-100",
                        ].join(" ")
                      }
                    >
                      <p className="text-sm font-semibold">
                        {t("nav.footballMap", "FootballMaps")}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-300">
                        {t("nav.footballMapDesc", "Find where football lives")}
                      </p>
                    </NavLink>

                    <NavLink
                      to="/football-map"
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        [
                          "block rounded-2xl px-3 py-2.5 border transition",
                          "bg-white/0 hover:bg-white/5",
                          isActive
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-gray-100",
                        ].join(" ")
                      }
                    >
                      <p className="text-sm font-semibold">
                        {t("nav.liveScores", "Live Scores")}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-300">
                        {t("nav.liveScoresDesc", "Stay in the game")}
                      </p>
                    </NavLink>

                    <NavLink
                      to="/blogs-news"
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        [
                          "block rounded-2xl px-3 py-2.5 border transition",
                          "bg-white/0 hover:bg-white/5",
                          isActive
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 text-gray-100",
                        ].join(" ")
                      }
                    >
                      <p className="text-sm font-semibold">
                        {t("nav.blogsNews", "Blogs & News")}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-300">
                        {t(
                          "nav.blogsNewsDesc",
                          "Stories, updates & highlights"
                        )}
                      </p>
                    </NavLink>
                  </div>

                  {/* Download button at bottom */}
                  <div className="pt-3 pb-4">
                    <a
                      href="#"
                      className="w-full inline-flex items-center justify-center bg-accent text-black font-medium text-sm px-4 py-2 rounded-lg gap-2 hover:bg-accent/90 transition"
                      onClick={handleNavClick}
                    >
                      {t("nav.download", "Download")} <ArrowRight size={16} />
                    </a>
                  </div>
                </nav>
              </aside>
            </div>,
            document.body
          )}
      </div>
    </nav>
  );
};

export default Navbar;
