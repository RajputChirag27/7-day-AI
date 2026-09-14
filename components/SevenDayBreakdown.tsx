"use client";

import { useState } from "react";
import { 
  ClipboardCheck, 
  Mail, 
  Mic, 
  BrainCircuit, 
  FileText, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet
} from "lucide-react";

interface SevenDayBreakdownProps {
  onCtaClick: () => void;
}

export default function SevenDayBreakdown({ onCtaClick }: SevenDayBreakdownProps) {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      dayNumber: "Day 1",
      title: "The Busywork Audit",
      subtitle: "Map where your 10 weekly hours vanish & calculate automation ROI",
      icon: ClipboardCheck,
      color: "emerald",
      badge: "Worksheet Included",
      description:
        "Before automating, you must diagnose. Use our 15-minute diagnostic rubric to categorize daily tasks into low-leverage repetitive time-sinks versus high-impact deep work.",
      deliverables: [
        "Executive Busywork Audit Worksheet (PDF & Notion)",
        "The 80/20 Task Delegation Matrix",
        "Cost-per-hour busywork calculator",
        "Personal Automation Target Scorecard",
      ],
      promptPreview:
        "\"Analyze this raw list of 15 tasks from my past 3 workdays. Categorize them into: (A) Fully Automatable, (B) AI-Assisted, and (C) Strict Human-Only...\"",
    },
    {
      dayNumber: "Day 2",
      title: "The Email Automation System",
      subtitle: "5 Master Templates to clear unread inboxes in 15 minutes",
      icon: Mail,
      color: "teal",
      badge: "5 Master Templates",
      description:
        "Transform your inbox from an anxiety generator into an automated queue. Deploy 5 copy-paste master prompts for vendor negotiations, client updates, difficult rejections, and status queries.",
      deliverables: [
        "5 Tone-Calibrated Master Email Prompts",
        "VIP Sender Rulebook & Filter Stack",
        "One-Click Context Ingestion Framework",
        "Safe Signature & Disclaimers Setup",
      ],
      promptPreview:
        "\"Act as my executive communications assistant. Read this incoming thread from [Client] and draft a firm but courteous response accepting the project with the following 3 constraints...\"",
    },
    {
      dayNumber: "Day 3",
      title: "Meetings That Write Themselves",
      subtitle: "Zero-typing notetaker stack that extracts decisions & task owners",
      icon: Mic,
      color: "indigo",
      badge: "Notetaker Stack",
      description:
        "Never type meeting notes while trying to talk again. Learn the top local and cloud transcription workflows that convert 45-minute meandering calls into crisp 4-bullet executive summaries.",
      deliverables: [
        "The 60-Second Meeting Synthesis Prompt",
        "Owner & Deadline Extraction Syntax",
        "Recording-consent compliance cheat sheet",
        "Asynchronous standup bot blueprint",
      ],
      promptPreview:
        "\"Extract every single commitment made in this transcript. Format as a table: Column 1: Task Description, Column 2: Explicit Owner, Column 3: Agreed Deadline, Column 4: Blockers.\"",
    },
    {
      dayNumber: "Day 4",
      title: "Automated Second Brain",
      subtitle: "Voice-to-clean-note pipeline for instant idea capture on the move",
      icon: BrainCircuit,
      color: "cyan",
      badge: "Voice-to-Notes Pipeline",
      description:
        "Capture raw spoken rambling into your phone while commuting or walking, and have it auto-structured into polished project outlines, documentation, and task briefs within minutes.",
      deliverables: [
        "Mobile Voice Memos to Markdown pipeline",
        "The Rambling-to-Structure Synthesizer Prompt",
        "Daily Knowledge Log architecture",
        "Instant speech cleanup configuration",
      ],
      promptPreview:
        "\"Transcribe this stream-of-consciousness brain dump. Remove verbal fillers, reorganize into logical sections with markdown headings, and highlight the 3 core decisions.\"",
    },
    {
      dayNumber: "Day 5",
      title: "Reports on Autopilot",
      subtitle: "Assembly-line drafting for weekly updates, decks & memos",
      icon: FileText,
      color: "sky",
      badge: "Assembly-Line Drafting",
      description:
        "Write executive summaries, KPI reports, and department reviews in a fraction of the time. Feed raw metrics and bullet points into a multi-stage prompt chain that outputs flawless prose.",
      deliverables: [
        "Multi-Stage Executive Memo Prompt Chain",
        "Raw Metrics-to-Insights Formatter",
        "Client Status Deck generator script",
        "Formatting templates for Notion, Docs, & Word",
      ],
      promptPreview:
        "\"Using these 8 raw bullet points and Q3 KPI metrics, generate a formal 1-page memo for the Vice President following our company's executive tone rules...\"",
    },
    {
      dayNumber: "Day 6",
      title: "Sourced Research & Data Cleaning",
      subtitle: "Bulletproof hallucination defense and instant spreadsheet cleanup",
      icon: ShieldCheck,
      color: "emerald",
      badge: "Hallucination Defense",
      description:
        "Eliminate made-up statistics and fake citations. Master our 3-step Hallucination Defense Protocol to cross-reference AI findings with primary sources and format messy CSV/Excel data in seconds.",
      deliverables: [
        "The 3-Step Verification Checklist",
        "Messy CSV & Table Formatting Prompts",
        "Source Citation Verification Protocol",
        "Deduplication & Data Normalization guide",
      ],
      promptPreview:
        "\"Do NOT infer or extrapolate facts. Cross-reference each claim against the attached PDF source. If an answer cannot be explicitly confirmed in lines 40-120, state 'Insufficient Data'.\"",
    },
    {
      dayNumber: "Day 7",
      title: "Automations That Run While You Sleep",
      subtitle: "No-code handoffs connecting ChatGPT to Zapier and Make",
      icon: Zap,
      color: "amber",
      badge: "Zapier/Make Handoffs",
      description:
        "Graduate from manual prompt pasting to self-running background workflows. Connect AI triggers to your email, Slack, Google Sheets, or CRM with zero coding required.",
      deliverables: [
        "3 Plug-and-Play Zapier & Make Templates",
        "Error-handling & safeguard configurations",
        "Webhook triggers for non-technical users",
        "The 30-Day Scale-Up Roadmap",
      ],
      promptPreview:
        "\"Parse incoming webhook payload {new_lead_submission}. Score qualification from 1-10 based on criteria. If score > 7, generate tailored onboarding summary for Slack channel #sales.\"",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Structured 7-Day Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Exact 7-Day{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Step-by-Step Roadmap
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No endless theory or generic fluff. Spend 30 minutes each day implementing a concrete, self-contained automation system.
          </p>
        </div>

        {/* Interactive Day Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {days.map((d, index) => {
            const isCurrent = activeDay === index;
            return (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-900/90 text-slate-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                <span>{d.dayNumber}</span>
                <span className="hidden md:inline font-normal opacity-90">
                  • {d.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Featured Card */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Day Summary & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {days[activeDay].dayNumber}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {days[activeDay].badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {days[activeDay].title}
                </h3>
                <p className="text-emerald-400 text-sm font-medium mt-1">
                  {days[activeDay].subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {days[activeDay].description}
              </p>

              {/* What You Build / Deliverables */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  What You Get &amp; Implement on {days[activeDay].dayNumber}:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {days[activeDay].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Copy-Paste Master Prompt Sneak Peek */}
            <div className="lg:col-span-5 bg-zinc-950 rounded-2xl p-5 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Master Prompt Preview
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                  Ready to Copy-Paste
                </span>
              </div>

              <div className="p-4 bg-zinc-900/80 rounded-xl font-mono text-xs text-emerald-300/90 leading-relaxed border border-zinc-800/80 select-all">
                {days[activeDay].promptPreview}
              </div>

              <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-xs text-slate-300">
                <span className="text-emerald-400 font-semibold">Included in the bundle:</span> Complete tested syntax variations for ChatGPT, Claude, and Gemini with system instructions.
              </div>

              <button
                onClick={onCtaClick}
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Unlock All 50+ Prompts for $9.99</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
