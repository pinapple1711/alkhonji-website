import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Al Khonji — Building Oman Since 1934",
  description:
    "One of Oman's most established industrial groups. Engineering, construction, safety, and supply solutions for over 90 years. Five divisions. Countless projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Al Khonji — Building Oman Since 1934",
    description:
      "Engineering Products & Services, Health & Safety, Electro-Mechanical & Construction, Oil & Auto Products.",
    url: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Al Khonji",
  alternateName: "Mohammed & Ahmed Al Khonji",
  url: "https://alkhonji.com",
  logo: "https://alkhonji.com/images/Alkhonji%20logo.jpg",
  description:
    "One of Oman's most established industrial groups. Engineering, construction, safety, and supply solutions for over 90 years.",
  foundingDate: "1934",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Khonji Building, Al Khuwair",
    addressLocality: "Muscat",
    addressRegion: "Muscat Governorate",
    addressCountry: "OM",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+968-1234-5682",
      contactType: "General Inquiries",
      email: "info@alkhonji.com",
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+968-1234-5678",
      contactType: "Sales",
      email: "sales@alkhonji.com",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  sameAs: ["https://www.linkedin.com/company/alkhonji"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Al Khonji",
  image: "https://alkhonji.com/images/alkhonji-hero.png.jpeg",
  url: "https://alkhonji.com",
  telephone: "+968-1234-5682",
  email: "info@alkhonji.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Khonji Building, Al Khuwair",
    addressLocality: "Muscat",
    addressRegion: "Muscat Governorate",
    addressCountry: "OM",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.5859,
    longitude: 58.4059,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessSchema]),
        }}
      />
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
