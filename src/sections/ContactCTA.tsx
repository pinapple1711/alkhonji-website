"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const divisions = [
  {
    name: "Engineering Products",
    phone: "+968 1234 5678",
    email: "engineering@alkhonji.com",
  },
  {
    name: "Health & Safety",
    phone: "+968 1234 5679",
    email: "safety@alkhonji.com",
  },
  {
    name: "Electro-Mechanical",
    phone: "+968 1234 5680",
    email: "construction@alkhonji.com",
  },
  {
    name: "Oil & Auto",
    phone: "+968 1234 5681",
    email: "oilauto@alkhonji.com",
  },
  {
    name: "General Inquiries",
    phone: "+968 1234 5682",
    email: "info@alkhonji.com",
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#FAF9F6]"
      style={{
        backgroundImage: "url(/images/alkhonji-blueprint.png.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(250, 249, 246, 0.95)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel number="04" text="CONTACT" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Headline + Contact Cards */}
          <div>
            <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-[#78716C] mb-10 leading-relaxed">
              Reach the right division directly. Every inquiry is routed to the team best equipped to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {divisions.map((division, i) => (
                <motion.div
                  key={division.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h4 className="text-sm font-semibold text-[#0F172A] mb-3">
                    {division.name}
                  </h4>
                  <div className="space-y-2">
                    <a
                      href={`tel:${division.phone}`}
                      className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#C2410C] transition-colors"
                    >
                      <Phone size={14} />
                      {division.phone}
                    </a>
                    <a
                      href={`mailto:${division.email}`}
                      className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#C2410C] transition-colors"
                    >
                      <Mail size={14} />
                      {division.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-semibold text-[#0F172A] mb-6">
              Send a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#334155] mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#78716C] focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#334155] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#78716C] focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] focus:outline-none transition-colors duration-200"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="division" className="block text-sm font-medium text-[#334155] mb-2">
                  Division
                </label>
                <select
                  id="division"
                  className="w-full rounded-md border border-[#E7E5E4] px-4 py-3 text-[#0F172A] focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] focus:outline-none transition-colors duration-200 bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Engineering Products & Services</option>
                  <option>Health & Safety</option>
                  <option>Electro-Mechanical & Construction</option>
                  <option>Oil & Auto Products</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#334155] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#78716C] focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#C2410C] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200 cursor-pointer"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
