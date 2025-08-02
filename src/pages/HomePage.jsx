import AboutUsSection from "@/components/About";
import HeroSection from "../components/Hero";
import DestinationSlider from "../components/Popular";
import TopDestinationsCarousel from "../components/Packages";
import ReviewAndMonsoonSection from "../components/Tstimonials";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <DestinationSlider />
      <AboutUsSection />
      <TopDestinationsCarousel />
      <ReviewAndMonsoonSection />
      <Footer />
    </div>
  );
}

export default HomePage;
