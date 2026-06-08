import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at Al Khonji",
  description:
    "Join one of Oman's most established industrial groups. Competitive salaries, training budgets, and growth across five divisions. Send your CV today.",
  alternates: {
    canonical: "/careers/",
  },
  openGraph: {
    title: "Careers at Al Khonji — Build Your Future in Oman",
    description:
      "Join one of Oman's most established industrial groups. Competitive salaries, training budgets, and growth across five divisions.",
    url: "/careers/",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
