import React from "react";
import { useTranslation } from "react-i18next";
import { FOLLOW_LEFT_PLAYER, FOLLOW_RIGHT_PLAYER } from "../../images";

const FollowClubCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-transparent py-10 sm:py-12 md:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Lime banner acts as the anchor for the side players */}
        <div className="relative mx-auto max-w-5xl rounded-[28px] bg-lime-400 px-5 py-7 sm:px-10 sm:py-9 md:px-14 md:py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* Players hugging the card edges, perfectly aligned */}
          <img
            src={FOLLOW_LEFT_PLAYER}
            alt="Player left"
            className="
              pointer-events-none select-none
              absolute left-0 -translate-x-1/2
              bottom-[-18px] sm:bottom-[-22px] md:bottom-[-26px]
              h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]
              object-contain
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]
              z-10
            "
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FOLLOW_RIGHT_PLAYER}
            alt="Player right"
            className="
              pointer-events-none select-none
              absolute right-0 translate-x-1/2
              bottom-[-18px] sm:bottom-[-22px] md:bottom-[-26px]
              h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]
              object-contain
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]
              z-10
            "
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          {/* watermark circle (subtle, like the mock) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-2 top-1/2 h-[160%] w-[55%] -translate-y-1/2 rounded-full opacity-[0.18]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,0,0,0.25), rgba(0,0,0,0) 70%)",
              maskImage:
                "radial-gradient(circle at 40% 50%, black 58%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(circle at 40% 50%, black 58%, transparent 65%)",
              filter: "blur(2px)",
            }}
          />

          <h3 className="relative z-20 text-black/90 text-[clamp(1.1rem,2.4vw,1.6rem)] font-semibold">
            {t("follow.heading1")}
          </h3>
          <h3 className="relative z-20 text-black/90 text-[clamp(1.1rem,2.4vw,1.6rem)] font-semibold -mt-1">
            {t("follow.heading2")}
          </h3>

          <p className="relative z-20 mx-auto mt-3 max-w-3xl text-[13px] sm:text-sm leading-relaxed text-black/75">
            {t("follow.desc")}
          </p>

          <button className="relative z-20 mt-5 inline-flex items-center justify-center rounded-md bg-black px-5 py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-black/90">
            {t("cta.downloadApp")}
          </button>
        </div>

        {/* Spacer so players don't overlap next section on small screens */}
        <div className="h-24 sm:h-28 md:h-32" />
      </div>
    </section>
  );
};

export default FollowClubCTA;
