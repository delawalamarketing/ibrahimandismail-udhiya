import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Row = {
  label: string;
  overseas: string;
  gtaFarm: string;
  ours: string;
};

const rows: Row[] = [
  {
    label: "Where the needy portion goes",
    overseas: "Another country",
    gtaFarm: "Returned to you to distribute",
    ours: "GTA refugee family, with photo confirmation",
  },
  {
    label: "Your physical witness",
    overseas: "Not possible",
    gtaFarm: "If you can take the day off",
    ours: "Reserved slot in a family-safe viewing area, or HD video of your named sacrifice",
  },
  {
    label: "Proof your intention was said",
    overseas: "None",
    gtaFarm: "None",
    ours: "Recorded, named dhabihah video",
  },
  {
    label: "Booking",
    overseas: "Online",
    gtaFarm: "Phone only, often unanswered",
    ours: "Online in under three minutes",
  },
  {
    label: "Animal sourcing",
    overseas: "Varies by country",
    gtaFarm: "Often unspecified",
    ours: "Named Ontario farm, pasture-raised on Concierge tier",
  },
  {
    label: "Eid-day customer experience",
    overseas: "None — you are not there",
    gtaFarm: "Wait outside in any weather",
    ours: "Indoor waiting area, chai, scheduled time",
  },
  {
    label: "Pricing transparency",
    overseas: "Donation amount only",
    gtaFarm: "Quoted on the phone",
    ours: "Three tiers, posted publicly",
  },
];

export function CompareTable() {
  return (
    <Section surface="cream" spacing="default">
      <Container>
        <div className="max-w-narrow">
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Where your qurbaani goes — and what you get back.
          </h2>
        </div>

        {/* Desktop table — lg+ only. iPad portrait (md) gets the stacked
            cards below, where 7 rows × 4 columns at 768px feels cramped. */}
        <div className="hidden lg:block mt-12 overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm">
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
                <th className="w-1/4 p-5 text-heading-md font-semibold text-primary-700 bg-cream-100">
                  Ibrahim and Ismail
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < rows.length - 1 ? "border-b border-ink-100" : ""}
                >
                  <th
                    scope="row"
                    className="p-5 text-body-sm font-medium text-ink-900 align-top"
                  >
                    {row.label}
                  </th>
                  <td className="p-5 text-body-sm text-ink-700 align-top">{row.overseas}</td>
                  <td className="p-5 text-body-sm text-ink-700 align-top">{row.gtaFarm}</td>
                  <td className="p-5 text-body-sm text-ink-900 align-top bg-cream-100 font-medium">
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards — phone and tablet portrait (below lg). */}
        <div className="lg:hidden mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Overseas charity", key: "overseas" as const, highlight: false },
            { label: "Typical GTA farm", key: "gtaFarm" as const, highlight: false },
            { label: "Ibrahim and Ismail", key: "ours" as const, highlight: true },
          ].map((col) => (
            <article
              key={col.label}
              className={`rounded-md border p-5 ${
                col.highlight
                  ? "border-primary-500 bg-cream-100 sm:col-span-2"
                  : "border-ink-100 bg-white"
              }`}
            >
              <h3
                className={`text-heading-md font-semibold ${
                  col.highlight ? "text-primary-700" : "text-ink-700"
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
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
