"use client";

type EventName =
  | "cta_reserve_click"
  | "whatsapp_click"
  | "phone_click"
  | "tier_selected"
  | "lead_submit"
  | "faq_open";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  if (typeof window.fbq === "function") {
    if (event === "lead_submit") {
      window.fbq("track", "Lead", params);
    } else {
      window.fbq("trackCustom", event, params);
    }
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, params);
  }
}
