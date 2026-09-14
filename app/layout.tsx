import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 7-Day AI Automation Reset | Automate 10 Hours of Weekly Busywork",
  description:
    "A battle-tested 7-day playbook for non-technical professionals. Master meeting recaps, inbox zero, report drafting, and multi-app automations safely for just $9.99.",
  keywords: [
    "AI automation",
    "prompt engineering for professionals",
    "inbox zero AI",
    "meeting summary AI",
    "executive AI playbook",
    "ChatGPT productivity",
  ],
  openGraph: {
    title: "The 7-Day AI Automation Reset",
    description:
      "Automate 10 Hours of Weekly Busywork Without Learning to Code. Complete 57-page playbook + 50 master prompts.",
    url: "https://the-7-day-reset.vercel.app",
    siteName: "The 7-Day AI Automation Reset",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7-Day AI Automation Reset",
    description: "Automate 10 Hours of Weekly Busywork Without Learning to Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-[#07090e] text-slate-100 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
