export type TierId = "standard" | "deluxe";

export type Tier = {
  id: TierId;
  name: string;
  price: number;
  priceLabel: string;
  promise: string;
  features: string[];
  highlighted?: boolean;
};

// Two-tier lineup for the 2026 season. Day of Eid is the primary
// differentiator; everything else is the same well-built offering.
// See implementation-pricing-2026.md for the rationale.
export const tiers: Tier[] = [
  {
    id: "standard",
    name: "Standard",
    price: 699,
    priceLabel: "$699",
    promise:
      "A complete qurbaani with your name and your chosen animal, on Day 2 or Day 3 of Eid.",
    features: [
      "Lamb or goat — your choice",
      "You pick your animal (In-Person or Video Call)",
      "Named dhabihah: your name and intention recited at slaughter",
      "Day 2 or Day 3 of Eid (request your preference)",
      "Butcher cut, food-grade packed",
      "Pickup included; home delivery within GTA: +$60",
      "HMA Canada certified",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe",
    price: 849,
    priceLabel: "$849",
    promise:
      "The earliest day, your animal, your name, and your cuts — delivered to your door.",
    highlighted: true,
    features: [
      "Everything in Standard",
      "Day 1 of Eid — the sunnah-preferred day",
      "Custom cuts to your specification (stew, chops, roast, boneless, mince fat preference)",
      "Vacuum-sealed, labelled, freezer-ready portions",
      "Free cold-chain home delivery within the GTA",
      "Priority slot selection",
      "Digital Qurbaani Certificate for your records",
    ],
  },
];

export const tierById = (id: TierId): Tier => {
  const tier = tiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Unknown tier: ${id}`);
  return tier;
};

// Legacy tier IDs from the 2025 season. Map old query params and stored leads
// to their 2026 equivalents so deep links don't 404.
export const LEGACY_TIER_MAP: Record<string, TierId> = {
  local: "standard",
  witness: "standard",
  concierge: "deluxe",
};
