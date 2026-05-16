import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PhoneOff, Globe, Eye } from "lucide-react";

const cards = [
  {
    icon: PhoneOff,
    heading: "Phone trees and no-shows",
    body: "Most GTA abattoirs only take bookings by phone — and only when someone picks up. You shouldn't have to redial twenty times to fulfill an act of worship.",
  },
  {
    icon: Globe,
    heading: "Your portion, on another continent",
    body: "Major charities ship the needy portion overseas. There is barakah in that — and there is also need in your own city.",
  },
  {
    icon: Eye,
    heading: "No proof your name was said",
    body: "When the dhabihah is performed without you present, you receive nothing more than a confirmation text. We think you deserve to see it.",
  },
];

export function ProblemStrip() {
  return (
    <Section surface="cream" spacing="compact">
      <Container>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.heading}
              className="flex flex-col gap-4 rounded-md border border-ink-100 bg-white p-7 shadow-sm"
            >
              <card.icon
                className="h-7 w-7 text-primary-700"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-heading-md font-semibold text-ink-900">{card.heading}</h3>
              <p className="text-body text-ink-700">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
