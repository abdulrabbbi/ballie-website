import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const { isSwitching } = useLanguage();
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Fixed nav sits on top; add top padding to avoid jump */}
      <header className="h-0">
        <Navbar />
      </header>

      <main className="flex-1 pt-20 md:pt-22 lg:pt-24 relative">
        {/* Short shimmer overlay on language switch */}
        {isSwitching && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-40 animate-fadeIn"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.06) 100%)",
              backdropFilter: "blur(1px)",
            }}
          />
        )}
        <Outlet />
      </main>

      <footer className="py-3">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
