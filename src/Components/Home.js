import HeroSection from "./HomePage/HeroSection";
import Services from "./HomePage/Services";
import WhoWeAre from "./HomePage/WhoWeAre";
import CtaBanner from "./HomePage/CtaBanner";
import BlogSection from "./HomePage/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <CtaBanner />
      <WhoWeAre />
      <BlogSection />
    </>
  );
}
