import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ReserveForm } from "./ReserveForm";
import { tierEnum } from "@/lib/leadSchema";
import { LEGACY_TIER_MAP, type TierId } from "@/content/pricing";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reserve your qurbaani",
  description: `Reserve your ${site.eidDateLabel} qurbaani in three minutes.`,
  robots: { index: false, follow: true },
};

type SearchParams = { tier?: string };

export default function ReservePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Resolve `?tier=` against the 2026 enum, then fall back to the legacy
  // 2025 map so old links still land on a sensible tier. Default to Deluxe
  // (the highlighted choice) when nothing matches.
  const rawTier = searchParams.tier;
  const parsed = tierEnum.safeParse(rawTier);
  let initialTier: TierId = "deluxe";
  if (parsed.success) {
    initialTier = parsed.data;
  } else if (rawTier && LEGACY_TIER_MAP[rawTier]) {
    initialTier = LEGACY_TIER_MAP[rawTier];
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-cream-50">
        <Container size="narrow" className="pt-10 pb-20 lg:pt-16 lg:pb-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-body-sm text-ink-500 hover:text-ink-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Back to home
          </Link>

          <header className="mt-6 space-y-4">
            <h1 className="font-serif text-display-lg font-normal text-ink-900 text-balance">
              Reserve your qurbaani.
            </h1>
            <p className="text-body-lg text-ink-700 max-w-[52ch]">
              Four fields. We will confirm your slot on WhatsApp within one business day.
            </p>
          </header>

          <div className="mt-10">
            <ReserveForm initialTier={initialTier} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
