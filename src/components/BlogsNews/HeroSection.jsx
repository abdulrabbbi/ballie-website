import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection({
  badge = "Blogs and News",
  title = (
    <>
      Where football <br />
      <span className="text-accent">brings people together.</span>
    </>
  ),
  description = `Ballie Live is for everyone who doesn’t just want to watch football – but truly experience it. 
Discover where your favourite club is playing, follow matches in real time and find places where football comes alive, 
whether you’re at home, at the pub with friends or on the go.`,
  primaryCta = "Download the Ballie Live App",
  secondaryCta = "Learn more",
}) {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#1b1d1a] via-[#222421] to-[#1b1d1a] rounded-[2rem] text-center text-gray-300 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Tag */}
        <div className="inline-block bg-accent text-black text-sm font-medium px-4 py-1 rounded-full">
          {badge}
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-accent">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-accent text-black font-medium px-4 py-2 rounded-md hover:bg-accent/90 transition-all">
            {primaryCta} <ArrowRight size={16} />
          </button>
          <button className="text-white font-medium hover:text-accent transition-all">
            {secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
