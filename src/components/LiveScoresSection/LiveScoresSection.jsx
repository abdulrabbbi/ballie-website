import React from "react";
import { Activity, Clock3, Bell, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LiveScoresSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Activity size={22} strokeWidth={1.8} />,
      title: t(
        "liveScores.features.realtime.title",
        "Follow every match in real time"
      ),
      desc: t(
        "liveScores.features.realtime.desc",
        "See instantly who scores, assists or takes the lead the moment it happens."
      ),
    },
    {
      icon: <Clock3 size={22} strokeWidth={1.8} />,
      title: t("liveScores.features.overview.title", "One clean overview"),
      desc: t(
        "liveScores.features.overview.desc",
        "Track multiple games at once without switching apps or channels."
      ),
    },
    {
      icon: <Bell size={22} strokeWidth={1.8} />,
      title: t("liveScores.features.stayNotified.title", "Stay in the game"),
      desc: t(
        "liveScores.features.stayNotified.desc",
        "Wherever you are, Ballie Live keeps you connected to every key moment."
      ),
    },
  ];

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
          {/* LEFT: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/30">
              <Activity size={16} />
              {t("liveScores.badge", "Live Scores")}
            </div>

            <h2 className="mt-3 text-lime-400 font-extrabold leading-tight text-[clamp(1.6rem,3.2vw,2.6rem)]">
              {t("liveScores.title", "Live Scores – Stay in the game")}
            </h2>

            <p className="mt-3 text-sm sm:text-[15px] text-gray-300 max-w-prose">
              {t(
                "liveScores.intro",
                "With Live Scores from Ballie Live, you never miss a moment. Follow every match in real time and see instantly who scores or takes the lead — all in one clean overview."
              )}
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-lime-400">{f.icon}</div>
                  <div>
                    <p className="text-sm sm:text-[15px] font-semibold text-white">
                      {f.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm sm:text-[15px] text-gray-300">
              {t(
                "liveScores.closing",
                "Wherever you are, Ballie Live keeps you connected to the game."
              )}
            </p>

            <div className="mt-7">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {t("cta.downloadApp", "Download the Ballie Live App")}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT: visual card */}
          <div className="rounded-2xl bg-[#2a2a2a]/80 p-6 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
            <div className="rounded-xl bg-gradient-to-br from-black/5 via-black/40 to-black/70 p-5 sm:p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                    {t("liveScores.card.title", "Tonight’s matches")}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {t(
                      "liveScores.card.subtitle",
                      "Updated live in Ballie Live"
                    )}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-red-500/15 px-2 py-0.5 text-[11px] font-semibold text-red-400">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                  {t("liveScores.card.live", "LIVE")}
                </span>
              </div>

              {/* Matches list */}
              <div className="space-y-3">
                <div className="rounded-lg bg-white/5 px-3 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Real Madrid <span className="text-gray-400">vs</span>{" "}
                      Barcelona
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {t("liveScores.card.league", "La Liga • 68’")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white">
                      2&nbsp;–&nbsp;1
                    </p>
                    <span className="text-[11px] text-lime-400 font-semibold">
                      {t("liveScores.card.lastEvent", "Goal 66’")}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/5 px-3 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Inter <span className="text-gray-400">vs</span> Milan
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {t("liveScores.card.league2", "Serie A • 41’")}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-white">
                    0&nbsp;–&nbsp;0
                  </p>
                </div>

                <div className="rounded-lg bg-white/5 px-3 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      PSG <span className="text-gray-400">vs</span> Marseille
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {t("liveScores.card.league3", "Ligue 1 • Starts in 20’")}
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-gray-300">
                    {t("liveScores.card.upcoming", "Upcoming")}
                  </p>
                </div>
              </div>

              <p className="pt-1 text-[11px] text-gray-400">
                {t(
                  "liveScores.card.footer",
                  "All scores and key moments in one clean overview — live inside the Ballie Live app."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
