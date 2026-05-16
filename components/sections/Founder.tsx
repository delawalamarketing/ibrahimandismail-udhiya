import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Founder() {
  return (
    <Section surface="cream" spacing="default">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
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
          </div>

          {/* PHOTO NEEDED: environmental portrait of the real founder, warm
              natural light, looking slightly off-camera. At a farm, at home,
              or in a community space — not in a studio. Aspect 4:5. */}
          <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:mx-0 overflow-hidden rounded-lg bg-cream-100 shadow-md order-1 lg:order-2">
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
