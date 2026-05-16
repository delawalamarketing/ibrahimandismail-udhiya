import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  surface?: "cream" | "white" | "primary" | "primary-deep";
  spacing?: "default" | "compact" | "loose";
};

const surfaceClasses: Record<NonNullable<SectionProps["surface"]>, string> = {
  cream: "bg-cream-50 text-ink-900",
  white: "bg-white text-ink-900",
  primary: "bg-primary-700 text-cream-50",
  "primary-deep": "bg-primary-900 text-cream-50",
};

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  compact: "py-12 sm:py-16 lg:py-20",
  default: "py-16 sm:py-20 lg:py-28",
  loose: "py-20 sm:py-28 lg:py-32",
};

export function Section({
  className,
  surface = "cream",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(surfaceClasses[surface], spacingClasses[spacing], className)}
      {...props}
    />
  );
}
