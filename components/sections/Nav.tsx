"use client";

import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { env, telLink } from "@/lib/env";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  // Smoothed scroll progress 0..1 across the first 24px so the nav shadow
  // ramps in rather than snapping on.
  const [shadowProgress, setShadowProgress] = React.useState(0);
  // Active section id, driven by IntersectionObserver on anchor targets.
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () =>
      setShadowProgress(Math.min(1, Math.max(0, window.scrollY / 24)));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = nav.links
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      // The "active" zone is the band between 72px (under the nav) and 50% of viewport.
      { rootMargin: "-72px 0px -50% 0px", threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur"
      style={{
        boxShadow: `0 1px 2px rgba(31, 27, 22, ${0.04 * shadowProgress})`,
        borderBottom: `1px solid rgba(232, 227, 217, ${shadowProgress})`,
      }}
    >
      <div className="mx-auto flex h-[60px] md:h-[72px] w-full max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-tight min-w-0"
          aria-label={`${site.name} home`}
        >
          <span className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-medium text-ink-900 transition-colors duration-160 ease-warm group-hover:text-primary-700 truncate">
            {site.name}
          </span>
          <span className="hidden sm:block text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
            {site.tagline}
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Primary"
        >
          {nav.links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive ? "true" : "false"}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "nav-underline text-body transition-colors duration-160 ease-warm",
                  isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={telLink}
            onClick={() => track("phone_click", { location: "nav" })}
            className="hidden lg:inline-flex items-center gap-2 text-body text-ink-700 hover:text-ink-900 transition-colors"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {env.phoneDisplay}
          </a>
          <WhatsAppButton
            location="nav"
            variant="icon"
            className="lg:hidden h-10 w-10 sm:h-11 sm:w-11"
            message={`Assalamu alaikum, I'd like to reserve a qurbaani for ${site.eidDateLabel}.`}
          />
          <Button
            asChild
            size="sm"
            className="h-10 sm:h-11 sm:px-5 sm:text-body"
            onClick={() => track("cta_reserve_click", { location: "nav" })}
          >
            <Link href="#pricing">Reserve</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
