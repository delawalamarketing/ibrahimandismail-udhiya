import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/leadSchema";
import { serverEnv } from "@/lib/env";
import { tierById } from "@/content/pricing";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, phone, email, tier, animal, website } = parsed.data;
  if (website) {
    // Honeypot tripped — silently succeed.
    return NextResponse.json({ ok: true });
  }

  // Forward to n8n if configured (or fall back to the default webhook URL)
  const n8nWebhookUrl =
    process.env.N8N_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
    "https://n8n-o13i8ahea0x1mcsgwv1j7c4s.34.121.96.202.sslip.io/webhook/ibrahim-ismail-booking";

  if (n8nWebhookUrl) {
    try {
      // eslint-disable-next-line no-console
      console.info(`[lead] Forwarding to n8n webhook: ${n8nWebhookUrl}`);
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // eslint-disable-next-line no-console
      console.info(`[lead] Successfully forwarded to n8n webhook`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[lead] n8n webhook forwarding failed:", err);
      return NextResponse.json(
        { error: "Something went wrong sending your reservation to n8n webhook." },
        { status: 500 },
      );
    }
  }

  const tierData = tierById(tier);
  const subject = `New qurbaani reservation — ${tierData.name} (${tierData.priceLabel})`;
  const body = [
    `New lead received:`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Tier:    ${tierData.name} (${tierData.priceLabel})`,
    `Animal:  ${animal}`,
    ``,
    `Reply on WhatsApp or by phone to confirm the slot and arrange pickup/delivery.`,
  ].join("\n");

  if (serverEnv.resendApiKey && serverEnv.resendFromEmail && serverEnv.leadNotifyEmail) {
    try {
      const resend = new Resend(serverEnv.resendApiKey);
      await resend.emails.send({
        from: serverEnv.resendFromEmail,
        to: serverEnv.leadNotifyEmail,
        replyTo: email,
        subject,
        text: body,
      });
    } catch (err) {
      // Log but do not fail the request — fall back to console log so the lead
      // is never silently lost.
      // eslint-disable-next-line no-console
      console.error("[lead] Resend send failed", err);
      // eslint-disable-next-line no-console
      console.info("[lead] payload:", body);
    }
  } else {
    // Dev / unconfigured fallback: log the lead so it is visible in the
    // terminal until Resend is wired up.
    // eslint-disable-next-line no-console
    console.info(`[lead] ${subject}\n${body}`);
  }

  return NextResponse.json({ ok: true });
}
