"use client";

import { useState } from "react";
import { X, ShieldCheck, CheckCircle2, Zap, ArrowRight, Download, Lock } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    trackInitiateCheckout(9.99, "USD");

    // If an external checkout URL is configured, redirect to it
    if (checkoutUrl && checkoutUrl.startsWith("http")) {
      window.location.href = `${checkoutUrl}?checkout[email]=${encodeURIComponent(email)}`;
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
          aria-label="Close checkout modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Zap className="w-4 h-4 fill-emerald-400" />
              Instant Order Processing
            </div>
            <h3 className="text-2xl font-bold text-white">
              Get &quot;The 7-Day AI Automation Reset&quot;
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Deliver direct to your inbox in 60 seconds. Zero recurring fees.
            </p>

            {/* Order Summary Box */}
            <div className="my-6 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-slate-200">The 7-Day Reset Playbook (57-pg PDF)</span>
                <span className="text-slate-400 line-through text-xs">$29.99</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">50+ Master Prompts Library (Notion &amp; CSV)</span>
                <span className="text-emerald-400 text-xs font-semibold">INCLUDED</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">5 Printable Executive Worksheets</span>
                <span className="text-emerald-400 text-xs font-semibold">INCLUDED</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">30-Day Scale-Up Blueprint</span>
                <span className="text-emerald-400 text-xs font-semibold">INCLUDED</span>
              </div>
              <div className="pt-3 border-t border-zinc-800 flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-white text-base">Total Due Today</span>
                  <p className="text-xs text-emerald-400">Save 67% today only</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-emerald-400">$9.99</span>
                  <span className="text-xs text-slate-400 block">One-time payment</span>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSimulateCheckout} className="space-y-4">
              <div>
                <label htmlFor="customer-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Primary Delivery Email
                </label>
                <input
                  id="customer-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-xl font-bold text-base bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-75 cursor-pointer"
              >
                {isProcessing ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                    Encrypting &amp; Preparing Order...
                  </span>
                ) : (
                  <>
                    <span>Proceed to Instant Access ($9.99)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit SSL Encrypted
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                Instant PDF Delivery
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Order Confirmed!</h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We have dispatched your digital bundle credentials and PDF direct download link to:
            </p>
            <div className="py-2 px-4 bg-zinc-900 rounded-lg text-emerald-300 font-mono text-sm inline-block border border-zinc-800">
              {email}
            </div>

            <div className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 text-left space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-white font-medium">
                <Download className="w-4 h-4 text-emerald-400" />
                Instant Downloads:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>7-Day AI Automation Reset (Full 57-Page Book)</li>
                <li>50+ Copy-Paste Master Prompt Sheet (.xlsx &amp; Notion)</li>
                <li>Executive Busywork Audit Worksheet</li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-colors"
            >
              Done &amp; Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
