"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export default function StickyMobileCta({ onCtaClick }: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Mobile Checkout Ribbon" className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden bg-zinc-950/95 backdrop-blur-lg border-t border-emerald-500/30 shadow-2xl animate-fade-in">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-white font-extrabold text-lg leading-none">$9.99</span>
            <span className="text-zinc-500 line-through text-xs font-semibold">$29.99</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-medium block">
            Instant PDF &amp; Worksheets
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 max-w-[200px] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-zinc-950" />
          <span>Get Access Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
