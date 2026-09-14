"use client";

import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ComparisonTableProps {
  onCtaClick: () => void;
}

export default function ComparisonTable({ onCtaClick }: ComparisonTableProps) {
  const comparisons = [
    {
      aspect: "Email Management",
      oldWay: "Staring at a 140-unread inbox, writing repetitive replies from scratch for 2 hours every morning.",
      newWay: "Triage with the 5-Master Template system. AI drafts context-aware replies; you review in 15 mins.",
    },
    {
      aspect: "Meeting Recaps",
      oldWay: "Frantically typing disorganized bullet points during calls or forgetting what was decided altogether.",
      newWay: "AI notetaker stack extracts decisions, owners, and deadlines automatically into your project log.",
    },
    {
      aspect: "Writing & Reports",
      oldWay: "Facing a paralyzing blank page, copy-pasting numbers between spreadsheets and docs for hours.",
      newWay: "Assembly-line drafting: structured prompts convert raw notes into executive memos in under 10 minutes.",
    },
    {
      aspect: "Task Follow-Ups",
      oldWay: "Manually pinging team members on Slack and updating Jira/Asana boards item by item.",
      newWay: "Zapier/Make handoffs sync project updates directly from AI summaries into your task managers.",
    },
    {
      aspect: "Risk & Privacy",
      oldWay: "Pasting confidential client contracts or passwords into random chat tools without guidelines.",
      newWay: "Strict 70/30 Human-in-the-Loop Protocol with Safe, Careful, and Never data privacy buckets.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Side-by-Side Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stop Bleeding Hours into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">
              Low-Value Drudgery
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how your workday transforms once you swap manual scramble for structured 5-minute automation loops.
          </p>
        </div>

        {/* Comparison Cards / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Old Manual Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950/80 border border-red-500/20 shadow-lg shadow-red-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold block">
                    The Exhausting Status Quo
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    The Old Manual Way
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-6">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {item.aspect}
                      </h4>
                      <p className="text-sm text-slate-400 mt-0.5 leading-relaxed">
                        {item.oldWay}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
              <span className="text-xs text-red-400 font-mono">
                Result: 10+ hours lost per week to cognitive fatigue &amp; context switching
              </span>
            </div>
          </div>

          {/* Column 2: The 7-Day Reset Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 relative flex flex-col justify-between">
            {/* Top highlight badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
              High Leverage System
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-500/20">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    The Proven Fast-Track
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    The 7-Day Reset Way
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-6">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        {item.aspect}
                        <span className="text-[10px] bg-emerald-500/15 text-emerald-300 font-mono px-1.5 py-0.5 rounded">
                          Turnkey
                        </span>
                      </h4>
                      <p className="text-sm text-slate-300 mt-0.5 leading-relaxed">
                        {item.newWay}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/20">
              <button
                onClick={onCtaClick}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Switch to the 7-Day System for $9.99</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
