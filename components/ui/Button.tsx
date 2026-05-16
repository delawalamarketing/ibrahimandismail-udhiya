import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-cream-50 shadow-cta hover:bg-accent-700 focus-visible:ring-accent-500",
  secondary:
    "bg-transparent text-primary-700 ring-1 ring-inset ring-primary-700 hover:bg-primary-100",
  ghost:
    "bg-transparent text-primary-700 hover:bg-primary-100",
  link:
    "bg-transparent text-primary-700 underline-offset-4 hover:underline px-0 py-0 shadow-none",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-body-sm",
  md: "h-11 px-5 text-body",
  lg: "h-14 px-7 text-body-lg",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          variant !== "link" && sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
