import DivisionPage from "@/components/DivisionPage";

const services = [
  { title: "Personal Protective Equipment", description: "Hard hats, safety boots, high-visibility clothing, and respiratory protection from leading global brands." },
  { title: "Fall Protection Systems", description: "Full-body harnesses, lanyards, anchor points, and self-retracting lifelines for working at height." },
  { title: "Fire Safety Equipment", description: "Fire extinguishers, suppression systems, alarm panels, and emergency lighting for facilities of all sizes." },
  { title: "Safety Signage & Barriers", description: "Custom OSHA and ISO-compliant signage, traffic control, and perimeter barriers for construction sites." },
  { title: "Gas Detection Systems", description: "Fixed and portable gas monitors for H2S, CO, LEL, and O2 detection in hazardous environments." },
  { title: "Training & Compliance", description: "Safety training programs, site audits, and compliance documentation for government and private contracts." },
];

const stats = [
  { value: "10,000+", label: "Workers Protected" },
  { value: "35+", label: "Safety Brands" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Emergency Supply" },
];

export default function SafetyPage() {
  return (
    <DivisionPage
      title="Health & Safety Products"
      subtitle="Division"
      description="Protecting Oman's workforce is our mission. Our Health & Safety division supplies comprehensive personal protective equipment, fire safety systems, gas detection, and site safety infrastructure to the nation's largest construction, oil & gas, and industrial projects. We don't just sell safety gear — we partner with clients to build cultures of safety that save lives."
      image="/images/alkhonji-safety.png.jpeg"
      services={services}
      stats={stats}
      ctaText="Get a Safety Quote"
    />
  );
}
