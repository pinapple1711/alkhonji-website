import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Al Khonji",
  description:
    "Founded in 1934 in Muscat, Al Khonji is a diversified industrial group with five divisions and 500+ employees. 90 years of trust, heritage, and excellence in Oman.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Al Khonji — 90 Years of Trust & Heritage",
    description:
      "Founded in 1934 in Muscat, Al Khonji is a diversified industrial group with five divisions and 500+ employees.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
