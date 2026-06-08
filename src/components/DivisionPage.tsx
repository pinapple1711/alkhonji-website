"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SectionLabel from "./SectionLabel";

interface Service {
  title: string;
  description: string;
}

interface DivisionPageProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  services: Service[];
  stats: { value: string; label: string }[];
  ctaText?: string;
}

export default function DivisionPage({
  title,
  subtitle,
  description,
  image,
  services,
  stats,
  ctaText = "Contact This Division",
}: DivisionPageProps) {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <a
                href="/#divisions"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Divisions
              </a>
              <p className="text-sm uppercase tracking-[0.2em] text-[#C2410C] font-[family-name:var(--font-jetbrains)] mb-3">
                {subtitle}
              </p>
              <h1 className="text-h1 font-bold text-white font-[family-name:var(--font-fraunces)] max-w-3xl">
                {title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel number="01" text="OVERVIEW" />
                <h2 className="text-h2 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-6">
                  What We Do
                </h2>
                <p className="text-lg text-[#334155] leading-relaxed">
                  {description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#FAF9F6] rounded-lg p-8"
              >
                <h3 className="text-sm uppercase tracking-wider text-[#78716C] mb-6 font-[family-name:var(--font-jetbrains)]">
                  Division Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-[#C2410C] font-[family-name:var(--font-fraunces)]">
                        {stat.value}
                      </div>
                      <p className="text-sm text-[#78716C] mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="02" text="CAPABILITIES" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-[#C2410C] shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#78716C] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0F172A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-bold text-white font-[family-name:var(--font-fraunces)] mb-4">
                Ready to work together?
              </h2>
              <p className="text-[#78716C] mb-8 max-w-xl mx-auto">
                Reach out to our team for quotes, partnerships, or project inquiries.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-8 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200"
              >
                {ctaText}
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
