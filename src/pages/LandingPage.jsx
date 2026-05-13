import React from "react";
import CardGallery from "../components/CardGallery";
import HeroSlider from "../components/HeroSlider";

const LandingPage = () => {
  return (
    <>
      <HeroSlider />
      <h1 className="text-3xl">LandingPage</h1>
      <CardGallery />
    </>
  );
};

export default LandingPage;
