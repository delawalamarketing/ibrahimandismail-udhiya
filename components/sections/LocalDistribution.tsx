"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { track } from "@/lib/analytics";

export function LocalDistribution() {
  return (
    <Section surface="primary-deep" spacing="loose">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-display-lg font-normal text-cream-50 text-balance">
              The portion that stays here.
            </h2>
            <div className="space-y-5 text-body-lg text-cream-100/95 max-w-[52ch]">
              <p>
                The Quran asks us to feed the needy with one-third of our qurbaani. For
                decades, that portion has crossed oceans. The intention is beautiful — and
                the families breaking their fast in Mississauga, Scarborough, and Etobicoke
                also have a claim on it.
              </p>
              <p>
                On Concierge, we deliver your needy third directly to a GTA refugee family —
                single mothers, recent arrivals, families between paycheques — through our
                partnership with{" "}
                <span className="text-cream-50 underline decoration-cream-200/40 decoration-1 underline-offset-4">
                  [VERIFY: partner organization]
                </span>
                . We send you a photograph of the moment the meat is received. Your sadaqah
                travels less than fifty kilometres, and you see where it lands.
              </p>
            </div>

            {/* [VERIFY] Stat callout — do not display until real numbers exist.
                Fallback line below ships until then. */}
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80 pt-2">
              Built for the first Eid we serve. Numbers we can stand behind, soon.
            </p>

            <div className="pt-2">
              <Link
                href="/reserve?tier=concierge"
                onClick={() => {
                  track("tier_selected", { tier: "concierge" });
                  track("cta_reserve_click", { location: "local-distribution" });
                }}
                className="group inline-flex items-center gap-2 text-body-lg text-cream-50 hover:text-cream-100 transition-colors"
              >
                Reserve Concierge
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* PHOTO NEEDED: a real moment of meat being received by a Canadian
              family in their home or at the door. Faces may be obscured. Warm
              interior light. Dignity, not pity. */}
          <div className="relative aspect-[4/5] lg:aspect-[5/4] w-full overflow-hidden rounded-lg bg-primary-700">
            <div
              className="absolute inset-0 grid place-items-center text-center px-8"
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
