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
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+14165050358",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(416) 505-0358",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+14165050358",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "team.ibrahimandismail@gmail.com",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "1486538146598198",
  // n8n booking webhook — when set, ReserveForm POSTs directly here instead
  // of /api/lead. Expected response shape: { success: true }.
  n8nWebhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "",
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
