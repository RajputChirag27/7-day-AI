"use client";

import { ArrowRight, ShieldCheck, Lock, Star, Zap, CheckCircle } from "lucide-react";
import ProductMockup3D from "./ProductMockup3D";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Urgency / Problem Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
              <Zap className="w-4 h-4 fill-emerald-400" />
              <span>Stop Wasting 10 Hours Every Week</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Automate 10 Hours of Weekly Busywork{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Without Learning to Code.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A battle-tested 7-day playbook for non-technical professionals. Master meeting recaps, inbox zero, report drafting, and multi-app automations safely.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pb-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero technical background needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Works with free or $20/mo tools</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50+ plug-and-play prompts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>70/30 Workplace Safety Protocol</span>
              </div>
            </div>

            {/* Primary CTA & Price Anchor */}
            <div className="pt-3 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-extrabold text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Get Instant Access - Just $9.99</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="text-slate-400 line-through text-sm">$29.99</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded font-bold">
                      SAVE 67%
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">One-time payment • Lifetime updates</span>
                </div>
              </div>

              {/* Security & Delivery Micro-Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>256-Bit SSL Encryption</span>
                </div>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Instant PDF &amp; Worksheet Delivery</span>
                </div>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-amber-400 font-medium">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-300 ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Bundle Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <ProductMockup3D />
          </div>

        </div>
      </div>
    </section>
  );
}
