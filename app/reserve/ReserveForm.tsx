"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { leadSchema, type LeadInput } from "@/lib/leadSchema";
import { tiers, type TierId } from "@/content/pricing";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  initialTier?: TierId;
};

export function ReserveForm({ initialTier = "witness" }: Props) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { tier: initialTier, website: "" },
  });

  const selectedTier = watch("tier");

  const onSubmit = async (data: LeadInput) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      track("lead_submit", { tier: data.tier });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or WhatsApp us — we will respond personally.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary-100 bg-white p-8 sm:p-10 shadow-sm">
        <h2 className="font-serif text-display-md font-normal text-ink-900">
          Reservation received.
        </h2>
        <p className="mt-4 text-body-lg text-ink-700 max-w-[52ch]">
          JazakAllah khair. We will reach out on WhatsApp within one business day to confirm
          your slot and arrange pickup or delivery.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <WhatsAppButton
            location="reserve-success"
            message={`Assalamu alaikum, I just reserved a ${selectedTier} qurbaani for ${site.eidDateLabel}.`}
          >
            Open WhatsApp now
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg border border-ink-100 bg-white p-7 sm:p-10 shadow-sm"
    >
      <fieldset className="space-y-2">
        <legend className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
          Choose your tier
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {tiers.map((tier) => (
            <label
              key={tier.id}
              className={cn(
                "flex cursor-pointer flex-col gap-1 rounded-md border p-4 transition-colors",
                selectedTier === tier.id
                  ? "border-accent-500 bg-cream-100 ring-1 ring-accent-500"
                  : "border-ink-100 hover:border-primary-500",
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

      {status === "error" && (
        <p role="alert" className="mt-6 text-body-sm text-error">
          {errorMessage}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="sm:flex-shrink-0"
        >
          {status === "submitting" ? "Sending…" : "Send my reservation"}
        </Button>
        <p className="text-body-sm text-ink-500 max-w-[42ch]">
          Pickup or delivery, exact cuts, and any custom notes are handled by WhatsApp after
          we confirm your slot.
        </p>
      </div>
    </form>
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
          "h-12 rounded-sm border bg-white px-4 text-body text-ink-900 transition-colors",
          "placeholder:text-ink-300",
          error
            ? "border-error focus-visible:border-error"
            : "border-ink-100 focus-visible:border-primary-700",
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
