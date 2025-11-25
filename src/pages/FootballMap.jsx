import React from "react";
import HeroSection from "../components/FootballMap/HeroSection";
import MapCard from "../components/FootballMap/MapCard";

const FootballMap = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl space-y-8 md:space-y-10">
      <HeroSection />
      <MapCard />
    </div>
  );
};
export default FootballMap;
