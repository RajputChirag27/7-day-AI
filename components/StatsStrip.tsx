"use client";

import { Mail, Video, Terminal, TrendingUp } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      metric: "18%",
      label: "Faster Email Clearance",
      description: "Using the 5-Template inbox zero loop and automated triage rules.",
      icon: Mail,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      metric: "4x",
      label: "Faster Missed Meeting Recaps",
      description: "Extract action items, decisions, and unblocked tasks in 60 seconds.",
      icon: Video,
      accent: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
    {
      metric: "50+",
      label: "Ready-to-Use Master Prompts",
      description: "Plug-and-play prompts crafted specifically for real office workflows.",
      icon: Terminal,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section className="py-12 border-y border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Real-world performance improvements reported by readers</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {stat.metric}
                    </span>
                    <div className={`p-3 rounded-xl border ${stat.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
