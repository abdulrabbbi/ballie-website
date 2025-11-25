import React from "react";
import { useTranslation } from "react-i18next";
import {
  APP_PHONE_MOCK,
  GOOGLE_PLAY_BADGE,
  APPLE_STORE_BADGE,
} from "../../images";

const AppPromoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-transparent py-10 sm:py-14 md:py-18">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Card container */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#3a3a3a] shadow-[0_18px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
          {/* subtle vignette under content */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/[0.04] via-transparent to-black/25" />

          <div className="relative grid grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:px-10 md:py-12 lg:gap-14">
            {/* RIGHT on desktop, FIRST on mobile: content */}
            <div className="order-2 text-center md:order-1 md:text-left">
              <h3 className="text-lime-400 font-extrabold leading-tight text-[clamp(1.4rem,3.2vw,2.2rem)]">
                {t("appPromo.heading")}
              </h3>

              <p className="mt-3 md:mt-4 mx-auto max-w-xl text-[13px] sm:text-sm leading-relaxed text-gray-100/90">
                {t("appPromo.desc")}
              </p>

              {/* store badges */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <div className="flex flex-col">
                  <p className="mb-2 text-sm font-medium text-white">
                    {t("appPromo.downloadNow")}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {/* Apple Store */}
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                    >
                      <img
                        src={APPLE_STORE_BADGE}
                        alt="App Store"
                        className="h-6 w-6"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="leading-tight text-left">
                        <p className="text-[10px] text-gray-300">
                          {t("footer.download.on")}
                        </p>
                        <p className="text-sm font-medium">
                          {t("footer.download.appStore")}
                        </p>
                      </div>
                    </button>

                    {/* Google Play */}
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                    >
                      <img
                        src={GOOGLE_PLAY_BADGE}
                        alt="Google Play"
                        className="h-6 w-6"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="leading-tight text-left">
                        <p className="text-[10px] text-gray-300">
                          {t("footer.download.getItOn")}
                        </p>
                        <p className="text-sm font-medium">
                          {t("footer.download.googlePlay")}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT on desktop, SECOND on mobile: phone mockup */}
            <div className="order-1 md:order-2">
              <div className="relative mx-auto h-[230px] w-full max-w-[340px] sm:h-[270px] md:h-[320px] lg:h-[360px]">
                {/* soft glow behind phone */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(0,0,0,0.25), rgba(0,0,0,0) 70%)",
                    filter: "blur(6px)",
                  }}
                />
                <img
                  src={APP_PHONE_MOCK}
                  alt="Ballie Live app preview"
                  className="absolute inset-x-0 top-[8%] mx-auto h-[88%] w-auto rotate-[8deg] drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
