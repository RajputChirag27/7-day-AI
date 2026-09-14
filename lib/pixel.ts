export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "123456789012345";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined") {
    if (typeof window.fbq === "function") {
      window.fbq("track", name, options);
    } else {
      console.log(`[Meta Pixel Event: ${name}]`, options);
    }
  }
};

export const trackInitiateCheckout = (value = 9.99, currency = "USD") => {
  event("InitiateCheckout", {
    content_name: "The 7-Day AI Automation Reset",
    content_category: "Digital Book & Worksheets",
    content_ids: ["7-day-ai-reset-book"],
    value: value,
    currency: currency,
  });
};
