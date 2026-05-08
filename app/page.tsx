import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Steps from "./components/Steps";
import Mechanics from "./components/Mechanics";
import Wallet from "./components/Wallet";
import Push from "./components/Push";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <VideoSection videoId="Zd89JuBEB2E" isShort />
        <Steps />
        <Mechanics />
        <Wallet />
        <Push />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
