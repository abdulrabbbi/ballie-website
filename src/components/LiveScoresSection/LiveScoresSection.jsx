import React from "react";
import { Activity, Clock3, Bell, PlayCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LiveScoresSection() {
  const { t } = useTranslation();
  const paragraphs = t("modules.liveScores.paragraphs", { returnObjects: true });
  const title = t("modules.liveScores.title");
  const cta = t("modules.liveScores.cta");
  return (
    <section className="w-full bg-transparent text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT – your copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/30">
              <Activity size={16} />
              Live Scores
            </div>

            <h2 className="mt-3 text-lime-400 font-extrabold leading-tight text-[clamp(1.6rem,3.2vw,2.6rem)]">
              {title}
            </h2>

            {/* keep your text */}
            <div className="mt-3 space-y-3 text-sm sm:text-[15px] text-gray-300 max-w-prose">
              {paragraphs.map((text, idx) => (
                <p key={`${idx}-${text}`}>{text}</p>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-5">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {cta}
                <ArrowRight size={16} />
              </a>
            </div>

            {/* small row reinforcing the module */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Clock3 size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Real-time updates
                  </p>
                  <p className="text-[11px] text-gray-400">Every kick, live.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Bell size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Key moments
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Goals, cards, drama.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <PlayCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    One clean overview
                  </p>
                  <p className="text-[11px] text-gray-400">
                    All matches, one screen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – live scoreboard / animation card */}
          <div className="relative">
            {/* glow behind card */}
            <div
              className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_top,_rgba(190,242,100,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.3),_transparent_55%)] opacity-70 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl bg-gradient-to-br from-[#151515] via-black to-[#111a10] p-6 sm:p-7 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.7)] transform transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]">
              {/* header */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Tonight’s live matches
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Updated every few seconds in Ballie Live
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-red-500/15 px-3 py-1 text-[11px] font-semibold text-red-400">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* matches */}
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5">
                  <div>
                    <p className="font-semibold text-white">
                      Madrid <span className="text-gray-400">vs</span> City
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Champions League · 73’
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">
                      2&nbsp;–&nbsp;1
                    </p>
                    <p className="text-[11px] text-lime-400 font-semibold">
                      Goal 68’
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5">
                  <div>
                    <p className="font-semibold text-white">
                      Inter <span className="text-gray-400">vs</span> Milan
                    </p>
                    <p className="text-[11px] text-gray-400">Serie A · 41’</p>
                  </div>
                  <p className="text-lg font-bold text-white">
                    0&nbsp;–&nbsp;0
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5">
                  <div>
                    <p className="font-semibold text-white">
                      Paris <span className="text-gray-400">vs</span> Marseille
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Ligue 1 · kicks off in 20’
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold text-gray-300">
                    Upcoming
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400">
                Follow every match in real time, keep track of multiple leagues,
                and never miss a goal — all inside the Ballie Live app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
