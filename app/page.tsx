"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ComparisonTable from "@/components/ComparisonTable";
import SevenDayBreakdown from "@/components/SevenDayBreakdown";
import RolePlaybooks from "@/components/RolePlaybooks";
import SafetyGuarantee from "@/components/SafetyGuarantee";
import PricingOfferStack from "@/components/PricingOfferStack";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import CheckoutModal from "@/components/CheckoutModal";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    trackInitiateCheckout(9.99, "USD");
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;
    if (checkoutUrl && checkoutUrl.startsWith("http")) {
      window.location.href = checkoutUrl;
      return;
    }
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090e]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onCtaClick={handleOpenCheckout} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onCtaClick={handleOpenCheckout} />

        {/* 3. Social Proof & Stats Strip */}
        <StatsStrip />

        {/* 4. Pain vs. Solution Comparison */}
        <ComparisonTable onCtaClick={handleOpenCheckout} />

        {/* 5. The 7-Day Curriculum Breakdown */}
        <SevenDayBreakdown onCtaClick={handleOpenCheckout} />

        {/* 6. Role-Specific Playbooks */}
        <RolePlaybooks onCtaClick={handleOpenCheckout} />

        {/* 7. Safety Guarantee Protocol */}
        <SafetyGuarantee />

        {/* 8. Pricing & Offer Stack */}
        <PricingOfferStack onCtaClick={handleOpenCheckout} />

        {/* 9. FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Persistent Floating Mobile CTA */}
      <StickyMobileCta onCtaClick={handleOpenCheckout} />

      {/* Interactive Checkout Modal (Instant Demo / Fallback) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
