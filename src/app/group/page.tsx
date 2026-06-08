import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";

export const metadata: Metadata = {
  title: "Mohammed & Ahmed Al Khonji — Group Holding",
  description:
    "Strategic governance and shared services for the Al Khonji Group's five operating divisions. Corporate headquarters in Muscat, Oman.",
  alternates: {
    canonical: "/group/",
  },
  openGraph: {
    title: "Mohammed & Ahmed Al Khonji — Group Holding | Al Khonji",
    description:
      "Strategic governance and shared services for the Al Khonji Group's five operating divisions.",
    url: "/group/",
  },
};

const services = [
  { title: "Strategic Governance", description: "Board-level oversight, corporate strategy, and long-term planning guiding all five operating divisions." },
  { title: "Financial Management", description: "Capital allocation, investment planning, treasury operations, and financial reporting for group operations." },
  { title: "Legal & Compliance", description: "Corporate governance, contract review, regulatory compliance, and risk management across all entities." },
  { title: "Human Resources", description: "Talent acquisition, leadership development, compensation strategy, and employee relations at group level." },
  { title: "Business Development", description: "New market entry, partnership negotiations, M&A opportunities, and diversification strategy." },
  { title: "Corporate Communications", description: "Brand stewardship, stakeholder relations, public affairs, and community engagement programs." },
];

const stats = [
  { value: "90+", label: "Years in Operation" },
  { value: "5", label: "Active Divisions" },
  { value: "500+", label: "Employees" },
  { value: "100%", label: "Omani Owned" },
];

export default function GroupPage() {
  return (
    <DivisionPage
      title="Mohammed & Ahmed Al Khonji"
      subtitle="Holding Company"
      description="Mohammed & Ahmed Al Khonji is the corporate holding company that anchors the Al Khonji Group. Established to provide strategic governance and shared services across our five operating divisions, the Group office ensures financial discipline, operational excellence, and a unified brand promise. From the first trading license in 1934 to today's diversified industrial group, the holding company preserves our founders' values while steering growth into Oman's next chapter."
      image="/images/alkhonji-group.png.jpeg"
      services={services}
      stats={stats}
      ctaText="Contact the Group Office"
    />
  );
}
