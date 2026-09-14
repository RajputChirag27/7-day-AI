"use client";

import { Check, ShieldCheck, Zap, ArrowRight, Download, Lock, Sparkles, Star } from "lucide-react";

interface PricingOfferStackProps {
  onCtaClick: () => void;
}

export default function PricingOfferStack({ onCtaClick }: PricingOfferStackProps) {
  const stackItems = [
    {
      title: "The 7-Day AI Automation Reset Complete Ebook",
      desc: "57 pages of concise, zero-fluff frameworks, diagrams, and step-by-step systems.",
      value: "$29.99 Value",
    },
    {
      title: "50+ Copy-Paste Master Prompts Library",
      desc: "Ready-to-use prompts for emails, meeting recaps, reports, data cleaning & second brain.",
      value: "$39.00 Value",
    },
    {
      title: "5 Printable & Fillable Executive Worksheets",
      desc: "Day 1 Busywork Audit, Meeting Synthesis Template, Task Delegation Matrix (PDF & Sheets).",
      value: "$19.00 Value",
    },
    {
      title: "The 30-Day Scale-Up Plan",
      desc: "Post-reset blueprint to safely connect AI to Zapier, Make, and team workflows.",
      value: "$25.00 Value",
    },
    {
      title: "Lifetime Updates & Formats Included",
      desc: "Get digital PDF, ePub, and Notion workspace copies with all future edition updates.",
      value: "Priceless",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#07090e] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Release Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Claim The Complete Automation Bundle
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to automate 10 hours of busywork every week, packaged into one instant digital download.
          </p>
        </div>

        {/* The Card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-2 border-emerald-500/40 p-6 sm:p-10 shadow-2xl shadow-emerald-950/50">
          
          {/* Top Ribbons / Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Instant Digital Access
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                The 7-Day Reset Package
              </h3>
            </div>
            
            <div className="text-left sm:text-right">
              <div className="flex items-baseline gap-2 justify-start sm:justify-end">
                <span className="text-slate-400 line-through text-lg font-bold">$29.99</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-emerald-400">
                  $9.99
                </span>
              </div>
              <span className="text-xs text-slate-400">One-time payment • No recurring subscriptions</span>
            </div>
          </div>

          {/* Deliverables Stack */}
          <div className="py-8 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Everything Included in Today&apos;s Download:
            </span>
            {stackItems.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-900 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold shrink-0 hidden sm:inline">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Purchase CTA */}
          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <button
              onClick={onCtaClick}
              className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-extrabold text-lg sm:text-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Get Instant Access - Just $9.99</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Security Guarantee Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-xs text-slate-400">
              <div className="flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit Bank-Grade SSL</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                <span>Instant 60-Sec Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Replacement File Guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
