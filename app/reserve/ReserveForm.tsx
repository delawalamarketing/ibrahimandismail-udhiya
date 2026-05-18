"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { leadSchema, type LeadInput } from "@/lib/leadSchema";
import { tiers, tierById, type TierId } from "@/content/pricing";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

type Props = {
  initialTier?: TierId;
};

export function ReserveForm({ initialTier = "deluxe" }: Props) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { tier: initialTier, animal: "goat", website: "" },
  });

  const selectedTier = watch("tier");
  const selectedAnimal = watch("animal");

  const onSubmit = async (data: LeadInput) => {
    setStatus("submitting");

    const endpoint =
      "https://n8n-o13i8ahea0x1mcsgwv1j7c4s.34.121.96.202.sslip.io/webhook/ibrahim-ismail-booking";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText || "Request failed"}`);
      }
      const payload = (await res.json()) as { success?: boolean; error?: string };
      if (!payload || payload.success !== true) {
        throw new Error(payload?.error || "Webhook did not return success: true");
      }
      track("lead_submit", { tier: data.tier, animal: data.animal });
      setStatus("success");
    } catch (err) {
      // Surface the real error in the console so the developer can see what
      // failed (CORS, 404, network, n8n rejection). The user-facing toast
      // stays friendly.
      // eslint-disable-next-line no-console
      console.error("[reserve] submit failed:", err, { endpoint });
      setStatus("idle");
      toast.error("Something went wrong sending your reservation.", {
        description:
          "Please try again or WhatsApp us — we will respond personally.",
      });
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.38, ease: [0.34, 1.36, 0.64, 1] }}
          className="rounded-lg border border-primary-100 bg-white p-8 sm:p-10 shadow-sm"
        >
          <div className="flex items-start gap-5">
            <SuccessCheck reduceMotion={Boolean(reduceMotion)} />
            <div className="w-full">
              <h2 className="font-serif text-display-md font-normal text-ink-900">
                Reservation received.
              </h2>
              <p className="mt-4 text-body-lg text-ink-700 max-w-[52ch]">
                JazakAllah khair. To secure your animal and scheduled slot, please complete your payment of{" "}
                <span className="font-semibold text-accent-500">
                  {tierById(selectedTier).priceLabel}
                </span>{" "}
                using one of the secure methods below. We will confirm receipt on WhatsApp within one business day.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-md border border-ink-100 bg-cream-50 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-heading-md font-semibold text-ink-900">
                      Option A: Interac e-Transfer
                    </h3>
                    <p className="mt-2 text-body-sm text-ink-700">
                      Secure, direct, and preferred by many local families to avoid processing fees.
                    </p>
                    <dl className="mt-4 space-y-2 text-body-sm">
                      <div className="flex justify-between border-b border-ink-100/50 pb-1">
                        <dt className="text-ink-500">Send to:</dt>
                        <dd className="font-semibold text-ink-900">hello@ibrahimandismail.com</dd>
                      </div>
                      <div className="flex justify-between border-b border-ink-100/50 pb-1">
                        <dt className="text-ink-500">Amount:</dt>
                        <dd className="font-semibold text-ink-900">
                          {tierById(selectedTier).priceLabel}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-ink-500">Note:</dt>
                        <dd className="text-ink-900 text-right">Include your name & phone number</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="rounded-md border border-ink-100 bg-cream-50 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-heading-md font-semibold text-ink-900">
                      Option B: Credit / Debit Card
                    </h3>
                    <p className="mt-2 text-body-sm text-ink-700">
                      Pay securely online via credit card. A custom Stripe Checkout link will be generated for your request.
                    </p>
                    <p className="mt-4 text-body-sm italic text-ink-500">
                      Our team will send a custom checkout link to your email and WhatsApp shortly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton
                  location="reserve-success"
                  message={`Assalamu alaikum, I just reserved a ${selectedTier} qurbaani (${selectedAnimal === "goat" ? "Goat" : "Lamb"}) for ${site.eidDateLabel}.`}
                >
                  Message us on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 1, 1] }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-lg border border-ink-100 bg-white p-5 sm:p-7 lg:p-10 shadow-sm"
        >
      <fieldset className="space-y-2">
        <legend className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
          Choose your tier
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {tiers.map((tier) => (
            <label
              key={tier.id}
              className={cn(
                "flex cursor-pointer flex-col gap-1 rounded-md border p-4",
                "transition-[background-color,border-color,box-shadow] duration-220 ease-warm",
                "motion-reduce:transition-none",
                selectedTier === tier.id
                  ? "border-accent-500 bg-cream-100 ring-1 ring-accent-500"
                  : "border-ink-100 hover:border-primary-500 hover:bg-cream-50",
              )}
            >
              <input
                type="radio"
                value={tier.id}
                {...register("tier")}
                className="sr-only"
              />
              <span className="font-serif text-heading-md font-medium text-ink-900">
                {tier.name}
              </span>
              <span className="text-body text-ink-700">{tier.priceLabel}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2 mt-8">
        <legend className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
          Choose your animal
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { id: "goat", name: "Goat" },
            { id: "lamb", name: "Lamb" },
          ].map((animal) => (
            <label
              key={animal.id}
              className={cn(
                "flex cursor-pointer flex-col gap-1 rounded-md border p-4",
                "transition-[background-color,border-color,box-shadow] duration-220 ease-warm",
                "motion-reduce:transition-none",
                selectedAnimal === animal.id
                  ? "border-accent-500 bg-cream-100 ring-1 ring-accent-500"
                  : "border-ink-100 hover:border-primary-500 hover:bg-cream-50",
              )}
            >
              <input
                type="radio"
                value={animal.id}
                {...register("animal")}
                className="sr-only"
              />
              <span className="font-serif text-heading-md font-medium text-ink-900">
                {animal.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          id="name"
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="mt-5">
        <Field
          label="Email"
          id="email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Honeypot — hidden from real users, catches bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full min-w-[200px] sm:w-auto sm:flex-shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status === "submitting" ? "sending" : "send"}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  {status === "submitting" ? "Sending…" : "Send my reservation"}
                </motion.span>
              </AnimatePresence>
            </Button>
            <p className="text-body-sm text-ink-500 max-w-[42ch]">
              Pickup or delivery, exact cuts, and any custom notes are handled by WhatsApp
              after we confirm your slot.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

// Animated checkmark — draws via stroke-dasharray on mount. Sits in a small
// circle in the success color. Skips animation under reduced motion.
function SuccessCheck({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-success/10">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-success"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d="M5 12.5l4 4 10-10"
          style={{
            strokeDasharray: 28,
            strokeDashoffset: reduceMotion ? 0 : 28,
            animation: reduceMotion
              ? undefined
              : "draw-check-once 420ms cubic-bezier(0.32, 0.72, 0.36, 1) 220ms forwards",
          }}
        />
      </svg>
      <style>{`
        @keyframes draw-check-once {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </span>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

const Field = React.forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, id, error, ...props },
  ref,
) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-medium text-ink-900">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-12 rounded-sm border bg-white px-4 text-body text-ink-900",
          "transition-[border-color,box-shadow] duration-160 ease-warm motion-reduce:transition-none",
          "placeholder:text-ink-300",
          error
            ? "border-error focus-visible:border-error"
            : "border-ink-100 hover:border-ink-300 focus-visible:border-primary-700",
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-body-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
});
