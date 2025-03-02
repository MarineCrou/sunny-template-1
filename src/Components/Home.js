import BlogDisplay from "./HomePage/BlogDisplay";
import HeroSection from "./HomePage/HeroSection";
import Services from "./HomePage/Services";
import WhoWeAre from "./HomePage/WhoWeAre";
import CtaBanner from "./HomePage/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <CtaBanner />
      <WhoWeAre />
      <BlogDisplay />
    </>
  );
}
