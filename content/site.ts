// Single source of truth for cross-section facts. Anything marked VERIFY must be
// resolved against the real business before launch.

export const site = {
  name: "Ibrahim and Ismail",
  tagline: "Qurbaani, witnessed.",
  shortDescription:
    "Reserve your qurbaani from a licensed Ontario farm. Witness your sacrifice, receive HD video, and have the needy portion delivered to a GTA refugee family — with photo proof.",
  // [VERIFY] Confirm Eid al-Adha 2026 Gregorian date with local masjid.
  eidDateLabel: "Eid al-Adha 2026",
  eidDateLong: "on or about [VERIFY: confirm Hijri-calculated date with local masjid]",
  // [VERIFY] Confirm partner abattoir address, hours, and license number.
  abattoir: {
    name: "[VERIFY: partner abattoir name]",
    address: "[VERIFY: street address], Ontario",
    omafraLicense: "[VERIFY: OMAFRA license number]",
  },
  certifyingBody: "[VERIFY: HMA / IFANCA / HFCC — confirm in writing]",
  serviceArea: "Greater Toronto Area",
  cities: ["Toronto", "Mississauga", "Brampton", "Markham", "Scarborough", "Etobicoke"],
  hijriYear: "1447",
  gregorianYear: "2026",
};

export const nav = {
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
};
