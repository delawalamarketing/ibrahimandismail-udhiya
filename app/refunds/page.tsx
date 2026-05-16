import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Refunds",
  robots: { index: false, follow: false },
};

export default function RefundsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream-50">
        <Container size="narrow" className="py-16 lg:py-24">
          <h1 className="font-serif text-display-lg font-normal text-ink-900">
            Refund Policy
          </h1>
          <p className="mt-4 text-body-sm text-ink-500">
            [PLACEHOLDER] This stub mirrors the FAQ summary. Replace with the
            lawyer-reviewed, final-form policy before launch (see implementation plan §9).
          </p>
          <div className="mt-8 space-y-4 text-body text-ink-700 max-w-prose">
            <p>
              <strong className="text-ink-900">14 or more days before Eid:</strong> Full
              refund.
            </p>
            <p>
              <strong className="text-ink-900">7 to 13 days before Eid:</strong> 50% refund.
            </p>
            <p>
              <strong className="text-ink-900">Within 7 days of Eid:</strong> No refund — your
              animal has been reserved at the farm.
            </p>
            <p>
              Severe weather: if the farm is unreachable due to a declared weather
              emergency, your qurbaani is fulfilled on schedule and the meat is held in cold
              storage until you can collect or we can deliver. No refunds for weather, as the
              qurbaani is fulfilled.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
