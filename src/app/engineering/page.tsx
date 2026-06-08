import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: "Engineering Products & Services",
  description:
    "Precision valves, gauges, piping, and pumps for oil & gas, water, and power sectors. Serving Oman since 1980. 2,500+ products, 150+ industrial clients.",
  alternates: {
    canonical: "/engineering/",
  },
  openGraph: {
    title: "Engineering Products & Services | Al Khonji",
    description:
      "Precision valves, gauges, piping, and pumps for oil & gas, water, and power sectors. Serving Oman since 1980.",
    url: "/engineering/",
  },
};

const services = [
  { title: "Industrial Valves & Fittings", description: "Gate, globe, ball, and butterfly valves for high-pressure applications across oil, gas, and water infrastructure." },
  { title: "Precision Gauges & Instruments", description: "Pressure, temperature, and flow measurement instruments calibrated to international standards." },
  { title: "Piping Systems", description: "Carbon steel, stainless steel, and alloy piping solutions for industrial process lines." },
  { title: "Pump & Compressor Supply", description: "Centrifugal and positive displacement pumps, plus air compressor systems for critical operations." },
  { title: "Technical Consulting", description: "Engineering assessments, system design reviews, and material selection guidance for project teams." },
  { title: "Maintenance Kits", description: "Spare parts, seal kits, and preventive maintenance packages to minimize downtime." },
];

const stats = [
  { value: "2,500+", label: "Products in Catalog" },
  { value: "150+", label: "Industrial Clients" },
  { value: "40+", label: "Years Serving Oman" },
  { value: "12", label: "Global Suppliers" },
];

export default function EngineeringPage() {
  return (
    <DivisionPage
      title="Engineering Products & Services"
      subtitle="Division"
      description="Since 1980, our Engineering Products & Services division has been the backbone of Oman's industrial infrastructure. We supply precision-engineered components, instrumentation, and technical solutions to oil & gas, water treatment, power generation, and manufacturing sectors. Every product meets international standards and is backed by deep local expertise."
      image="/images/alkhonji-engineering.png.jpeg"
      services={services}
      stats={stats}
    />
  );
}
