"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  /** Delay in ms before the reveal animation starts. Used for stagger. */
  delay?: number;
  /** Tag to render. Defaults to div. */
  as?: "div" | "section" | "article" | "li" | "header" | "p" | "span";
  className?: string;
  /** ARIA attributes for accessibility. */
  "aria-hidden"?: boolean | "true" | "false";
};

// Scroll-triggered fade-up wrapper. On first viewport intersection, the
// element fades in and slides up 8px. The observer disconnects after the
// first reveal so the element never re-animates.
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  ...rest
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref: ref as React.RefObject<HTMLElement>,
      className: cn(
        "transition-all duration-480 ease-warm motion-reduce:transition-none",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className,
      ),
      style: { transitionDelay: `${delay}ms` },
      ...rest,
    },
    children,
  );
}
