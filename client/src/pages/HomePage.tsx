import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Prerequisites from "@/components/Prerequisites";
import StepByStepGuide from "@/components/StepByStepGuide";
import DownloadSection from "@/components/DownloadSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Prerequisites />
        <StepByStepGuide />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
