import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: "Electro-Mechanical & Construction",
  description:
    "MEP contracting, HVAC, and turnkey construction across Oman. 200+ projects completed, 5M+ sqm built, 100% on-time delivery.",
  alternates: {
    canonical: "/construction/",
  },
  openGraph: {
    title: "Electro-Mechanical & Construction | Al Khonji",
    description:
      "MEP contracting, HVAC, and turnkey construction across Oman. 200+ projects completed with 100% on-time delivery.",
    url: "/construction/",
  },
};

const services = [
  { title: "MEP Contracting", description: "Mechanical, electrical, and plumbing systems design, installation, and commissioning for commercial and industrial buildings." },
  { title: "Electro-Mechanical Installation", description: "HV/LV electrical infrastructure, transformer stations, and motor control centers for factories and plants." },
  { title: "HVAC Systems", description: "Climate control, ventilation, and air conditioning solutions tailored to Oman's extreme climate conditions." },
  { title: "Building Construction", description: "Turnkey construction of warehouses, office buildings, and industrial facilities from foundation to handover." },
  { title: "Infrastructure Works", description: "Roads, drainage, utilities, and site preparation for large-scale development projects." },
  { title: "Project Management", description: "Full project oversight including scheduling, cost control, quality assurance, and safety compliance." },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "5M+", label: "Sqm Built" },
  { value: "30+", label: "Years Experience" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function ConstructionPage() {
  return (
    <DivisionPage
      title="Electro-Mechanical & Construction"
      subtitle="Division"
      description="From the ground up, our Electro-Mechanical & Construction division delivers complex infrastructure projects across Oman. We combine deep MEP expertise with robust construction capabilities to build facilities that perform — warehouses, industrial plants, commercial complexes, and government buildings. Every project is delivered with military precision and a commitment to zero defects."
      image="/images/alkhonji-construction.png.jpeg"
      services={services}
      stats={stats}
      ctaText="Start Your Project"
    />
  );
}
