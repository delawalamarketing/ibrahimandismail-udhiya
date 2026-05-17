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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-cream-50/95 backdrop-blur transition-shadow",
        scrolled
          ? "shadow-sm border-b border-ink-100"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[60px] md:h-[72px] w-full max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-col leading-tight min-w-0"
          aria-label={`${site.name} home`}
        >
          <span className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-medium text-ink-900 truncate">
            {site.name}
          </span>
          <span className="hidden sm:block text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-ink-700 hover:text-ink-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
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
