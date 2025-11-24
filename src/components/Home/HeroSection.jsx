import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { firstOne, secondOne, thirdOne, fourthOne } from "../../images";
import "./HeroSection.css";

const CARD_INTERVAL = 3200; // ~5.2s between images

// For now: random football action shots (replace with your own CDN later)
const FOOTBALL_IMAGES = [firstOne, secondOne, thirdOne, fourthOne];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const { t } = useTranslation();

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

  // Looping card animation (right side)
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || FOOTBALL_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % FOOTBALL_IMAGES.length;
        setPrevIndex(current);
        return next;
      });
    }, CARD_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const total = FOOTBALL_IMAGES.length;

  return (
    <section
      ref={rootRef}
      className="hero-shell relative w-full overflow-hidden bg-black text-white"
      aria-labelledby="hero-title"
    >
      {/* Background (decorative) */}
      <div aria-hidden className="absolute inset-0">
        {/* <img
          src={HERO_BG}
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-center lg:object-right"
          loading="eager"
          fetchPriority="high"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1280px] 2xl:max-w-[1440px]">
        {/* Grid:
            - 1 col on mobile
            - 12-col on lg+
        */}
        <div
          className={[
            "grid items-center gap-8 sm:gap-10",
            "py-14 sm:py-20 lg:py-28",
            "grid-cols-1 lg:grid-cols-12",
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

              {/* Title */}
              <h1
                id="hero-title"
                className="text-balance  font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl 2xl:text-[clamp(3rem,3.8vw,4.25rem)]"
              >
                {t("hero.home.title")}
              </h1>

              {/* Supporting copy */}
              <p className="mt-5 max-w-prose text-pretty text-[15px] sm:text-[17px] leading-relaxed text-gray-200">
                {t("hero.home.desc")}
              </p>

              {/* CTAs */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
                <PrimaryCta href="#download" aria-label={t("cta.downloadApp")}>
                  <span>{t("cta.downloadApp")}</span>
                  <ArrowRight size={18} aria-hidden />
                </PrimaryCta>

                <SecondaryCta
                  href="#learn-more"
                  aria-label={t("cta.learnMore")}
                >
                  {t("cta.learnMore")}
                </SecondaryCta>
              </div>

              {/* Stats */}
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
                    <dt className="text-[11px] sm:text-xs text-gray-300">
                      {it.k}
                    </dt>
                    <dd className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      {it.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: animated card panel (like your screenshot) */}
          <div
            className="hero-right hidden lg:col-span-5 lg:block xl:col-span-6 2xl:col-span-6"
            data-animate
            data-anim-type="scale-in"
            data-anim-delay="100"
          >
            <div aria-hidden>
              {/* Panel area */}
              <div className="relative aspect-[5/6] xl:aspect-[4/5] 2xl:aspect-[16/10] flex items-center justify-center">
                {/* Background shards behind card */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="hero-panel-shard hero-panel-shard--tl" />
                  <div className="hero-panel-shard hero-panel-shard--tr" />
                  <div className="hero-panel-shard hero-panel-shard--bl" />
                  <div className="hero-panel-shard hero-panel-shard--br" />
                </div>

                {/* Card stack */}
                <div className="relative w-[82%] max-w-md aspect-[3/4]">
                  {FOOTBALL_IMAGES.map((src, index) => {
                    const isActive = index === activeIndex;
                    const isPrev = index === prevIndex;

                    let state = "idle";
                    if (isActive) state = "active";
                    else if (isPrev) state = "prev";

                    return (
                      <div
                        key={src}
                        className="hero-card"
                        data-state={state}
                        style={{
                          zIndex: isActive ? 30 : isPrev ? 20 : 10,
                        }}
                      >
                        <div className="hero-card-inner">
                          <img
                            src={src}
                            alt="Football action"
                            className="hero-card-img"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          <div className="hero-card-overlay" />

                          {/* HUD at bottom (LIVE + score) */}
                          <div className="hero-card-meta">
                            <div className="hero-card-pill">
                              <span className="hero-card-pill-dot" />
                              <span className="hero-card-pill-text">
                                LIVE • PREMIER NIGHT
                              </span>
                            </div>
                            <div className="hero-card-score">
                              <span className="hero-card-team hero-card-team--home">
                                BLX
                              </span>
                              <span className="hero-card-score-value">
                                3 : 2
                              </span>
                              <span className="hero-card-team hero-card-team--away">
                                CTY
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
