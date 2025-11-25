import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BlogsNewsHeroSection() {
  const { t } = useTranslation();

  const paragraphs = t("modules.blogsNews.paragraphs", { returnObjects: true });
  const title = t("modules.blogsNews.title");
  const cta = t("modules.blogsNews.cta");
  const badge = t("hero.blogs.badge", { defaultValue: "Blogs & News" });

  return (
    <section className="w-full bg-transparent text-white">
      <div className="relative isolate overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b0c0f] via-[#111319] to-[#0b0c0f] opacity-70"
          aria-hidden="true"
        />

        {/* Soft glow (slightly more central for a “content” feel) */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(163,255,0,0.16),_transparent_65%)] blur-3xl opacity-80"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-3xl mx-auto md:mx-0 px-0 sm:px-4 md:px-0 text-center md:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1 text-xs sm:text-sm font-semibold text-accent ring-1 ring-accent/40">
              {badge}
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-lime-400">
              {title}
            </h1>

            {/* Description paragraphs */}
            <div className="text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed space-y-3">
              {paragraphs.map((text, idx) => (
                <p key={`${idx}-${text}`}>{text}</p>
              ))}
            </div>

            {/* CTA button */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm sm:text-[15px] font-semibold text-black transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
