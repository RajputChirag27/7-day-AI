"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const faqs = [
    {
      id: "item-1",
      question: "Do I need technical or coding skills to use this?",
      answer:
        "Not at all. This playbook was created specifically for non-technical operators, managers, analysts, and solo professionals. Every workflow relies either on plain English prompts (prompt chaining) or simple visual zero-code automations. If you can copy-paste and type an email, you can execute everything in this book.",
    },
    {
      id: "item-2",
      question: "Do I have to buy expensive AI subscriptions or tools?",
      answer:
        "No. Every single prompt and technique in the book has been tested on free AI tiers (such as the free versions of ChatGPT, Claude, and Google Gemini). While a $20/month subscription unlocks higher rate limits and advanced features, you can easily save 5-10 hours a week without spending an extra penny on third-party software.",
    },
    {
      id: "item-3",
      question: "What format is the book delivered in?",
      answer:
        "You receive an instant, high-resolution 57-page digital PDF optimized for reading on desktop, iPad, or mobile devices. In addition, you get access to fillable PDF worksheets, a downloadable Excel/Sheets template pack, and a copy-paste Notion master prompt library.",
    },
    {
      id: "item-4",
      question: "What is your refund and support policy?",
      answer:
        "Because this product consists of instant, non-revocable digital downloads and copy-paste templates, all sales are strictly final upon delivery. However, we guarantee file delivery and integrity: if you ever lose your link, have download trouble, or experience formatting issues, email us at csronly4@gmail.com and we will immediately provide a fresh digital copy.",
    },
    {
      id: "item-5",
      question: "Can I use these prompts safely on confidential work data?",
      answer:
        "Yes, provided you follow Day 6's Safe Automation Protocol. We teach the 3 Data Privacy Buckets (Safe, Careful, Never) and provide an instant anonymization prompt template so you never accidentally expose private client info, credentials, or proprietary company secrets to public LLMs.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 relative border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know before diving into the 7-day reset.
          </p>
        </div>

        {/* Radix Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="group rounded-2xl bg-zinc-900/70 border border-zinc-800/80 overflow-hidden transition-all data-[state=open]:border-emerald-500/40 data-[state=open]:bg-zinc-900"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between p-5 sm:p-6 text-left text-base sm:text-lg font-bold text-white transition-all hover:text-emerald-400 cursor-pointer">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="w-5 h-5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-emerald-400 shrink-0 ml-4"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-slate-300 leading-relaxed">
                <div className="border-t border-zinc-800/80 pt-4">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}
