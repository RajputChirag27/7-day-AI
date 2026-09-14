import Link from "next/link";
import { Cpu, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05060a] border-t border-zinc-900 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              The 7-Day AI Automation Reset
            </span>
          </div>

          {/* Legal Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-800">•</span>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-zinc-800">•</span>
            <a
              href="mailto:csronly4@gmail.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>csronly4@gmail.com</span>
            </a>
          </nav>
        </div>

        {/* Legal Disclaimers */}
        <div className="space-y-3 text-zinc-500 text-[11px] leading-relaxed max-w-4xl">
          <p>
            <strong className="text-zinc-400">Disclaimer:</strong> This website and the digital book &quot;The 7-Day AI Automation Reset&quot; provide operational education and productivity systems. Results and time saved vary based on individual role, organization rules, and implementation consistency. We do not make income guarantees or employment assurances.
          </p>
          <p>
            <strong className="text-zinc-400">Trademarks Notice:</strong> OpenAI, ChatGPT, Anthropic, Claude, Google Gemini, Microsoft, Zapier, Make, and Slack are trademarks or registered trademarks of their respective owners. Their mention does not imply endorsement, sponsorship, or affiliation.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>© 2026 The 7-Day AI Automation Reset. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70" />
            <span>Secure 256-Bit SSL Checkout Powered by Merchant of Record</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
