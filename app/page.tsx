import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Mechanics from "./components/Mechanics";
import Industries from "./components/Industries";
import Wallet from "./components/Wallet";
import Push from "./components/Push";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import FloatingCta from "./components/FloatingCta";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Steps />
        <Mechanics />
        <Industries />
        <Wallet />
        <Push />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <FloatingCta />
    </>
  );
}
