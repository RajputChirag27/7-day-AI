"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface AnnouncementBarProps {
  onCtaClick?: () => void;
}

export default function AnnouncementBar({ onCtaClick }: AnnouncementBarProps) {
  return (
    <aside aria-label="Special Offer Banner" className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-950 via-zinc-900 to-indigo-950 border-b border-emerald-500/20 text-xs sm:text-sm font-medium py-2.5 px-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-300 font-semibold tracking-wide">
          Limited Time Release
        </span>
        <span className="hidden sm:inline text-zinc-500">•</span>
        <span className="text-slate-200">
          50+ Copy-Paste Prompts, 5 Worksheets &amp; Turnkey Automations Included
        </span>
        <button
          onClick={onCtaClick}
          className="inline-flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 ml-1 transition-colors"
        >
          Claim $9.99 Special
          <ArrowRight className="w-3.5 h-3.5 inline" />
        </button>
      </div>
    </aside>
  );
}
