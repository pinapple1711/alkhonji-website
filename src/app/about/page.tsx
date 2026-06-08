"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Award, Users, Target, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every project, every product, every interaction is executed with meticulous attention to detail.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We honor our commitments. Our word is our bond — with clients, partners, and employees.",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our team is our greatest asset. We invest in safety, training, and career growth for every employee.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Good enough is never enough. We pursue the highest standards in quality, safety, and service.",
  },
];

const milestones = [
  { year: "1934", title: "Foundation", desc: "Al Khonji begins as a small trading enterprise in the heart of Muscat, importing goods and building relationships across the Gulf." },
  { year: "1960", title: "Expansion", desc: "The company diversifies into construction materials and industrial supply, supporting Oman's early nation-building projects." },
  { year: "1980", title: "Engineering", desc: "Engineering Products & Services division launches, bringing precision instrumentation and valves to Oman's oil sector." },
  { year: "1995", title: "Electro-Mechanical", desc: "Full-scale MEP contracting and construction capabilities established, winning first major government facility contracts." },
  { year: "2000", title: "Oil & Auto", desc: "Oil & Auto Products division launches to serve the petroleum boom and growing automotive aftermarket." },
  { year: "2008", title: "Safety Division", desc: "Health & Safety Products division created in response to Oman's new workplace safety regulations and growing construction sector." },
  { year: "2024", title: "Future Ready", desc: "Five divisions, 500+ employees, and a digital-first strategy positioning Al Khonji for the next 90 years." },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#C2410C] font-[family-name:var(--font-jetbrains)] mb-4">
                About Us
              </p>
              <h1 className="text-hero font-bold text-white font-[family-name:var(--font-fraunces)] leading-[1.05]">
                Built on Trust.
                <br />
                Driven by Purpose.
              </h1>
              <p className="mt-6 text-lg text-[#E7E5E4] leading-relaxed">
                For over 90 years, Al Khonji has been a cornerstone of Oman's industrial landscape. What began as a modest trading house in 1934 is today one of the Sultanate's most respected diversified business groups — with five divisions, 500+ employees, and a presence in every critical sector of the economy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="01" text="OUR VALUES" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-12">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#FAF9F6] rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF7ED] mb-5">
                    <value.icon className="text-[#C2410C]" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#78716C] leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <SectionLabel number="02" text="HERITAGE" />
                <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-8">
                  Our Journey
                </h2>
                <p className="text-lg text-[#334155] leading-relaxed mb-8">
                  From a single trading license to a diversified industrial empire — this is the story of Al Khonji.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2410C] hover:gap-3 transition-all duration-200"
                >
                  Work With Us
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="relative pl-8 border-l-2 border-[#E7E5E4] space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-[#C2410C] ring-4 ring-[#FAF9F6]"></span>
                    <span className="text-sm font-medium text-[#C2410C] font-[family-name:var(--font-jetbrains)]">
                      {m.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-[#0F172A]">{m.title}</h3>
                    <p className="mt-1 text-sm text-[#334155] leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="03" text="LEADERSHIP" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-12">
              Guided by Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Mohammed Al Khonji", role: "Chairman", desc: "Third-generation leader guiding the group's strategic vision and community engagement." },
                { name: "Ahmed Al Khonji", role: "Managing Director", desc: "Oversees daily operations across all five divisions with a focus on operational excellence." },
                { name: "Said Al Balushi", role: "Group CFO", desc: "Manages financial strategy, capital allocation, and investor relations for the group." },
              ].map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-[#FAF9F6] rounded-lg p-8 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#E7E5E4] mx-auto mb-5 flex items-center justify-center">
                    <Users className="text-[#78716C]" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{person.name}</h3>
                  <p className="text-sm text-[#C2410C] font-medium mt-1">{person.role}</p>
                  <p className="text-sm text-[#78716C] mt-3 leading-relaxed">{person.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-bold text-white font-[family-name:var(--font-fraunces)] mb-8">
                Certified & Compliant
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Oman Chamber of Commerce", "Petroleum Development Oman Approved"].map((cert) => (
                  <span
                    key={cert}
                    className="inline-block px-5 py-2.5 rounded-full border border-[#334155] text-sm text-[#E7E5E4]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
