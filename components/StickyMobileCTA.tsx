"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Reveal once the hero scrolls fully out of view.
    const heroSentinel = document.getElementById("hero-end-sentinel");
    if (!heroSentinel) {
      // Fallback: show after 600px scroll.
      const onScroll = () => setVisible(window.scrollY > 600);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px -100% 0px" },
    );
    observer.observe(heroSentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "border-t border-ink-100 bg-cream-50/95 backdrop-blur",
        "transition-transform duration-200",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Button
          asChild
          size="md"
          className="flex-1"
          onClick={() => track("cta_reserve_click", { location: "sticky" })}
        >
          <Link href="#pricing">Reserve</Link>
        </Button>
        <WhatsAppButton
          location="sticky"
          variant="icon"
          message={`Assalamu alaikum, I'd like to reserve a qurbaani for ${site.eidDateLabel}.`}
        />
      </div>
    </div>
  );
}
