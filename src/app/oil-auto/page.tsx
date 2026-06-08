import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: "Oil & Auto Products",
  description:
    "Industrial lubricants, automotive fluids, and oilfield chemicals. API and ACEA certified products for Oman's energy and transportation sectors.",
  alternates: {
    canonical: "/oil-auto/",
  },
  openGraph: {
    title: "Oil & Auto Products | Al Khonji",
    description:
      "Industrial lubricants, automotive fluids, and oilfield chemicals for Oman's energy sector.",
    url: "/oil-auto/",
  },
};

const services = [
  { title: "Industrial Lubricants", description: "Hydraulic, gear, compressor, and turbine oils formulated for extreme heat and heavy-duty Omani operations." },
  { title: "Automotive Products", description: "Motor oils, coolants, brake fluids, and grease for passenger vehicles, trucks, and heavy equipment fleets." },
  { title: "Oilfield Chemicals", description: "Drilling fluids, production chemicals, and corrosion inhibitors for upstream oil & gas operations." },
  { title: "Fuel Storage Solutions", description: "Above-ground and underground tank systems, fuel dispensing equipment, and leak detection systems." },
  { title: "Fleet Maintenance", description: "Bulk supply agreements, scheduled deliveries, and on-site fluid analysis for transportation fleets." },
  { title: "Technical Support", description: "Oil analysis labs, lubrication audits, and product recommendations from certified petroleum engineers." },
];

const stats = [
  { value: "50+", label: "Product Lines" },
  { value: "8M+", label: "Litres Supplied" },
  { value: "25", label: "Years in Market" },
  { value: "100+", label: "Fleet Clients" },
];

export default function OilAutoPage() {
  return (
    <DivisionPage
      title="Oil & Auto Products"
      subtitle="Division"
      description="Powering Oman's energy and transportation sectors since the millennium, our Oil & Auto Products division is the trusted supplier of industrial lubricants, automotive fluids, and oilfield chemicals. We serve petroleum companies, fleet operators, mining operations, and automotive workshops with products that meet or exceed API, ACEA, and OEM specifications."
      image="/images/alkhonji-oil-auto.png.jpeg"
      services={services}
      stats={stats}
      ctaText="Request a Supply Quote"
    />
  );
}
