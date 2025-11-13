import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { HERO_BG } from "../../images";

/**
 * Responsive upgrades:
 * - Uses min-h with svh fallback for better mobile viewport sizing.
 * - Title uses clamp() on 2xl screens, avoiding giant headings on ultrawides.
 * - Grid rebalances at xl/2xl; image panel scales but never dominates text.
 * - Stats: 2 cols (xs), 3 cols (md), 4 cols (xl+).
 * - Short viewport handling (≤700px height): tighter paddings, hide right image.
 * - Safe-area top padding for notches.
 */

const PrimaryCta = ({ children, className = "", ...props }) => (
  <a
    {...props}
    className={[
      "inline-flex items-center gap-2 rounded-lg px-5 py-3",
      "font-semibold tracking-tight",
      "bg-accent text-gray-900",
      "shadow-lg shadow-black/25",
      "transition will-change-transform",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      "motion-safe:hover:translate-y-0.5 motion-safe:hover:shadow-xl",
      "active:translate-y-[1px]",
      className,
    ].join(" ")}
  >
    {children}
  </a>
);

const SecondaryCta = ({ children, className = "", ...props }) => (
  <a
    {...props}
    className={[
      "inline-flex items-center gap-2 rounded-lg px-5 py-3",
      "font-semibold tracking-tight",
      "border border-white/20 text-white",
      "bg-white/0 hover:bg-white/5",
      "transition will-change-transform",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      "motion-safe:hover:translate-y-0.5",
      className,
    ].join(" ")}
  >
    {children}
  </a>
);

const HeroSection = () => {
  const rootRef = useRef(null);

  // Reveal-on-scroll (motion-safe)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const els = root.querySelectorAll("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const { t } = useTranslation();
  return (
    <section
      ref={rootRef}
      className="hero-shell relative w-full overflow-hidden bg-black text-white"
      aria-labelledby="hero-title"
    >
      {/* Background (decorative) */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-center lg:object-right"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1280px] 2xl:max-w-[1440px]">
        {/* Grid:
            - 1 col on mobile
            - 12-col on lg+
            - rebalance spans at xl/2xl to keep text line-length healthy
        */}
        <div
          className={[
            "grid items-center gap-8 sm:gap-10",
            "py-14 sm:py-20 lg:py-28",
            "grid-cols-1 lg:grid-cols-12",
            // height: use svh if supported (applied in <style> below)
            "min-h-screen lg:min-h-[80vh]",
          ].join(" ")}
        >
          {/* Left: text */}
          <div
            className="lg:col-span-7 xl:col-span-6 2xl:col-span-6"
            data-animate
            data-anim-type="fade-up"
          >
            <div className="pt-[calc(env(safe-area-inset-top))]">
              {/* Badge */}
              <div className="mb-5 sm:mb-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold bg-accent/15 text-accent ring-1 ring-inset ring-accent/30">
                  {t("hero.home.badge")}
                </span>
              </div>

              {/* Title with clamp at 2xl to avoid over-scaling */}
              <h1
                id="hero-title"
                className="text-balance font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl 2xl:text-[clamp(3rem,3.8vw,4.25rem)]"
              >
                {t("hero.home.title")}
              </h1>

              {/* Supporting copy */}
              <p className="mt-5 max-w-prose text-pretty text-[15px] sm:text-[17px] leading-relaxed text-gray-200">
                Born from a passion for the beautiful game, Ballie Live is the platform for everyone who
                doesn’t just want to watch football—but truly experience it. Find where your favourite club
                is playing live, follow matches in real time, and discover venues where football lives.
                Ballie Live connects fans, clubs, and pubs in one app—bringing the energy of the pitch
                straight to your screen, anytime, anywhere.
              </p>

              {/* CTAs */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
                <PrimaryCta href="#download" aria-label={t("cta.downloadApp")}>
                  <span>{t("cta.downloadApp")}</span>
                  <ArrowRight size={18} aria-hidden />
                </PrimaryCta>

                <SecondaryCta href="#learn-more" aria-label={t("cta.learnMore")}>
                  {t("cta.learnMore")}
                </SecondaryCta>
              </div>

              {/* Stats: 2 / 3 / 4 columns by breakpoint */}
              <dl
                className="mt-9 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                data-animate
                data-anim-type="fade-in"
                data-anim-delay="100"
              >
                {[
                  { k: t("hero.home.stats.venues"), v: "10k+" },
                  { k: t("hero.home.stats.liveMatches"), v: "50k+/mo" },
                  { k: t("hero.home.stats.clubs"), v: "2k+" },
                  { k: t("hero.home.stats.cities"), v: "120+" },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-xl bg-white/5 p-3 sm:p-4 ring-1 ring-white/10"
                  >
                    <dt className="text-[11px] sm:text-xs text-gray-300">{it.k}</dt>
                    <dd className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      {it.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: image panel (hidden on short viewports) */}
          <div
            className="hero-right hidden lg:col-span-5 lg:block xl:col-span-6 2xl:col-span-6"
            data-animate
            data-anim-type="scale-in"
            data-anim-delay="100"
          >
            <div
              aria-hidden
              className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/10"
            >
              {/* Aspect shifts with screen to avoid awkward crops */}
              <div className="relative aspect-[5/6] xl:aspect-[4/5] 2xl:aspect-[16/10]">
                <img
                  src={HERO_BG}
                  alt=""
                  role="presentation"
                  className="absolute inset-0 h-full w-full object-cover object-center motion-safe:will-change-transform parallax-img"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/0 via-black/0 to-black/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations + responsive helpers */}
      <style>
        {`
          /* Prefer svh for mobile address bar behaviors if supported */
          @supports (height: 100svh) {
            .hero-shell > div > .grid { min-height: 100svh; }
          }

          /* Keyframes */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(.96); }
            to { opacity: 1; transform: scale(1); }
          }

          /* Base state */
          [data-animate] { opacity: 0; }
          .animate-in { opacity: 1; }

          /* Types */
          [data-animate][data-anim-type="fade-up"].animate-in {
            animation: fadeUp 500ms cubic-bezier(.2,.8,.2,1) both;
          }
          [data-animate][data-anim-type="fade-in"].animate-in {
            animation: fadeIn 500ms ease-out both;
          }
          [data-animate][data-anim-type="scale-in"].animate-in {
            animation: scaleIn 520ms cubic-bezier(.2,.8,.2,1) both;
          }

          /* Optional delays */
          [data-animate][data-anim-delay="100"].animate-in { animation-delay: 100ms; }
          [data-animate][data-anim-delay="200"].animate-in { animation-delay: 200ms; }
          [data-animate][data-anim-delay="300"].animate-in { animation-delay: 300ms; }

          /* Subtle parallax on desktop, motion-safe */
          @media (prefers-reduced-motion: no-preference) {
            .parallax-img { transform: translateY(0); }
            @media (min-width: 1024px) {
              :root:has(body) .parallax-img {
                animation: parallaxY 12s linear infinite alternate;
              }
              @keyframes parallaxY {
                from { transform: translateY(-3%); }
                to   { transform: translateY(3%); }
              }
            }
          }

          /* Short viewport handling (e.g., landscape phones / small laptop windows) */
          @media (max-height: 700px) {
            .hero-shell .grid { padding-top: 2rem !important; padding-bottom: 2rem !important; }
            .hero-right { display: none !important; }
          }

          /* Respect reduced motion explicitly */
          @media (prefers-reduced-motion: reduce) {
            .motion-safe\\:hover\\:translate-y-0\\.5:hover { transform: none !important; }
            .active\\:translate-y-\\[1px\\]:active { transform: none !important; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
