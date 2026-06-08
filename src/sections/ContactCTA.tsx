"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Clock, Send, CheckCircle, ExternalLink } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const divisions = [
  {
    name: "Engineering Products",
    phone: "+968 1234 5678",
    email: "engineering@alkhonji.com",
    icon: "⚙",
  },
  {
    name: "Health & Safety",
    phone: "+968 1234 5679",
    email: "safety@alkhonji.com",
    icon: "🛡",
  },
  {
    name: "Electro-Mechanical",
    phone: "+968 1234 5680",
    email: "construction@alkhonji.com",
    icon: "🔌",
  },
  {
    name: "Oil & Auto",
    phone: "+968 1234 5681",
    email: "oilauto@alkhonji.com",
    icon: "⛽",
  },
  {
    name: "General Inquiries",
    phone: "+968 1234 5682",
    email: "info@alkhonji.com",
    icon: "📋",
  },
];

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", division: "General Inquiry", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/alkhonji-contact.png.jpeg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel number="04" text="CONTACT" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-h1 font-semibold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-[#78716C] leading-relaxed">
            Reach the right division directly. Every inquiry is routed to the team best equipped to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* HQ Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
                  <MapPin className="text-[#C2410C]" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">Headquarters</h3>
              </div>
              <p className="text-[#334155] mb-3">Al Khonji Building, Al Khuwair</p>
              <p className="text-[#334155]">Muscat 133, Sultanate of Oman</p>
              <div className="mt-4 pt-4 border-t border-[#E7E5E4] flex items-center gap-2 text-sm text-[#78716C]">
                <Clock size={14} />
                <span>Sun – Thu, 8:00 AM – 5:00 PM GST</span>
              </div>
            </motion.div>

            {/* Division Contact Cards */}
            <div className="space-y-3">
              {divisions.map((division, i) => (
                <motion.div
                  key={division.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#C2410C] transition-colors">
                        {division.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <a
                          href={`tel:${division.phone}`}
                          className="flex items-center gap-1.5 text-sm text-[#334155] hover:text-[#C2410C] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone size={13} />
                          {division.phone}
                        </a>
                        <a
                          href={`mailto:${division.email}`}
                          className="flex items-center gap-1.5 text-sm text-[#334155] hover:text-[#C2410C] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail size={13} />
                          {division.email}
                        </a>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#E7E5E4] group-hover:text-[#C2410C] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm text-[#334155] hover:text-[#C2410C] hover:shadow-md transition-all"
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
              <a
                href="https://alkhonji.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm text-[#334155] hover:text-[#C2410C] hover:shadow-md transition-all"
              >
                <ExternalLink size={14} />
                Official Website
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* Success overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle size={56} className="text-[#C2410C] mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Message Sent</h3>
                    <p className="text-[#78716C]">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-semibold text-[#0F172A] mb-1">
                Send a Message
              </h3>
              <p className="text-sm text-[#78716C] mb-8">
                Fill out the form below and we will route it to the right team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#334155] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#A8A29E] focus:border-[#C2410C] focus:ring-2 focus:ring-[#C2410C]/20 focus:outline-none transition-all duration-200 bg-[#FAF9F6]/50"
                      placeholder="Ahmed Al-Rashdi"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#334155] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#A8A29E] focus:border-[#C2410C] focus:ring-2 focus:ring-[#C2410C]/20 focus:outline-none transition-all duration-200 bg-[#FAF9F6]/50"
                      placeholder="ahmed@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="division" className="block text-sm font-medium text-[#334155] mb-2">
                    Division
                  </label>
                  <select
                    id="division"
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full rounded-lg border border-[#E7E5E4] px-4 py-3 text-[#0F172A] focus:border-[#C2410C] focus:ring-2 focus:ring-[#C2410C]/20 focus:outline-none transition-all duration-200 bg-[#FAF9F6]/50"
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
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-[#E7E5E4] px-4 py-3 text-[#0F172A] placeholder-[#A8A29E] focus:border-[#C2410C] focus:ring-2 focus:ring-[#C2410C]/20 focus:outline-none transition-all duration-200 resize-none bg-[#FAF9F6]/50"
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#C2410C] px-6 py-4 text-base font-semibold text-white hover:bg-[#9A3412] transition-colors duration-200 shadow-lg shadow-orange-900/20 cursor-pointer"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>

                <p className="text-xs text-[#78716C] text-center">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
