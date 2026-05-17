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
            Last updated: May 17, 2026
          </p>
          <div className="mt-8 space-y-4 text-body text-ink-700 max-w-prose">
            <p>
              We offer a <strong className="text-ink-900">full refund</strong> if cancelled 14 or more days before Eid.
            </p>
            <p>
              Within 14 days of Eid, refunds are <strong className="text-ink-900">not available</strong> (unless Ibrahim and Ismail is unable to fulfill the sacrifice), as your animal has already been reserved and purchased at the farm.
            </p>
            <p>
              <strong className="text-ink-900">Severe weather:</strong> If the farm is unreachable due to a declared weather emergency, your qurbaani is fulfilled on schedule and you will receive video documentation. The meat will be held in cold storage and delivered once roads reopen or when it is safe to collect. No refunds are given for weather, as the qurbaani is completed.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
