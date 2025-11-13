import React from "react";
import HeroSection from "../components/BlogsNews/HeroSection";
import MapCard from "../components/FootballMap/MapCard";
import BallieCoinsSection from "../components/FootballMap/BallieCoinsSection";
import { useTranslation } from "react-i18next";

const FootballMap = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-full max-w-screen-xl space-y-8 md:space-y-10 mt-8">
      <HeroSection
        badge={t("hero.map.badge")}
        title={
          <>
            {t("hero.map.title")}
          </>
        }
        description={t("hero.map.desc")}
        primaryCta={t("cta.downloadApp")}
        secondaryCta={t("cta.learnMore")}
      />
      <MapCard />
      <BallieCoinsSection />
    </div>
  );
};
export default FootballMap;
