import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PartnerSection } from "@/components/PartnerSection";
import { BrandGrid } from "@/components/BrandGrid";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PartnerSection />
        <BrandGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
