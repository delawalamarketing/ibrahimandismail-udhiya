"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/env";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  location: string;
  className?: string;
  variant?: "icon" | "full";
  children?: React.ReactNode;
};

export function WhatsAppButton({
  message,
  location,
  className,
  variant = "full",
  children,
}: Props) {
  const href = whatsappLink(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      onClick={() => track("whatsapp_click", { location })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-medium",
        "transition-[transform,background-color,box-shadow] duration-160 ease-warm",
        "motion-reduce:transition-none motion-reduce:hover:transform-none",
        "hover:-translate-y-[1px] hover:shadow-md",
        variant === "icon"
          ? "h-11 w-11 bg-primary-700 text-cream-50 hover:bg-primary-900"
          : "h-11 px-5 text-body bg-primary-700 text-cream-50 hover:bg-primary-900",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      {variant === "full" && (children ?? "WhatsApp us")}
    </a>
  );
}
