import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eye, Leaf, Wheat } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    heading: "Witnessed",
    body: "You — or a recorded HD video that includes your name and your intention — are present for the dhabihah. No anonymous ledger entries.",
  },
  {
    icon: Leaf,
    heading: "Local",
    body: "Animals are raised on licensed Ontario farms. The needy third stays in the GTA, delivered with photo confirmation to families who need it now.",
  },
  {
    icon: Wheat,
    heading: "Tayyib",
    body: "Beyond halal: pasture-raised, antibiotic-free animals from farms we visit ourselves. Quality you can taste at the Eid table.",
  },
];

export function Pillars() {
  return (
    <Section surface="white" spacing="default">
      <Container>
        <div className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Three commitments we keep, every Eid.
          </h2>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.heading} className="flex flex-col gap-4">
              <pillar.icon
                className="h-12 w-12 text-primary-700"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="font-serif text-heading-lg font-medium text-ink-900">
                {pillar.heading}
              </h3>
              <p className="text-body text-ink-700 max-w-[42ch]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
