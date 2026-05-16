import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/testimonials";

// Renders nothing until real testimonials are collected. A missing section is
// more trustworthy than a fabricated one.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section surface="white" spacing="default">
      <Container>
        <div className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            From the families we have served.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={`${t.firstName}-${i}`}
              className="relative flex flex-col gap-5 rounded-md border border-ink-100 bg-cream-50 p-7"
            >
              <span
                className="absolute top-4 left-5 font-serif text-[48px] leading-none text-accent-200 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="text-body text-ink-900 pt-6">{t.quote}</blockquote>
              <figcaption className="text-body-sm text-ink-500">
                <span className="font-medium text-ink-900">
                  {t.firstName} {t.lastInitial}.
                </span>
                {" — "}
                {t.neighbourhood} <span aria-hidden="true">·</span> {t.tier} {t.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
