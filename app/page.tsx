import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FleetSection } from "@/components/fleet-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <FleetSection />
      </div>
      <Footer />
    </main>
  );
}
