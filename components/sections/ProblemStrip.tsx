import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneOff, Globe, Eye } from "lucide-react";

const cards = [
  {
    icon: PhoneOff,
    heading: "Endless redials & unanswered lines",
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
    body: "When the dhabihah is performed without you present, you receive nothing more than a confirmation text. We think you deserve to witness it.",
  },
];

export function ProblemStrip() {
  return (
    <Section surface="cream" spacing="compact">
      <Container>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card, i) => (
            <Reveal
              key={card.heading}
              as="article"
              delay={i * 80}
              className="group flex flex-col gap-4 rounded-md border border-ink-100 bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-220 ease-warm hover:-translate-y-[2px] hover:border-primary-500 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <card.icon
                className="h-7 w-7 text-primary-700 transition-transform duration-220 ease-warm group-hover:rotate-[-3deg] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-heading-md font-semibold text-ink-900">{card.heading}</h3>
              <p className="text-body text-ink-700">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
