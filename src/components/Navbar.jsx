import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.businessBenefits"), path: "/business-benefits" },
    { name: t("nav.footballMap"), path: "/football-map" },
    { name: t("nav.blogsNews"), path: "/blogs-news" },
  ];
  // Desktop shows tabs for Home and Business; keep other links separate
  const navSecondary = navItems.filter(
    (i) => i.path !== "/" && i.path !== "/business-benefits"
  );

  const [open, setOpen] = useState(false);
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Hide-on-scroll behavior with rAF throttling
  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const run = () => {
        const y = window.scrollY;
        setScrolled(y > 10);
        const goingDown = y > lastY.current;
        // only toggle if delta is significant to avoid jitter
        if (Math.abs(y - lastY.current) > 6) {
          setHiddenOnScroll(goingDown && y > 64);
          lastY.current = y;
        }
        ticking = false;
      };
      if (!ticking) {
        window.requestAnimationFrame(run);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

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
      <div className="bg-[#231f20]/90">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex items-center justify-between rounded-xl py-3">
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

          {/* Desktop nav + tabs + download (hidden on small screens) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Tabs: Ballie for You / Ballie for Business */}
            <div className="hidden md:flex items-center bg-white/5 rounded-full p-1">
              {" "}
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
                {" "}
                Ballie for You{" "}
              </NavLink>{" "}
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
                {" "}
                Ballie for Business{" "}
              </NavLink>{" "}
            </div>
            {navSecondary.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
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
              <LanguageSelector />
              <a
                href="#"
                className="bg-accent text-black font-medium text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {t("nav.download")} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <span className="sr-only">Open main menu</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile side menu (drawer) */}
        {open &&
          createPortal(
            <div
              className="fixed inset-0 z-[1001]"
              aria-modal="true"
              role="dialog"
              aria-label="Main Menu"
            >
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black opacity-100 transition-opacity"
                onClick={() => setOpen(false)}
              />
              {/* Drawer */}
              <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[#1f1f1f] text-white shadow-2xl transform transition-transform duration-300 ease-out translate-x-0 overflow-y-auto z-[1002]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <span className="font-semibold">Menu</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="px-4 py-3" aria-label="Mobile navigation">
                  {/* Tabs inside drawer */}
                  <div className="flex items-center bg-white/5 rounded-full p-1 mb-4">
                    <NavLink
                      to="/"
                      end
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 text-center px-3 py-1.5 rounded-full text-sm transition ${
                          isActive
                            ? "bg-accent text-black"
                            : "text-gray-200 hover:text-white"
                        }`
                      }
                    >
                      Ballie for You
                    </NavLink>
                    <NavLink
                      to="/business-benefits"
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 text-center px-3 py-1.5 rounded-full text-sm transition ${
                          isActive
                            ? "bg-accent text-black"
                            : "text-gray-200 hover:text-white"
                        }`
                      }
                    >
                      Ballie for Business
                    </NavLink>
                  </div>

                  <ul className="space-y-3">
                    <li>
                      <h3 className="text-sm font-semibold text-accent">
                        Ballie Coins
                      </h3>
                      <p className="text-xs text-gray-300">
                        Placeholder: Explanation of Ballie Coins and usage will
                        appear here.
                      </p>
                    </li>
                    <li>
                      <NavLink
                        to="/football-map"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-base font-medium transition ${
                            isActive
                              ? "text-accent"
                              : "text-gray-200 hover:text-accent"
                          }`
                        }
                      >
                        Ballie Maps
                      </NavLink>
                    </li>
                    <li>
                      <h3 className="text-sm font-semibold text-accent">
                        About the Concept
                      </h3>
                      <p className="text-xs text-gray-300 mb-1">
                        Placeholder: Explanation of the concept. Link to app
                        download below.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-black bg-accent px-3 py-1.5 rounded-md text-sm"
                        onClick={() => setOpen(false)}
                      >
                        {t("nav.download")} <ArrowRight size={16} />
                      </a>
                    </li>
                    <li>
                      <NavLink
                        to="/blogs-news"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-base font-medium transition ${
                            isActive
                              ? "text-accent"
                              : "text-gray-200 hover:text-accent"
                          }`
                        }
                      >
                        Blog & News
                      </NavLink>
                    </li>
                    <li>
                      <h3 className="text-sm font-semibold text-accent">
                        Ballie for You
                      </h3>
                      <p className="text-xs text-gray-300">
                        Placeholder: Section content to be provided later.
                      </p>
                    </li>
                  </ul>

                  <div className="mt-4 flex items-center justify-between">
                    <LanguageSelector
                      inline={false}
                      onSelected={() => setOpen(false)}
                    />
                    <a
                      href="#"
                      className="inline-flex items-center justify-center bg-accent text-black font-medium text-sm px-4 py-2 rounded-lg gap-2 hover:bg-accent/90 transition"
                      onClick={() => setOpen(false)}
                    >
                      {t("nav.download")} <ArrowRight size={16} />
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
