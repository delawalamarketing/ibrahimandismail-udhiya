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

// Single shared IntersectionObserver for every <Reveal> on the page.
// Cheaper than spinning up an observer per element (was 87+ instances).
type Cb = () => void;
const callbacks = new WeakMap<Element, Cb>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            sharedObserver!.unobserve(entry.target);
          }
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  return sharedObserver;
}

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
    const obs = getObserver();
    callbacks.set(el, () => setVisible(true));
    obs.observe(el);
    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  return React.createElement(
    Tag,
    {
      ref: ref as React.RefObject<HTMLElement>,
      className: cn(
        "transition-[opacity,transform] duration-320 ease-warm motion-reduce:transition-none",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className,
      ),
      style: { transitionDelay: `${delay}ms`, willChange: visible ? "auto" : "opacity, transform" },
      ...rest,
    },
    children,
  );
}
