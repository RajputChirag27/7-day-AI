"use client";

import { useState } from "react";
import { 
  Users, 
  Megaphone, 
  BadgePercent, 
  LineChart, 
  Briefcase, 
  UserCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

interface RolePlaybooksProps {
  onCtaClick: () => void;
}

export default function RolePlaybooks({ onCtaClick }: RolePlaybooksProps) {
  const roles = [
    {
      id: "managers",
      title: "Team Leads & Managers",
      icon: UserCheck,
      savings: "8-12 hrs/week",
      color: "emerald",
      highlights: [
        "1-Click 1-on-1 meeting agenda generation",
        "Performance review synthesis from raw weekly notes",
        "Cross-team status digests with zero manual compilation",
        "Instant OKR & goal progress tracking summaries",
      ],
      scenario:
        "\"Instead of spending Sunday evenings drafting team status reports, feed your Jira tickets and Slack updates into the Manager Digest template for a polished 2-page briefing in 5 minutes.\"",
    },
    {
      id: "marketing",
      title: "Marketing & Content",
      icon: Megaphone,
      savings: "10-15 hrs/week",
      color: "indigo",
      highlights: [
        "Multi-channel campaign copy repurposing (1 idea -> 6 formats)",
        "Competitor ad swipe file analysis & hook extraction",
        "SEO brief generation & keyword intent clustering",
        "Newsletter draft generator maintaining personal brand tone",
      ],
      scenario:
        "\"Turn one 15-minute podcast episode or interview transcript into 5 LinkedIn posts, a newsletter issue, and 3 Twitter threads without hallucinated stats.\"",
    },
    {
      id: "sales",
      title: "Sales & Account Execs",
      icon: BadgePercent,
      savings: "7-10 hrs/week",
      color: "amber",
      highlights: [
        "Pre-call prospect research briefs in 90 seconds",
        "Post-demo personalized follow-up emails with objection handling",
        "CRM note logging from Zoom/Teams transcripts",
        "Contract amendment breakdown for non-lawyers",
      ],
      scenario:
        "\"Never log into Salesforce to type call notes again. The Sales Handoff pipeline pushes bulletproof call recaps and next steps straight into your CRM.\"",
    },
    {
      id: "hr",
      title: "HR & People Operations",
      icon: Users,
      savings: "6-9 hrs/week",
      color: "teal",
      highlights: [
        "Tailored job description creation based on company tone",
        "Resume screening rubrics removing hiring bias",
        "Onboarding curriculum generation for new hires",
        "Policy FAQ chatbot prompts for internal handbooks",
      ],
      scenario:
        "\"Generate role-specific technical interview questions and scoring matrices in 3 minutes, calibrated directly to your department's tech stack.\"",
    },
    {
      id: "finance",
      title: "Finance & Operations",
      icon: LineChart,
      savings: "5-8 hrs/week",
      color: "cyan",
      highlights: [
        "Messy CSV & bank statement categorization cleanup",
        "Variance commentary drafting for month-end close",
        "Vendor invoice dispute correspondence",
        "Executive cashflow summaries for leadership",
      ],
      scenario:
        "\"Normalize inconsistent vendor descriptions and export clean, formula-ready tables without writing complex Excel regex.\"",
    },
    {
      id: "freelancers",
      title: "Freelancers & Solo Founders",
      icon: Briefcase,
      savings: "12-16 hrs/week",
      color: "sky",
      highlights: [
        "Proposal & Statement of Work (SOW) drafting",
        "Client boundary reinforcement & scope-creep pushback",
        "Invoicing reminders & overdue payment follow-ups",
        "Portfolio case study writing from finished project briefs",
      ],
      scenario:
        "\"Wear all 5 hats without burnout. Automate lead intake, proposal writing, and client updates so you spend 90% of your billable time actually doing the work.\"",
    },
  ];

  const [activeRole, setActiveRole] = useState(roles[0].id);
  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section className="py-20 sm:py-28 bg-[#07090e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Tailored By Function
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Role-Specific{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">
              Automation Playbooks
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Because a Sales Director and a People Ops Manager have completely different busywork bottlenecks.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = r.id === activeRole;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-zinc-800 text-white border border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                    : "bg-zinc-950 text-slate-400 hover:text-slate-200 border border-zinc-800/80 hover:bg-zinc-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-slate-400"}`} />
                <span>{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                Specialized Playbook
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentRole.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold self-start sm:self-auto">
              <Clock className="w-3.5 h-3.5" />
              <span>Est. Savings: {currentRole.savings}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left: What this role automates */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Systems You Unlock:
              </h4>
              <div className="space-y-3">
                {currentRole.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Real-World Workflow Example */}
            <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800/80 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  Real-World Execution Scenario:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  {currentRole.scenario}
                </p>
              </div>

              <button
                onClick={onCtaClick}
                className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Get This Playbook in the $9.99 Bundle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
