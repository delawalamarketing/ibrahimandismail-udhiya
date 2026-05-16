import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream-50">
        <Container size="narrow" className="py-16 lg:py-24">
          <h1 className="font-serif text-display-lg font-normal text-ink-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-body-sm text-ink-500">
            [PLACEHOLDER] This stub exists so that footer links resolve. Replace with a
            lawyer-reviewed terms of service before launch (see implementation plan §9).
          </p>
          <div className="mt-8 space-y-4 text-body text-ink-700 max-w-prose">
            <p>
              By reserving a qurbaani through this website, you agree to provide accurate
              contact information and to communicate with our team in good faith to confirm
              and fulfill your order.
            </p>
            <p>
              Animal availability, slot times, and delivery windows are subject to farm
              capacity and confirmed only after our team replies to your reservation.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
