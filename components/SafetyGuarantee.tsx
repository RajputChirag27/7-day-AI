"use client";

import { Shield, Lock, Eye, AlertOctagon, CheckCircle2, ShieldAlert } from "lucide-react";

export default function SafetyGuarantee() {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>Workplace Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Safe Automation Framework:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Never Risk Your Job
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Most people use AI recklessly and endanger company confidentiality. We teach the strict protocols trusted by Fortune 500 managers.
          </p>
        </div>

        {/* 3 Core Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: The 70/30 Human-in-the-Loop Protocol */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Protocol #1
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                The 70/30 Human-in-the-Loop Rule
              </h3>
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                AI generates the first 70% of drafting, sorting, and synthesis. You control the final 30% of editorial judgment, strategic voice, and sign-off.
              </p>
            </div>
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-xs text-slate-400">
              <strong className="text-slate-200">Rule of thumb:</strong> Never allow an AI tool to click &quot;Send&quot; or publish without human eye verification.
            </div>
          </div>

          {/* Pillar 2: The Data Privacy Buckets (Safe, Careful, Never) */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                Protocol #2
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                The 3 Data Privacy Buckets
              </h3>
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                Clear categorization for what you can paste safely:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span><strong className="text-emerald-300">SAFE:</strong> Public articles, tone guidelines, blank templates.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span><strong className="text-amber-300">CAREFUL:</strong> Anonymized internal drafts with client names redacted.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <span><strong className="text-red-300">NEVER:</strong> Passwords, API keys, unreleased financials, patient/customer PII.</span>
                </li>
              </ul>
            </div>
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-xs text-slate-400">
              Includes our 1-click text anonymizer prompt to sanitize transcripts.
            </div>
          </div>

          {/* Pillar 3: Hallucination Verification */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
                Protocol #3
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Hallucination Verification
              </h3>
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                LLMs can fabricate facts with absolute confidence. Our 3-step prompt constraint isolates external sources and commands the model to admit when data is missing.
              </p>
            </div>
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-xs text-slate-400">
              <strong className="text-slate-200">Result:</strong> 0 fabricated quotes or fictitious stats in front of clients or senior executives.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
