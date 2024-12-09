import AboutBrand from "@/app/page-components/About/AboutBrand.tsx";
import AboutFeatures from "@/app/page-components/About/AboutFeatures";
import AboutGetInTouch from "@/app/page-components/About/AboutGetInTouch";
import AboutSection from "@/app/page-components/About/AboutSection";
import AboutSignUp from "@/app/page-components/About/AboutSignUp";

const About = () => {
  return (
    <div className="relative mx-auto w-[390px] h-[3911px] md:w-[1440px] md:h-[2960px] bg-white">
      <AboutSection />
      <AboutFeatures />
      <AboutGetInTouch />
      <AboutBrand />
      <AboutSignUp />
    </div>
  );
};

export default About;