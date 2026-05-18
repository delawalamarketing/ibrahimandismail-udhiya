"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function LocalDistribution() {
  // Ken Burns only runs while the section is visible — pausing off-screen
  // avoids burning CPU on a continuously-looping transform. Gated by
  // prefers-reduced-motion as well.
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section surface="primary-deep" spacing="loose">
      <Container>
        <div
          ref={sectionRef}
          className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-12 md:items-center lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="font-serif text-display-lg font-normal text-cream-50 text-balance">
                The portion that stays here.
              </h2>
            </Reveal>
            <div className="space-y-5 text-body-lg text-cream-100/95 max-w-[52ch]">
              <Reveal as="p" delay={120}>
                The Quran asks us to feed the needy with one-third of our qurbaani. For
                decades, that portion has crossed oceans. The intention is beautiful — and
                you can also choose to keep it local or donate it to your choice of charity.
              </Reveal>
              <Reveal as="p" delay={240}>
                On every order, you can choose to donate your needy third to your choice of
                organization, ensuring your sadaqah goes exactly where you want it to help.
              </Reveal>
            </div>

            <Reveal
              as="p"
              delay={360}
              className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80 pt-2"
            >
              Our founding year: Committed to full transparency and verifiable local impact.
            </Reveal>

            <Reveal as="div" delay={420} className="pt-2">
              <Link
                href="#pricing"
                onClick={() => track("cta_reserve_click", { location: "local-distribution" })}
                className="group inline-flex items-center gap-2 text-body-lg text-cream-50 hover:text-cream-100 transition-colors duration-160 ease-warm"
              >
                See pricing
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-160 ease-warm group-hover:translate-x-1 motion-reduce:transition-none"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          {/* PHOTO NEEDED: a real moment of meat being received by a Canadian
              family in their home or at the door. Faces may be obscured. Warm
              interior light. Dignity, not pity. */}
          <Reveal
            as="div"
            delay={200}
            className="relative aspect-[3/2] md:aspect-[4/5] lg:aspect-[5/4] w-full overflow-hidden rounded-lg bg-primary-700"
          >
            <div
              className={cn(
                "absolute inset-0 grid place-items-center text-center px-8",
                active && "animate-ken-burns motion-reduce:animate-none",
              )}
              aria-hidden="true"
            >
              <div className="space-y-2 text-cream-200/80">
                <p className="text-caption font-medium uppercase tracking-[0.08em]">
                  Photo needed
                </p>
                <p className="text-body-sm max-w-[40ch] mx-auto">
                  Meat being received by a Canadian family. Warm interior light, dignity
                  in the moment. See implementation plan §3.8.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
