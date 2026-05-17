"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { tiers } from "@/content/pricing";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" surface="cream" spacing="default">
      <Container>
        <Reveal as="div" className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Three ways to fulfill your qurbaani.
          </h2>
          <p className="mt-4 text-body-lg text-ink-700">
            Choose the experience. We handle the rest.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-6 lg:grid-cols-3 lg:gap-7 lg:items-stretch">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              as="article"
              delay={i * 100}
              className={cn(
                "group relative flex flex-col rounded-lg bg-white p-6 sm:p-7 lg:p-8 shadow-sm",
                "transition-[transform,box-shadow] duration-220 ease-warm",
                "hover:-translate-y-1 hover:shadow-lg",
                "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                tier.highlighted
                  ? "border-2 border-accent-500 lg:scale-[1.02] lg:-translate-y-1 shadow-md lg:hover:-translate-y-[12px]"
                  : "border border-ink-100",
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent-500 px-3 py-1 text-caption font-medium uppercase tracking-[0.08em] text-cream-50">
                  Most chosen
                </span>
              )}

              <header className="space-y-3">
                <h3 className="font-serif text-heading-lg font-medium text-ink-900 transition-colors duration-220 ease-warm group-hover:text-primary-700">
                  {tier.name}
                </h3>
                <p className="font-serif text-display-md font-medium text-ink-900 transition-colors duration-220 ease-warm group-hover:text-accent-500">
                  {tier.priceLabel}
                </p>
                <p className="text-body text-ink-700 max-w-[34ch]">{tier.promise}</p>
              </header>

              <ul className="mt-7 space-y-3 flex-1">
                {tier.features.map((feature, fi) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-body text-ink-700 animate-fade-up motion-reduce:animate-none"
                    style={{ animationDelay: `${i * 100 + 300 + fi * 40}ms` }}
                  >
                    <Check
                      className="h-5 w-5 shrink-0 text-primary-700 mt-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    track("tier_selected", { tier: tier.id });
                    track("cta_reserve_click", { location: "pricing" });
                  }}
                >
                  <Link href={`/reserve?tier=${tier.id}`}>Reserve {tier.name}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-narrow text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
          Prices in CAD, all-in. {site.eidDateLabel} falls {site.eidDateLong}. Full refund up
          to 14 days before Eid. See the{" "}
          <Link href="/refunds" className="underline-offset-4 hover:underline text-ink-700 normal-case tracking-normal">
            refund policy
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
