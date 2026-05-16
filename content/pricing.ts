export type TierId = "local" | "witness" | "concierge";

export type Tier = {
  id: TierId;
  name: string;
  price: number;
  priceLabel: string;
  promise: string;
  features: string[];
  highlighted?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "local",
    name: "Local",
    price: 699,
    priceLabel: "$699",
    promise:
      "A complete qurbaani from a licensed Ontario farm, with proof of dhabihah.",
    features: [
      "Lamb or goat from a licensed Ontario farm",
      "Standard cut, butcher-prepared",
      "WhatsApp photo and dhabihah video sent the same day",
      "Pickup included; home delivery within GTA: +$60",
      "Halal certified",
    ],
  },
  {
    id: "witness",
    name: "Witness",
    price: 799,
    priceLabel: "$799",
    promise:
      "Be present, in comfort, for your own qurbaani — or watch HD video of your named sacrifice.",
    highlighted: true,
    features: [
      "Everything in Local",
      "Reserved time slot — no waiting",
      "Indoor waiting area with chai for your family",
      "You say your own intention before the dhabihah",
      "HD video and photographs of your named sacrifice",
      "Family-safe viewing area for children",
      "Vacuum-sealed cuts, ready for the freezer",
    ],
  },
  {
    id: "concierge",
    name: "Concierge",
    price: 1199,
    priceLabel: "$1,199",
    promise:
      "Premium tayyib animal, white-glove delivery, and a needy portion delivered to a GTA refugee family in your name.",
    features: [
      "Everything in Witness",
      "Premium tayyib animal — pasture-raised, antibiotic-free",
      "Custom cut to your specification",
      "Vacuum-sealed, labelled, freezer-ready portions",
      "Free cold-chain home delivery within the GTA",
      "Needy third delivered to a GTA refugee family, with photo confirmation in your name",
      "Priority Day 1 Eid slot",
      "Digital Qurbaani Certificate",
    ],
  },
];

export const tierById = (id: TierId): Tier => {
  const tier = tiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Unknown tier: ${id}`);
  return tier;
};
