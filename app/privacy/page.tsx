import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Globe, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The 7-Day AI Automation Reset",
  description: "Privacy Policy, data usage, and compliance standards for The 7-Day AI Automation Reset.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sales Page
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Last updated: September 14, 2026 • Effective immediately
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <p className="text-base text-slate-300">
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and informs You about Your privacy rights and legal protections.
            </p>
            <p className="text-base text-slate-300 mt-3">
              We use Your Personal Data to deliver and improve the Service. By accessing or using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              1. Interpretation and Definitions
            </h2>
            <h3 className="text-lg font-semibold text-slate-100">Interpretation</h3>
            <p>
              Words with capitalized initials have meanings defined under the following terms. These definitions apply regardless of whether they appear in singular or plural form.
            </p>
            <h3 className="text-lg font-semibold text-slate-100">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong className="text-white">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) refers to <em>The 7-Day AI Automation Reset</em>, located in Uttar Pradesh, India.</li>
              <li><strong className="text-white">Device</strong> means any device capable of accessing the Service, such as a computer, mobile phone, or digital tablet.</li>
              <li><strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong className="text-white">Service</strong> refers to the Website.</li>
              <li><strong className="text-white">Service Provider</strong> means any third-party company or individual employed by the Company to facilitate the Service, process payments, provide analytics, or assist in analyzing how the Service is used.</li>
              <li><strong className="text-white">Usage Data</strong> refers to data collected automatically, generated either by the use of the Service or from the Service infrastructure itself (e.g., duration of a page visit).</li>
              <li><strong className="text-white">Website</strong> refers to The 7-Day AI Automation Reset, accessible from <a href="https://the-7-day-reset.vercel.app" className="text-emerald-400 hover:underline">https://the-7-day-reset.vercel.app</a>.</li>
              <li><strong className="text-white">You</strong> means the individual accessing or using the Service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              2. Collecting and Using Your Personal Data
            </h2>
            <h3 className="text-lg font-semibold text-slate-100">Types of Data Collected</h3>
            <h4 className="text-md font-medium text-emerald-400">Personal Data</h4>
            <p>
              While using Our Service or purchasing our digital publications, We may ask You to provide Us with certain personally identifiable information used to contact or identify You. This information is strictly limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Email address (for digital order fulfillment and receipt delivery)</li>
              <li>First name and last name</li>
            </ul>

            <h4 className="text-md font-medium text-emerald-400 pt-2">Usage Data</h4>
            <p>
              Usage Data is collected automatically when using the Service. This may include information such as Your Device&apos;s IP address, browser type, browser version, pages visited, time and date of Your visit, time spent on those pages, and diagnostic data.
            </p>

            <h4 className="text-md font-medium text-emerald-400 pt-2">Tracking Technologies, Cookies, and Advertising Pixels</h4>
            <p>
              We use Cookies, beacons, and tracking scripts to monitor activity across Our Service and optimize performance:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong className="text-white">Essential Cookies:</strong> Necessary for standard site navigation, security, and access to paid digital materials.</li>
              <li><strong className="text-white">Analytics & Conversion Tracking (Meta Pixel):</strong> We use third-party analytics and tracking pixels, including the Meta Pixel (Facebook Pixel), to measure the efficiency of our advertisements, track page actions (e.g., PageView and InitiateCheckout), and deliver relevant promotions. You may instruct Your web browser to refuse all cookies or adjust advertising settings on your social media accounts.</li>
            </ul>
          </section>

          <section className="space-y-4 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              3. Payment Processing & Card Security
            </h2>
            <p className="text-slate-300">
              We provide digital products within the Service. In such cases, We use authorized third-party Service Providers / Merchants of Record for payment processing (such as Lemon Squeezy, Gumroad, or Razorpay).
            </p>
            <p className="text-white font-medium">
              We do not collect, store, or process Your payment card numbers or banking credentials on our servers.
            </p>
            <p className="text-slate-400 text-sm">
              All payment information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their independent privacy policies. These processors adhere to PCI-DSS standards managed by the PCI Security Standards Council.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              4. Use of Your Personal Data
            </h2>
            <p>The Company may use Personal Data for the following specific purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong className="text-white">To deliver digital assets:</strong> To send purchase receipts, download links, and relevant product updates for &quot;The 7-Day AI Automation Reset&quot;.</li>
              <li><strong className="text-white">To communicate with You:</strong> To respond to support inquiries, service updates, or transactional notices via email.</li>
              <li><strong className="text-white">To manage promotional communication:</strong> If opted in, to send occasional emails regarding new guides or workflow updates. You may opt out at any time using the unsubscribe link at the footer of any email.</li>
              <li><strong className="text-white">To protect Our legal rights:</strong> To identify and prevent fraudulent access or unauthorized redistribution of Our intellectual property.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              5. Retention and Transfer of Data
            </h2>
            <p>
              We will retain Your Personal Data only for as long as is necessary to fulfill the purposes set out in this Privacy Policy, comply with legal requirements, and resolve disputes.
            </p>
            <p>
              Your information, including Personal Data, may be transferred to—and maintained on—cloud servers located outside of Your state, province, or country. Your submission of such information represents Your agreement to that transfer with standard commercial data security protocols applied.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              6. Security of Your Personal Data
            </h2>
            <p>
              The security of Your data is important to Us, but no method of digital transmission or electronic storage is 100% secure. While We use commercially reasonable standards to protect Your Personal Data, absolute security cannot be guaranteed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our Service is intended exclusively for working professionals and does not address anyone under the age of 16. We do not knowingly collect personal data from minors. If You become aware that a child has provided us with personal data, please contact Us immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              8. Governing Law and Jurisdiction
            </h2>
            <p>
              This Privacy Policy and any disputes related to it shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction resting with the competent courts located in <strong className="text-white">Uttar Pradesh, India</strong>.
            </p>
          </section>

          <section className="space-y-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              9. Contact Us
            </h2>
            <p className="text-slate-300">
              If You have questions about this Privacy Policy or wish to request deletion of your information, please contact Us directly:
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-slate-400">Official Support Email:</span>
              <a
                href="mailto:csronly4@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline"
              >
                csronly4@gmail.com
              </a>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-xs text-slate-500">
          © 2026 The 7-Day AI Automation Reset. All rights reserved.
        </div>
      </div>
    </main>
  );
}
