"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Row = {
  label: string;
  overseas: string;
  gtaFarm: string;
  ours: string;
};

const rows: Row[] = [
  {
    label: "Where the meat goes",
    overseas: "Overseas",
    gtaFarm: "You + assembly-line distribution",
    ours: "You + where you decide to donate",
  },
  {
    label: "Witnessing",
    overseas: "Not possible",
    gtaFarm: "Restricted",
    ours: "Reserved time slot, separate family area (subject to availability)",
  },
  {
    label: "Named dhabihah",
    overseas: "Generic batch",
    gtaFarm: "Generic batch",
    ours: "Your name, with HD video proof (subject to availability)",
  },
  {
    label: "Pricing transparency",
    overseas: "Variable",
    gtaFarm: "Phone-only quotes",
    ours: "Clear online pricing",
  },
  {
    label: "Same-day meat",
    overseas: "N/A",
    gtaFarm: "1–2 days after Eid",
    ours: "Same-day delivery",
  },
  {
    label: "1/3 needy portion",
    overseas: "Overseas",
    gtaFarm: "Unverified",
    ours: "Where you choose to donate",
  },
  {
    label: "Halal certification",
    overseas: "Varies",
    gtaFarm: "Often unclear",
    ours: "HMA Canada (certified)",
  },
];

export function CompareTable() {
  // One-shot bloom on the "Ibrahim and Ismail" column when it first scrolls
  // into view — the only "look here" animation on the page. Earns it because
  // this column is the central thesis of the comparison.
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const [bloomed, setBloomed] = React.useState(false);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBloomed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section surface="cream" spacing="default" className="blend-from-white">
      <Container>
        <Reveal as="div" className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Where your qurbaani goes — and what you get back.
          </h2>
        </Reveal>

        {/* Desktop table — lg+ only. iPad portrait (md) gets the stacked
            cards below, where 7 rows × 4 columns at 768px feels cramped. */}
        <Reveal as="div" className="hidden lg:block mt-12">
          <div
            ref={sentinelRef}
            className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm"
          >
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-100">
                  <th className="w-1/4 p-5 text-caption font-medium uppercase tracking-[0.08em] text-ink-500" />
                  <th className="w-1/4 p-5 text-heading-md font-semibold text-ink-700">
                    Overseas charity
                  </th>
                  <th className="w-1/4 p-5 text-heading-md font-semibold text-ink-700">
                    Typical GTA farm
                  </th>
                  <th
                    className={cn(
                      "w-1/4 p-5 text-heading-md font-semibold text-primary-700",
                      bloomed
                        ? "bg-cream-100 animate-bloom-bg-once motion-reduce:animate-none"
                        : "bg-transparent motion-reduce:bg-cream-100",
                    )}
                  >
                    Ibrahim and Ismail
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "transition-colors duration-160 ease-warm hover:bg-cream-50",
                      i < rows.length - 1 ? "border-b border-ink-100" : "",
                    )}
                  >
                    <th
                      scope="row"
                      className="p-5 text-body-sm font-medium text-ink-900 align-top"
                    >
                      {row.label}
                    </th>
                    <td className="p-5 text-body-sm text-ink-700 align-top">
                      {row.overseas}
                    </td>
                    <td className="p-5 text-body-sm text-ink-700 align-top">
                      {row.gtaFarm}
                    </td>
                    <td
                      className={cn(
                        "p-5 text-body-sm text-ink-900 align-top font-medium",
                        bloomed
                          ? "bg-cream-100 animate-bloom-bg-once motion-reduce:animate-none"
                          : "bg-transparent motion-reduce:bg-cream-100",
                      )}
                    >
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Stacked cards — phone and tablet portrait (below lg). */}
        <div className="lg:hidden mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Overseas charity", key: "overseas" as const, highlight: false },
            { label: "Typical GTA farm", key: "gtaFarm" as const, highlight: false },
            { label: "Ibrahim and Ismail", key: "ours" as const, highlight: true },
          ].map((col, i) => (
            <Reveal
              key={col.label}
              as="article"
              delay={i * 80}
              className={cn(
                "rounded-md border p-5 transition-[transform,box-shadow] duration-220 ease-warm hover:-translate-y-[2px] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                col.highlight
                  ? "border-primary-500 bg-cream-100 sm:col-span-2"
                  : "border-ink-100 bg-white",
              )}
            >
              <h3
                className={`text-heading-md font-semibold ${col.highlight ? "text-primary-700" : "text-ink-700"
                  }`}
              >
                {col.label}
              </h3>
              <dl className="mt-4 space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="flex flex-col">
                    <dt className="text-caption font-medium uppercase tracking-[0.08em] text-ink-500">
                      {row.label}
                    </dt>
                    <dd className="text-body-sm text-ink-900 mt-1">{row[col.key]}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
