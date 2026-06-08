"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Banknote,
  Calendar,
  Stethoscope,
  Briefcase,
  Inbox,
} from "lucide-react";

const benefits = [
  { icon: Banknote, title: "Competitive Salary", desc: "Market-leading compensation reviewed annually against Oman benchmarks." },
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical, dental, and vision coverage for you and dependents." },
  { icon: GraduationCap, title: "Training Budget", desc: "Annual OMR 500 professional development allowance per employee." },
  { icon: Calendar, title: "Generous Leave", desc: "30 days annual leave plus public holidays and 10 days sick leave." },
  { icon: Stethoscope, title: "Safety First", desc: "Free PPE, annual health screenings, and mental wellness programs." },
  { icon: Briefcase, title: "Career Growth", desc: "Clear promotion pathways and internal mobility across all five divisions." },
];

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/alkhonji-careers.png.jpeg"
              alt="Al Khonji team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/30" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#C2410C] font-[family-name:var(--font-jetbrains)] mb-3">
                Careers
              </p>
              <h1 className="text-hero font-bold text-white font-[family-name:var(--font-fraunces)] leading-[1.05] max-w-3xl">
                Build Your Future With Us
              </h1>
              <p className="mt-4 text-lg text-[#E7E5E4] max-w-xl">
                Join one of Oman&apos;s most established industrial groups. We invest in our people, celebrate craftsmanship, and build careers that last.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="01" text="WHY AL KHONJI" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-12">
              Benefits & Perks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#FAF9F6] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <b.icon className="text-[#C2410C] mb-4" size={28} />
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#78716C] leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles — Placeholder */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="02" text="OPEN ROLES" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-4">
              Current Opportunities
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-12 md:p-16 text-center shadow-sm"
            >
              <div className="mx-auto max-w-lg">
                <div className="w-16 h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center mx-auto mb-6">
                  <Inbox className="text-[#C2410C]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  No Open Positions at This Time
                </h3>
                <p className="text-[#78716C] leading-relaxed mb-8">
                  We are not actively hiring right now, but we are always interested in meeting talented people. Send us your CV and we will reach out when a suitable role opens up.
                </p>
                <a
                  href="mailto:careers@alkhonji.com"
                  className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-8 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors"
                >
                  Send Your CV
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture CTA */}
        <section className="py-20 md:py-28 bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-h1 font-bold text-white font-[family-name:var(--font-fraunces)] mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-[#E7E5E4] leading-relaxed mb-6">
                  At Al Khonji, we believe great work happens when people feel safe, valued, and challenged. Our culture blends the discipline of a 90-year-old institution with the energy of a team building for the future.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Flat hierarchy — your voice matters regardless of title",
                    "Friday team lunches and quarterly recognition events",
                    "Internal mentorship program pairing seniors with new hires",
                    "Active CSR participation in Omani community projects",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#E7E5E4]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:careers@alkhonji.com"
                  className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-8 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors"
                >
                  Send Your CV
                  <ArrowRight size={18} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-80 lg:h-96 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/alkhonji-careers.png.jpeg"
                  alt="Al Khonji team culture"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
