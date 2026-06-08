"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Heart,
  GraduationCap,
  Banknote,
  Calendar,
  Stethoscope,
} from "lucide-react";

const benefits = [
  { icon: Banknote, title: "Competitive Salary", desc: "Market-leading compensation reviewed annually against Oman benchmarks." },
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical, dental, and vision coverage for you and dependents." },
  { icon: GraduationCap, title: "Training Budget", desc: "Annual OMR 500 professional development allowance per employee." },
  { icon: Calendar, title: "Generous Leave", desc: "30 days annual leave plus public holidays and 10 days sick leave." },
  { icon: Stethoscope, title: "Safety First", desc: "Free PPE, annual health screenings, and mental wellness programs." },
  { icon: Briefcase, title: "Career Growth", desc: "Clear promotion pathways and internal mobility across all five divisions." },
];

interface Job {
  id: string;
  title: string;
  division: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "eng-001",
    title: "Senior Mechanical Engineer",
    division: "Engineering Products & Services",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the design and specification of industrial valve and piping systems for major oil & gas clients. You'll work directly with procurement teams and international suppliers to deliver compliant, cost-effective engineering solutions.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "5+ years in industrial product engineering or MEP design",
      "Proficiency in AutoCAD and SolidWorks",
      "Experience with ASME, API, and ASTM standards",
      "Strong client-facing communication skills",
    ],
  },
  {
    id: "safe-001",
    title: "HSE Manager",
    division: "Health & Safety Products",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "7+ years",
    description: "Oversee health, safety, and environmental compliance across all Al Khonji divisions and client sites. Develop training programs, conduct audits, and ensure zero-incident culture.",
    requirements: [
      "NEBOSH Diploma or equivalent",
      "7+ years in HSE leadership within construction or oil & gas",
      "Deep knowledge of Omani labor law and OSHA standards",
      "Experience managing multi-site safety programs",
      "Arabic and English fluency required",
    ],
  },
  {
    id: "const-001",
    title: "Electrical Project Engineer",
    division: "Electro-Mechanical & Construction",
    location: "Sohar, Oman",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage MEP electrical installations on commercial and industrial construction projects from design review through commissioning. Coordinate subcontractors and ensure code compliance.",
    requirements: [
      "Bachelor's in Electrical Engineering",
      "4+ years in building services or industrial electrical contracting",
      "Familiarity with IEC and NFPA electrical codes",
      "Experience with project management software (Primavera, MS Project)",
      "Omani driver's license and ability to travel to site daily",
    ],
  },
  {
    id: "oil-001",
    title: "Technical Sales Representative — Lubricants",
    division: "Oil & Auto Products",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive lubricant sales to industrial clients, fleet operators, and automotive workshops across Oman. Provide oil analysis, product training, and account management.",
    requirements: [
      "Bachelor's in Petroleum Engineering, Chemistry, or Business",
      "3+ years in technical sales or lubricant industry",
      "Strong product knowledge of industrial and automotive lubricants",
      "Proven track record in B2B sales in Oman",
      "Valid Omani driver's license",
    ],
  },
  {
    id: "eng-002",
    title: "Procurement Specialist",
    division: "Engineering Products & Services",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "3+ years",
    description: "Source industrial components from global suppliers, negotiate contracts, and manage vendor relationships. Ensure on-time delivery and cost optimization.",
    requirements: [
      "Bachelor's in Supply Chain, Engineering, or Business",
      "3+ years in industrial procurement or purchasing",
      "Experience with ERP systems (SAP, Oracle)",
      "Strong negotiation and vendor management skills",
      "Import/export documentation experience preferred",
    ],
  },
  {
    id: "group-001",
    title: "Financial Analyst",
    division: "Mohammed & Ahmed Al Khonji",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "2+ years",
    description: "Support group financial planning, divisional performance analysis, and investment evaluation. Prepare board reports and assist with audit processes.",
    requirements: [
      "Bachelor's in Finance, Accounting, or Economics",
      "2+ years in financial analysis or corporate finance",
      "Advanced Excel and financial modeling skills",
      "CPA, ACCA, or CMA (pursuing or completed) preferred",
      "Strong attention to detail and analytical mindset",
    ],
  },
  {
    id: "const-002",
    title: "Site Supervisor — Civil Works",
    division: "Electro-Mechanical & Construction",
    location: "Duqm, Oman",
    type: "Full-time",
    experience: "6+ years",
    description: "Lead civil works crews on large-scale infrastructure projects in Duqm. Manage daily site operations, quality inspections, and safety compliance.",
    requirements: [
      "Diploma or Bachelor's in Civil Engineering",
      "6+ years in site supervision for building or infrastructure projects",
      "Experience in earthworks, concrete, and finishing trades",
      "Strong leadership and crew management abilities",
      "Willingness to reside in Duqm during project duration",
    ],
  },
  {
    id: "safe-002",
    title: "Warehouse Supervisor",
    division: "Health & Safety Products",
    location: "Muscat, Oman",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage safety equipment inventory, order fulfillment, and warehouse operations. Coordinate with sales and procurement to maintain optimal stock levels.",
    requirements: [
      "Bachelor's in Logistics, Business, or related field",
      "4+ years in warehouse or inventory management",
      "Experience with WMS and inventory control systems",
      "Forklift certification and safety training",
      "Team leadership experience in a fast-paced environment",
    ],
  },
];

const divisions = ["All", "Engineering Products & Services", "Health & Safety Products", "Electro-Mechanical & Construction", "Oil & Auto Products", "Mohammed & Ahmed Al Khonji"];

export default function CareersPage() {
  const [activeDivision, setActiveDivision] = useState("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs = activeDivision === "All" ? jobs : jobs.filter((j) => j.division === activeDivision);

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
                Join one of Oman's most established industrial groups. We invest in our people, celebrate craftsmanship, and build careers that last.
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

        {/* Job Listings */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel number="02" text="OPEN ROLES" />
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-[#78716C] mb-8">
              {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
            </p>

            {/* Division Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {divisions.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDivision(d)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeDivision === d
                      ? "bg-[#C2410C] text-white shadow-md"
                      : "bg-white text-[#334155] hover:bg-[#E7E5E4]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-left cursor-pointer"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#0F172A]">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[#78716C]">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} /> {job.division}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} /> {job.experience}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-medium text-[#C2410C]">
                          {expandedJob === job.id ? "Close" : "View Details"}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center">
                          {expandedJob === job.id ? (
                            <ChevronUp size={16} className="text-[#C2410C]" />
                          ) : (
                            <ChevronDown size={16} className="text-[#C2410C]" />
                          )}
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-[#E7E5E4]">
                            <p className="text-[#334155] leading-relaxed mb-6">{job.description}</p>
                            <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Requirements:</h4>
                            <ul className="space-y-2 mb-6">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                            <a
                              href="mailto:careers@alkhonji.com"
                              className="inline-flex items-center gap-2 rounded-md bg-[#C2410C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9A3412] transition-colors"
                            >
                              Apply for this Role
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
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
