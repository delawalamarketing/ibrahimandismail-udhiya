"use client";

import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { env, telLink } from "@/lib/env";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  // One single shadow pulse on the primary CTA when the section first scrolls
  // into view. The page's single moment of earned emphasis at the close.
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPulse(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section surface="cream" spacing="loose">
      <Container size="narrow">
        <div ref={sectionRef} className="flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="font-serif text-display-lg font-normal text-ink-900 text-balance">
              Eid al-Adha begins Wednesday, May 27, 2026.
            </h2>
          </Reveal>
          <Reveal as="p" delay={120} className="text-body-lg text-ink-700 max-w-[52ch] text-pretty">
            Day 1 slots are limited and reserved for Deluxe bookings. Standard slots open
            across Day 2 and Day 3. The earlier you reserve, the better the slot.
          </Reveal>

          <Reveal
            as="div"
            delay={240}
            className="mt-2 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full sm:w-auto",
                pulse && "animate-pulse-cta-once motion-reduce:animate-none",
              )}
              onClick={() => track("cta_reserve_click", { location: "final" })}
            >
              <Link href="#pricing">Reserve your qurbaani</Link>
            </Button>
            <WhatsAppButton
              location="final"
              className="w-full sm:w-auto"
              message={`Assalamu alaikum, I'd like to reserve a qurbaani for ${site.eidDateLabel}.`}
            />
            <a
              href={telLink}
              onClick={() => track("phone_click", { location: "final" })}
              className="inline-flex items-center justify-center gap-2 h-11 text-body text-ink-700 hover:text-ink-900 transition-colors duration-160 ease-warm"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              {env.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
