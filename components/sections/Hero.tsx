"use client";

import Image from "next/image";
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
  "From a licensed Ontario farm to your table.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <Container className="grid gap-8 pt-8 pb-14 sm:gap-10 sm:pt-12 sm:pb-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-10 md:pt-16 md:pb-20 lg:gap-16 lg:pt-24 lg:pb-32">
        <div className="flex flex-col gap-6 sm:gap-7">
          <h1
            className="font-serif text-display-xl font-normal text-ink-900 text-balance animate-fade-up motion-reduce:animate-none [animation-duration:320ms]"
            style={{ animationDelay: "0ms" }}
          >
            {headline}
          </h1>
          <p
            className="text-body-lg text-ink-700 text-pretty max-w-[52ch] animate-fade-up motion-reduce:animate-none [animation-duration:320ms]"
            style={{ animationDelay: "40ms" }}
          >
            {subheadline}
          </p>

          <div
            className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-2 animate-fade-up motion-reduce:animate-none [animation-duration:320ms]"
            style={{ animationDelay: "100ms" }}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => track("cta_reserve_click", { location: "hero" })}
            >
              <Link href="#pricing">Reserve your qurbaani</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="self-start sm:self-auto">
              <Link href="#how-it-works" className="group inline-flex items-center gap-2">
                See how it works
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-160 ease-warm group-hover:translate-x-1 motion-reduce:transition-none"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

          <p
            className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500 animate-fade-up motion-reduce:animate-none [animation-duration:320ms]"
            style={{ animationDelay: "160ms" }}
          >
            HMA-certified halal <span aria-hidden="true">•</span> Hand-slaughter, no stunning <span aria-hidden="true">•</span> Founded by a Muslim brother in Ontario <span aria-hidden="true">•</span> Same-day delivery across the GTA
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-lg bg-cream-100 shadow-md aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/5] lg:aspect-[4/3] animate-fade-up motion-reduce:animate-none [animation-duration:320ms]"
      style={{ animationDelay: "80ms" }}
    >
      <Image
        src="/images/hero-hands-parcel.png"
        alt="Two hands passing a wrapped parcel of meat across a wooden surface, golden hour light."
        fill
        priority
        sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKgAH//Z"
        className="object-cover transition-transform duration-480 ease-warm group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:transform-none"
      />
    </div>
  );
}
