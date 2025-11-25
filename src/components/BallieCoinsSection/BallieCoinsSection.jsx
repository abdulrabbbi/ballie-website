import React from "react";
import { Coins, LogIn, Share2, UserPlus, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BallieCoinsSection() {
  const { t } = useTranslation();
  const paragraphs = t("modules.coins.paragraphs", { returnObjects: true });
  const title = t("modules.coins.title");
  const cta = t("modules.coins.cta");
  return (
    <section className="w-full bg-transparent text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT – Text / Story */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/30">
              <Coins size={16} />
              Ballie Coins
            </div>

            <h2 className="mt-3 text-lime-400 font-extrabold leading-tight text-[clamp(1.6rem,3.2vw,2.6rem)]">
              {title}
            </h2>

            {/* Original copy */}
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

            {/* Small “how you earn” row to match the text */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <LogIn size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Daily login
                  </p>
                  <p className="text-[11px] text-gray-400">+10 coins</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Share2 size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Share on socials
                  </p>
                  <p className="text-[11px] text-gray-400">+25 coins</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <UserPlus size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Invite a friend
                  </p>
                  <p className="text-[11px] text-gray-400">+50 coins</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Animated / Visual Card */}
          <div className="relative">
            {/* Soft glow behind the card */}
            <div
              className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_top,_rgba(190,242,100,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.3),_transparent_55%)] opacity-70 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl bg-gradient-to-br from-[#151515] via-black to-[#111a10] p-6 sm:p-7 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.7)] transform transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent animate-pulse">
                    <Coins size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Your Ballie Coins
                    </p>
                    <p className="text-lg font-bold text-white">1,280</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  Active streak · 7 days
                </span>
              </div>

              {/* Progress / meter */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span>Next reward</span>
                  <span>+200 coins</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-emerald-600 transition-[width] duration-700" />
                </div>
                <p className="text-[11px] text-gray-400">
                  Complete 3 more actions today to unlock a profile theme
                  upgrade.
                </p>
              </div>

              {/* Earn events list */}
              <div className="mt-5 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                    <span className="text-gray-100">Match night check-in</span>
                  </div>
                  <span className="font-semibold text-lime-400">+40</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400/70" />
                    <span className="text-gray-100">Shared highlight clip</span>
                  </div>
                  <span className="font-semibold text-lime-400">+20</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400/50" />
                    <span className="text-gray-100">Friend joined Ballie</span>
                  </div>
                  <span className="font-semibold text-lime-400">+60</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400">
                Every action in Ballie Live turns into Ballie Coins you can use
                to personalise, unlock discounts and power up your game
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
