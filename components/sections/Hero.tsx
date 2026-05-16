"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { track } from "@/lib/analytics";

// Three headline variants for A/B testing. Variant A ships first; the others
// are kept here so the test harness can swap them in week two.
//
// A — intention-led:     "Your qurbaani, witnessed. Your intention, honored."
// B — distribution-led:  "The qurbaani your family deserves — and the meat your neighbours need."
// C — calm-confidence:   "Reserve your sacrifice. Keep your portion in Canada."
const headline = "Your qurbaani, witnessed. Your intention, honored.";

const subheadline =
  "From a licensed Ontario farm to your table — and to a GTA refugee family who receives the needy portion, with photo confirmation.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <Container className="grid gap-12 pt-12 pb-20 md:pt-20 md:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-32">
        <div className="flex flex-col gap-7 animate-fade-up">
          <h1 className="font-serif text-display-xl font-normal text-ink-900 text-balance">
            {headline}
          </h1>
          <p className="text-body-lg text-ink-700 text-pretty max-w-[52ch]">
            {subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              onClick={() => track("cta_reserve_click", { location: "hero" })}
            >
              <Link href="#pricing">Reserve your qurbaani</Link>
            </Button>
            <Button asChild size="lg" variant="link">
              <Link href="#how-it-works" className="group inline-flex items-center gap-2">
                See how it works
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

          <p className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
            Licensed Ontario abattoir <span aria-hidden="true">·</span> Halal certified{" "}
            <span aria-hidden="true">·</span> Local 1/3 distribution
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

// PHOTO NEEDED: warm golden-hour shot of two hands — one elder, one younger —
// placing wrapped meat into a brown paper bag on a wooden surface. Shallow
// depth of field. No faces. 4:3 desktop, 4:5 mobile. Avoid blood or knives.
function HeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-cream-100 shadow-md aspect-[4/5] lg:aspect-[4/3]">
      <div
        className="absolute inset-0 grid place-items-center text-center px-8"
        aria-hidden="true"
      >
        <div className="space-y-2 text-ink-500">
          <p className="text-caption font-medium uppercase tracking-[0.08em]">Photo needed</p>
          <p className="text-body-sm max-w-[40ch] mx-auto">
            Two hands passing a wrapped parcel of meat across a wooden surface, golden hour
            light. No faces, no visible blood. See implementation plan §3.2.
          </p>
        </div>
      </div>
    </div>
  );
}
