import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    n: 1,
    heading: "Reserve online",
    body: "Pick your tier. Tell us pickup or delivery. Three minutes.",
  },
  {
    n: 2,
    heading: "WhatsApp confirmation",
    body: "We confirm your slot and answer questions in the channel you actually use.",
  },
  {
    n: 3,
    heading: "Witness or watch",
    body: "On Eid morning, come to the farm at your scheduled time — or receive the HD video of your named sacrifice within hours.",
  },
  {
    n: 4,
    heading: "Meat home, donation delivered",
    body: "Vacuum-sealed cuts to your door. On Concierge, a photo of the needy portion in a GTA family's hands.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" surface="white" spacing="default">
      <Container>
        <div className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Four steps from reservation to your Eid table.
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col gap-3">
              <span
                className="font-serif text-[48px] leading-none font-normal text-accent-500"
                aria-hidden="true"
              >
                {String(step.n).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-heading-lg font-medium text-ink-900">
                {step.heading}
              </h3>
              <p className="text-body text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* [PLACEHOLDER] Commission custom thin-line illustrations per step
            (see implementation plan §3.7). Until they land, numerals carry
            the rhythm. */}
      </Container>
    </Section>
  );
}
