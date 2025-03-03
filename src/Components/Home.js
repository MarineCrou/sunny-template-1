import HeroSection from "./HomePage/HeroSection";
import Services from "./HomePage/Services";
import WhoWeAre from "./HomePage/WhoWeAre";
import CtaBanner from "./HomePage/CtaBanner";
import Footer from "./Footer";
import BlogSection from "./HomePage/BlogSection";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <CtaBanner />
      <WhoWeAre />
      <BlogSection />
      <Footer />
    </>
  );
}
