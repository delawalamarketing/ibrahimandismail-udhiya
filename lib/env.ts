const required = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (!value) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Missing required env var: ${key}`);
    }
    return "";
  }
  return value;
};

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ibrahimandismail.ca",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+14165550100",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(416) 555-0100",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+14165550100",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@ibrahimandismail.ca",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

export const serverEnv = {
  resendApiKey: process.env.RESEND_API_KEY || "",
  resendFromEmail: process.env.RESEND_FROM_EMAIL || "",
  leadNotifyEmail: process.env.LEAD_NOTIFY_EMAIL || "",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${env.whatsappNumber.replace(/[^\d]/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const telLink = `tel:${env.phoneTel.replace(/[^\d+]/g, "")}`;

// Silences unused-import warnings for the helper above.
void required;
