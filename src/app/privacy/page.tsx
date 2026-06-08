import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Al Khonji privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-h1 font-bold text-[#0F172A] font-[family-name:var(--font-fraunces)] mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#78716C] mb-8">
              Last updated: June 2026
            </p>

            <div className="space-y-8 text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
                  1. Introduction
                </h2>
                <p>
                  Al Khonji respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you visit our website or contact us.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
                  2. Information We Collect
                </h2>
                <p>
                  We may collect your name, email address, phone number, and message content when you submit a contact form or send us an inquiry. We do not collect sensitive personal data without your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
                  3. How We Use Your Information
                </h2>
                <p>
                  We use your information solely to respond to your inquiries, process requests, and improve our services. We do not sell, rent, or share your personal data with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
                  4. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
                  5. Contact Us
                </h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at{" "}
                  <a
                    href="mailto:info@alkhonji.com"
                    className="text-[#C2410C] hover:underline"
                  >
                    info@alkhonji.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
