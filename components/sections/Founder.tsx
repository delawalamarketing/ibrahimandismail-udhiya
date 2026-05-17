import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <Section surface="cream" spacing="default">
      <Container>
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-12 md:items-center lg:gap-16">
          <Reveal className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
              Why we started Ibrahim and Ismail.
            </h2>
            {/* PLACEHOLDER: one-paragraph founder story, written in the
                founder's voice. 100-140 words. Should answer: (1) what
                personal qurbaani experience went wrong, (2) what they wanted
                instead, (3) why local distribution mattered to them. */}
            <p className="text-body-lg text-ink-700 max-w-[58ch]">
              [PLACEHOLDER — replace with the founder&apos;s real story before launch.
              Write in first person, conversational, ending with the founder&apos;s first
              name as signature. Should answer: what went wrong with a past qurbaani, what
              they wanted instead, and why keeping the needy portion in the GTA matters to
              them personally. 100–140 words.]
            </p>
            <p className="font-serif text-heading-md text-ink-900">
              — [Founder first name]
            </p>
          </Reveal>

          {/* PHOTO NEEDED: environmental portrait of the real founder, warm
              natural light, looking slightly off-camera. At a farm, at home,
              or in a community space — not in a studio. Aspect 4:5. */}
          <Reveal
            delay={120}
            className="group relative aspect-[4/5] w-full max-w-[320px] sm:max-w-[360px] md:max-w-none mx-auto md:mx-0 overflow-hidden rounded-lg bg-cream-100 shadow-md order-1 md:order-2 transition-transform duration-320 ease-warm hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <div
              className="absolute inset-0 grid place-items-center text-center px-6"
              aria-hidden="true"
            >
              <div className="space-y-2 text-ink-500">
                <p className="text-caption font-medium uppercase tracking-[0.08em]">
                  Photo needed
                </p>
                <p className="text-body-sm max-w-[28ch] mx-auto">
                  Real founder portrait, environmental, warm natural light.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
