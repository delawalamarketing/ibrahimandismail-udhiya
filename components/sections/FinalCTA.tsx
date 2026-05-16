"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { env, telLink } from "@/lib/env";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <Section surface="cream" spacing="loose">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="font-serif text-display-lg font-normal text-ink-900 text-balance">
            Reserve your qurbaani for {site.eidDateLabel}.
          </h2>
          {/* [VERIFY] Replace with real capacity + historical sellout window once
              known. Until then this honest placeholder ships. */}
          <p className="text-body-lg text-ink-700 max-w-[52ch] text-pretty">
            Reservations open early and slots are limited by the farm&apos;s daily capacity.
            The earlier you reserve, the better your slot.
          </p>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <Button
              asChild
              size="lg"
              onClick={() => track("cta_reserve_click", { location: "final" })}
            >
              <Link href="#pricing">Reserve your qurbaani</Link>
            </Button>
            <WhatsAppButton
              location="final"
              message={`Assalamu alaikum, I'd like to reserve a qurbaani for ${site.eidDateLabel}.`}
            />
            <a
              href={telLink}
              onClick={() => track("phone_click", { location: "final" })}
              className="inline-flex items-center gap-2 h-11 px-2 text-body text-ink-700 hover:text-ink-900"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              {env.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
