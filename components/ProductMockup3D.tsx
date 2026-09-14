"use client";

import { motion } from "framer-motion";
import { BookOpen, FileSpreadsheet, CheckCircle2, Sparkles, Cpu, Clock, Layers } from "lucide-react";

export default function ProductMockup3D() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-indigo-600/20 rounded-full blur-3xl opacity-75 pointer-events-none animate-pulse-subtle" />

      {/* Main 3D Container with subtle continuous float */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 0.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full"
      >
        {/* Main Tablet Device Card */}
        <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-2xl shadow-emerald-950/60 border border-white/10">
          {/* Inner Screen Bezel */}
          <div className="relative rounded-[2rem] bg-zinc-950 p-5 sm:p-7 overflow-hidden border border-zinc-800/80 text-left">
            {/* Gloss reflection line */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-b from-white/10 to-transparent transform rotate-45 pointer-events-none" />

            {/* Screen Header / Status */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                  Complete Field Guide
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800">
                57 Pages • v2.4
              </span>
            </div>

            {/* Book Title Mockup */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
                <Cpu className="w-3.5 h-3.5" />
                The Executive Playbook
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                THE 7-DAY AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  AUTOMATION RESET
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                A Battle-Tested Blueprint for Non-Technical Professionals
              </p>
            </div>

            {/* Visual Highlights Inside Screen */}
            <div className="mt-5 space-y-2.5 bg-zinc-900/90 rounded-xl p-3.5 border border-zinc-800">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Day 1: Busywork Audit
                </span>
                <span className="text-emerald-400 font-mono font-medium">Worksheet Included</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Day 2: Inbox Zero AI Engine
                </span>
                <span className="text-indigo-300 font-mono font-medium">5 Master Prompts</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-400" />
                  Day 7: Zapier &amp; Make Handoff
                </span>
                <span className="text-teal-300 font-mono font-medium">Auto-Sync Stacks</span>
              </div>
            </div>

            {/* Bottom Bar inside Mockup */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant PDF + Notion Access</span>
              </div>
              <span className="text-emerald-400 font-semibold">$9.99 Single License</span>
            </div>
          </div>
        </div>

        {/* Floating Badge 1: 50+ Master Prompts */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-zinc-900/95 backdrop-blur-md border border-emerald-500/40 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white leading-tight">50+ Master Prompts</div>
            <div className="text-[10px] text-emerald-400 font-medium">Copy-Paste Ready</div>
          </div>
        </motion.div>

        {/* Floating Badge 2: Audit Checklist */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-zinc-900/95 backdrop-blur-md border border-indigo-500/40 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white leading-tight">5 Executive Worksheets</div>
            <div className="text-[10px] text-indigo-400 font-medium">Fillable PDF &amp; Sheets</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
