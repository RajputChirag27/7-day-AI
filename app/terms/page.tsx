import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions of Sale & Use | The 7-Day AI Automation Reset",
  description: "Terms and conditions, licensing restrictions, and legal agreement for The 7-Day AI Automation Reset.",
};

export default function TermsAndConditionsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Scale className="w-3.5 h-3.5" />
            Terms of Sale & Licensing
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms and Conditions of Sale & Use
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Effective Date: September 14, 2026 • Governed by the Laws of India
          </p>
        </div>

        {/* Notice Banner */}
        <div className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold uppercase tracking-wide">
                Important Legal Notice:
              </strong>{" "}
              By accessing this Website, downloading, or purchasing the Product, You confirm that You have read, understood, and agreed to be legally bound by these Terms, including the mandatory limitation of liability, non-refundable digital goods policy, and governing jurisdiction clauses.
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
          <p className="text-base text-slate-300">
            Please read these Terms and Conditions (&quot;Terms&quot;) carefully before purchasing or accessing{" "}
            <em>The 7-Day AI Automation Reset</em> (the &quot;Product&quot;, &quot;Service&quot;, or &quot;eBook&quot;) available via{" "}
            <a href="https://the-7-day-reset.vercel.app" className="text-emerald-400 hover:underline">
              https://the-7-day-reset.vercel.app
            </a>{" "}
            (the &quot;Website&quot;).
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              1. The Parties
            </h2>
            <p>
              These Terms constitute a legally binding agreement between You (&quot;Purchaser&quot;, &quot;User&quot;, or &quot;You&quot;) and the publisher and owner of the Product (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), based in Uttar Pradesh, India.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              2. Nature of Digital Goods & Instant Fulfillment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Electronic Delivery:</strong> The Product consists exclusively of digital files (PDF, digital worksheets, spreadsheets, and copy-paste prompt files). No physical goods, hardware, or print editions will be shipped.
              </li>
              <li>
                <strong className="text-white">Proof of Delivery:</strong> Delivery is deemed complete at the exact timestamp our automated system or Merchant of Record delivers access links, download keys, or direct files to the email address provided during checkout.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              3. Single-User Personal License & IP Protection
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Grant of License:</strong> Upon confirmed payment, You are granted a limited, non-exclusive, revocable, non-transferable license to download, read, and execute the worksheets solely for personal and internal professional use.
              </li>
              <li>
                <strong className="text-white">Restrictions:</strong> You shall not share, host, sublicense, resell, white-label, lend, torrent, upload to public cloud drives, distribute over local networks, or include the Product in corporate intranet libraries without express written authorization from Us.
              </li>
              <li>
                <strong className="text-white">Copyright Ownership:</strong> All text, frameworks, systems, workflows, spreadsheets, and materials are the exclusive intellectual property of the Company and protected under domestic and international copyright treaties.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              4. Merchant of Record & Tax Compliance
            </h2>
            <p>
              Orders may be processed via an authorized third-party Merchant of Record (&quot;MoR&quot;), such as Lemon Squeezy, Gumroad, or Razorpay. The MoR is the legal reseller of the Product and is solely responsible for collecting, remitting, and accounting for local sales taxes, VAT, and GST applicable to your regional billing jurisdiction.
            </p>
          </section>

          <section className="space-y-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              5. Refund & Dispute Policy (Chargeback Prevention)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Digital Goods Rule:</strong> Given the instantaneous digital access and non-returnable nature of downloadable materials, <strong className="text-white">all purchases are strictly non-refundable and final</strong> once download access or file credentials have been issued.
              </li>
              <li>
                <strong className="text-white">Defective Deliverables:</strong> If a download link fails, a file is corrupted, or a format is unreadable, You must notify Us at <a href="mailto:csronly4@gmail.com" className="text-emerald-400 hover:underline">csronly4@gmail.com</a> within fourteen (14) calendar days of purchase. Our sole obligation shall be to furnish a replacement digital copy via email.
              </li>
              <li>
                <strong className="text-white">Friendly Fraud Prevention:</strong> Initiating an unjustified chargeback or payment dispute without first contacting customer support constitutes a direct breach of this agreement. We reserve the right to report fraudulent disputes, IP records, and access logs to anti-fraud databases and credit institutions.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              6. Professional Disclaimer & User Compliance (Workplace Safety)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Educational Use Only:</strong> The Product offers general operational frameworks, prompt patterns, and automation suggestions. It does not constitute legal, HR, financial, tax, or cybersecurity counsel.
              </li>
              <li>
                <strong className="text-white">No Output or Income Guarantees:</strong> We make no express or implied warranty regarding guaranteed hours saved, career advancement, productivity metrics, or earnings resulting from implementation.
              </li>
              <li>
                <strong className="text-white">Employer Policies & Confidentiality:</strong> You bear sole responsibility for ensuring that any AI tool, prompt, script, or automated integration You implement complies with your employer&apos;s internal information security policies, employee handbooks, non-disclosure agreements (NDAs), and local recording-consent laws.
              </li>
              <li>
                <strong className="text-white">Third-Party AI Models:</strong> We do not operate or control third-party LLMs (such as ChatGPT, Claude, Gemini, Make, or Zapier). We accept no liability for external software errors, hallucinated facts, API deprecation, service outages, data breaches, or billing modifications implemented by third-party platforms.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              7. Nominative Fair Use Trademark Disclaimer
            </h2>
            <p>
              Any company names, tool names, logos, or trademarks cited in the Product (including but not limited to OpenAI, ChatGPT, Anthropic, Claude, Google, Gemini, Microsoft, Zapier, Make, and Slack) remain the property of their respective trademark owners. References to these entities are made strictly under nominative fair use for identification, review, and instructional purposes and do not imply affiliation, sponsorship, or endorsement.
            </p>
          </section>

          <section className="space-y-4 bg-red-950/20 border border-red-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-red-200 flex items-center gap-2">
              8. Limitation of Liability & Dollar Cap
            </h2>
            <p className="text-xs uppercase tracking-wider text-red-300 font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW:
            </p>
            <p className="text-slate-300 text-sm">
              IN NO EVENT SHALL THE COMPANY, ITS FOUNDERS, OR OPERATORS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES—INCLUDING LOSS OF PROFITS, DATA CORRUPTION, WORK DISRUPTIONS, EMPLOYMENT DISCIPLINARY ACTIONS, OR SYSTEM OUTAGES—ARISING OUT OF YOUR USE OF THE PRODUCT.
            </p>
            <div className="p-4 bg-black/40 rounded-xl border border-red-500/20 mt-3">
              <strong className="text-white text-sm">MONETARY LIABILITY CAP:</strong>
              <p className="text-slate-300 text-sm mt-1">
                IN ANY CIRCUMSTANCE, OUR MAXIMUM AGGREGATE LEGAL LIABILITY ARISING UNDER OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL PURCHASE PRICE ACTUALLY PAID BY YOU FOR THE PRODUCT (E.G., THE ACTUAL NET VALUE RECEIVED, NOT TO EXCEED $9.99 USD OR DOMESTIC EQUIVALENT).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              9. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms, your purchase, and any claims arising from the Product shall be governed solely by and construed in accordance with the laws of India. Any litigation, dispute, or legal proceeding directly or indirectly relating to these Terms shall be subject to the exclusive jurisdiction of the competent civil courts situated in <strong className="text-white">Uttar Pradesh, India</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-zinc-800/80 pb-2">
              10. Severability & Entire Agreement
            </h2>
            <p>
              If any provision of these Terms is deemed unlawful, void, or unenforceable by an authoritative court, that provision will be severed without affecting the validity and enforceability of the remaining sections. These Terms constitute the complete understanding between You and the Company regarding the Product.
            </p>
          </section>

          <section className="space-y-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              11. Contact Details
            </h2>
            <p className="text-slate-300">
              For transactional assistance, license verification, or support inquiries, contact:
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-slate-400">Support Desk:</span>
              <a
                href="mailto:csronly4@gmail.com"
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline"
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
