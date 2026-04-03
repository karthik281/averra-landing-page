import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import ImpactSection from "./components/ImpactSection";
import WhoItsFor from "./components/WhoItsFor";
import CredibilitySection from "./components/CredibilitySection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ImpactSection />
      <WhoItsFor />
      <CredibilitySection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
