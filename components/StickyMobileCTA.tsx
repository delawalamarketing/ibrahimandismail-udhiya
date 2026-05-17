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
    // Show the CTA once the user has scrolled past the hero. The sentinel
    // sits at the bottom of the Hero; we read its position on every scroll.
    // (IntersectionObserver was tempting but doesn't fire when the user
    // jumps past the sentinel via an anchor scroll — the intersection state
    // never transitions, so the callback is silent.)
    const heroSentinel = document.getElementById("hero-end-sentinel");
    const update = () => {
      if (heroSentinel) {
        setVisible(heroSentinel.getBoundingClientRect().top < 0);
      } else {
        setVisible(window.scrollY > 600);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 lg:hidden",
        "border-t border-ink-100 bg-cream-50/95 backdrop-blur",
        "transition-transform motion-reduce:transition-none",
        // Asymmetric easing: appear deliberately, leave efficiently.
        visible
          ? "translate-y-0 duration-280 ease-warm"
          : "translate-y-full duration-200 ease-exit",
        "pb-[env(safe-area-inset-bottom)]",
      )}
    >
      <div className="mx-auto flex max-w-screen-sm items-center gap-3 px-4 py-3">
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
