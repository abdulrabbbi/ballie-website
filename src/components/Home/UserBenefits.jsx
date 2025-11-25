import React from "react";
import { useTranslation } from "react-i18next";
import { Wifi, MessageSquare, Presentation, Rss } from "lucide-react";
import { USER_BENEFITS_PLAYERS } from "../../images";

const UserBenefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <Wifi size={34} strokeWidth={1.6} />,
      title: t("userBenefits.items.0.title"),
      desc: t("userBenefits.items.0.desc"),
    },
    {
      icon: <MessageSquare size={34} strokeWidth={1.6} />,
      title: t("userBenefits.items.1.title"),
      desc: t("userBenefits.items.1.desc"),
    },
    {
      icon: <Presentation size={34} strokeWidth={1.6} />,
      title: t("userBenefits.items.2.title"),
      desc: t("userBenefits.items.2.desc"),
    },
    {
      icon: <Rss size={34} strokeWidth={1.6} />,
      title: t("userBenefits.items.3.title"),
      desc: t("userBenefits.items.3.desc"),
    },
  ];

  return (
    <section className="relative mx-auto mt-16 w-full max-w-7xl overflow-hidden rounded-[28px] bg-black px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT: players with lime background shape behind */}
        <div className="relative flex items-end justify-center md:justify-start">
          {/* lime angled band ONLY behind the players */}
          <div
            aria-hidden="true"
            className="absolute -left-10 sm:-left-14 md:-left-16 top-1/2 -translate-y-1/2 h-[115%] w-[125%] -z-10"
            style={{
              clipPath:
                "polygon(0% 28%, 58% 0%, 74% 12%, 80% 26%, 48% 52%, 0% 84%)",
              background:
                "linear-gradient(135deg, #b4ff39 0%, #9aef22 40%, #79d300 100%)",
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.55))",
            }}
          />
          {/* rounded lime cap to mimic the curved tip */}
          <div
            aria-hidden="true"
            className="absolute left-[60%] top-[42%] h-24 w-24 sm:h-28 sm:w-28 -z-10"
            style={{
              borderRadius: "9999px",
              background:
                "radial-gradient(closest-side, #a6f22a 70%, transparent)",
              transform: "rotate(-18deg)",
              filter: "blur(1px)",
            }}
          />
          {/* soft lime glow under feet */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] bottom-6 h-36 w-56 -z-10"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 60%, rgba(180,255,57,0.35) 0%, rgba(180,255,57,0.0) 70%)",
              filter: "blur(2px)",
            }}
          />

          <img
            src={USER_BENEFITS_PLAYERS}
            alt="Football players"
            className="w-[92%] sm:w-[85%] md:w-[90%] lg:w-[95%] max-w-[640px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* RIGHT: heading, paragraph, cards */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full md:max-w-[520px] lg:max-w-[560px] text-center md:text-left">
            <h2 className="mb-3 text-lime-400 font-extrabold leading-tight text-[clamp(1.6rem,3.2vw,2.6rem)]">
              Ballie For You – Where football brings people together
            </h2>
            <div className="mx-auto md:mx-0 space-y-3 text-gray-300 text-sm sm:text-[15px]">
              <p>
                Born from a passion for the beautiful game, Ballie Live is the
                platform for everyone who doesn’t just want to watch football —
                but truly experience it. Whether you’re at home, at the pub with
                friends, or on the go, Ballie Live brings fans, clubs, and
                venues together in one app. Find where your favourite club is
                playing live, follow matches in real time, and discover places
                where football comes alive.
              </p>
              <p>
                And while you explore and interact, you can earn Ballie Coins
                through daily logins, sharing on socials or inviting a friend.
                Ballie Live connects people through their shared love for
                football and brings stadium energy straight to your screen —
                anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="mt-8 grid w-full md:max-w-[560px] grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#2a2a2a]/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#323232]/90 transition relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-lime-400/10 blur-xl"
                />
                <div className="text-lime-400 mb-3 flex items-center justify-center md:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-lime-400 text-sm sm:text-base font-semibold mb-2 text-center md:text-left">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-[13px] text-center md:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* depth vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-black/35 via-transparent to-black/45" />
    </section>
  );
};

export default UserBenefits;
