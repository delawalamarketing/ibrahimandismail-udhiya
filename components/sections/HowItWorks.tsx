import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

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
    body: "On Eid morning, come to the farm at your scheduled time — or receive the HD video of your named sacrifice within hours (subject to availability due to government regulations).",
  },
  {
    n: 4,
    heading: "Meat home, donation delivered",
    body: "Vacuum-sealed cuts to your door. On Concierge, a photo of the needy portion in a GTA family's hands.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" surface="white" spacing="default" className="blend-from-cream">
      <Container>
        <Reveal as="div" className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Four steps from reservation to your Eid table.
          </h2>
        </Reveal>

        <div className="relative mt-12">
          {/* Hairline connector — draws left-to-right when the steps row reveals.
              Only on lg+ where the steps sit in a single row. */}
          <Reveal
            as="div"
            delay={400}
            className="hidden lg:block absolute top-[24px] left-[5%] right-[5%] h-px bg-ink-100 origin-left animate-draw-line motion-reduce:animate-none"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                as="li"
                delay={i * 80}
                className="group flex flex-col gap-3"
              >
                <span
                  className="font-serif text-[48px] leading-none font-normal text-accent-500 bg-white pr-3 inline-block transition-colors duration-220 ease-warm group-hover:text-accent-700"
                  aria-hidden="true"
                >
                  {String(step.n).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-heading-lg font-medium text-ink-900 transition-colors duration-220 ease-warm group-hover:text-primary-700">
                  {step.heading}
                </h3>
                <p className="text-body text-ink-700">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* [PLACEHOLDER] Commission custom thin-line illustrations per step
            (see implementation plan §3.7). Until they land, numerals carry
            the rhythm. */}
      </Container>
    </Section>
  );
}
