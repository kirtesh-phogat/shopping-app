import CardGallery from "../components/CardGallery";
import HeroSlider from "../components/HeroSlider";
import CategoriesSection from "../components/CategoriesSection";

const LandingPage = () => {
  return (
    <>
      <HeroSlider /> 
      <CategoriesSection />
      <CardGallery />
    </>
  );
};

export default LandingPage;
