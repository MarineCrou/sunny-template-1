import HeroSection from "./HomePage/HeroSection";
import Services from "./HomePage/Services";
import WhoWeAre from "./HomePage/WhoWeAre";
import CtaBanner from "./HomePage/CtaBanner";
import BlogSection from "./HomePage/BlogSection";
import Faq from "./HomePage/Faq";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <CtaBanner />
      <WhoWeAre />
      <Faq />
      <Contact />
      <BlogSection />
    </>
  );
}
