import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream-50">
        <Container size="narrow" className="py-16 lg:py-24">
          <h1 className="font-serif text-display-lg font-normal text-ink-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-body-sm text-ink-500">
            [PLACEHOLDER] This stub exists so that footer links resolve. Replace with a
            lawyer-reviewed privacy policy before launch (see implementation plan §9).
          </p>
          <div className="mt-8 space-y-4 text-body text-ink-700 max-w-prose">
            <p>
              {site.name} collects only the information you provide on the reservation form
              — your name, phone number, email, and the tier you have selected. We use this
              information solely to confirm your qurbaani and arrange pickup or delivery.
            </p>
            <p>
              We do not sell or share your information with third parties for marketing
              purposes. We may use analytics tools to understand how visitors use this
              website; those tools collect aggregated, non-personally-identifying data.
            </p>
            <p>
              To request deletion of your information, email{" "}
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@ibrahimandismail.ca"}`}
              >
                our team
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
