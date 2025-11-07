import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-lime-400 text-black mt-20 py-10 px-6 rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        {/* TOP ROW: Advertising Sign-up */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6"
          aria-label="Advertising Sign-up"
        >
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold">Advertise with us</h3>
            <p className="mt-3 text-sm text-black/70 max-w-2xl">
              Reach engaged football fans. Leave your email and we’ll contact you with sponsorship and advertising options.
            </p>
          </div>

          <div className="md:w-1/3 w-full flex justify-end">
            <form
              className="flex items-stretch gap-0 w-full max-w-md"
              aria-label="Advertise signup form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="ad-email" className="sr-only">
                Business email
              </label>
              <input
                id="ad-email"
                type="email"
                required
                placeholder="Enter your business email"
                className="px-4 py-2 rounded-l-full border border-black/10 text-sm flex-1 outline-none bg-white"
                aria-describedby="ad-help"
              />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-full text-sm font-medium">
                Get Started
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-black/10" />

        {/* MIDDLE ROW: Logo + text + nav (left) and download badges (right) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 py-6">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1 rounded-full bg-transparent">
                <img
                  src="/images/logoTransparent.png"
                  alt="BALLIE logo"
                  className="h-12 w-auto object-contain md:h-14 lg:h-16 transition-all duration-300 block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-sm text-black/70 mb-4 max-w-2xl">
              Helping fans discover venues, updates, and experiences they love.
            </p>

            <nav className="flex gap-6 text-sm font-medium" aria-label="Footer navigation">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/business-benefits" className="hover:underline">
                Business Benefits
              </Link>
              <Link to="/football-map" className="hover:underline">
                Football Map
              </Link>
              <Link to="/blogs-news" className="hover:underline">
                Blogs & News
              </Link>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          <div className="md:w-1/3 w-full flex flex-col items-end">
            <p className="text-sm mb-3 font-medium">Download app now</p>
            <div className="flex flex-col gap-3">
              <a className="px-3 py-2 bg-black text-white flex items-center text-sm gap-2 rounded-md">
                <img
                  src="/icons/Apple logo.png"
                  alt="App Store"
                  className="h-6 w-6"
                  loading="lazy"
                  decoding="async"
                />
                <div className="leading-tight text-right">
                  <p className="text-[10px] text-gray-300">Download on the</p>
                  <p className="text-sm font-medium">App Store</p>
                </div>
              </a>

              <a className="px-3 py-2 bg-black text-white flex items-center text-sm gap-2 rounded-md">
                <img
                  src="/icons/Google Play logo.png"
                  alt="Google Play"
                  className="h-6 w-6"
                  loading="lazy"
                  decoding="async"
                />
                <div className="leading-tight text-right">
                  <p className="text-[10px] text-gray-300">GET IT ON</p>
                  <p className="text-sm font-medium">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        {/* BOTTOM ROW: Additional info + copyright + social icons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
          <div>
            <h4 className="text-sm font-semibold">More Information Coming Soon</h4>
            <p className="text-xs text-black/70 max-w-md">
              We’re preparing more details about our platform, partners, and policies. Stay tuned.
            </p>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} BALLIE. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <img src="/icons/Social icon.png" alt="x" className="h-5 w-auto" loading="lazy" decoding="async" />
            <img src="/icons/Group.png" alt="linkedin" className="h-5 w-auto" loading="lazy" decoding="async" />
            <img
              src="/icons/Social icon (1).png"
              alt="facebook"
              className="h-5 w-auto"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icons/Social icon (2).png"
              alt="github"
              className="h-5 w-auto"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icons/Social icon (3).png"
              alt="dribbble"
              className="h-5 w-auto"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/icons/Social icon (4).png"
              alt="other"
              className="h-5 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

