import React from "react";
import CategorySection from "./categorySection";
import BrandSegments from "./brandSegments";
import DealOfTheDay from "./dealOfTheDay";
import PromoBanner from "./promo-banner";

const Home = () => {
  return (
    <>
      <CategorySection />
      <BrandSegments />
      <DealOfTheDay />
      <PromoBanner />
    </>
  );
};

export default Home;
