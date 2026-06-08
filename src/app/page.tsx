import NavBar from "@/components/NavBar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import StatsBar from "@/sections/StatsBar";
import Divisions3DScroll from "@/sections/Divisions3DScroll";
import LegacySection from "@/sections/LegacySection";
import PartnersStrip from "@/sections/PartnersStrip";
import CareersCTA from "@/sections/CareersCTA";
import ContactCTA from "@/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <Divisions3DScroll />
        <LegacySection />
        <PartnersStrip />
        <CareersCTA />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
