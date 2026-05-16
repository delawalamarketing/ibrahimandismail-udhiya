// Single source of truth for the FAQ accordion AND the FAQPage schema.
// Keep answers in plain English, ~40-80 words. Mark contested or unverified
// claims explicitly.

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "halal-certification",
    question: "Who certifies your operation as halal?",
    answer:
      "[VERIFY: certifying body — HMA, IFANCA, or HFCC — and link to certificate. Do not name a body until written confirmation is on file.]",
  },
  {
    id: "madhahib",
    question:
      "Is the qurbaani acceptable across all four madhahib (Hanafi, Shafi'i, Maliki, Hanbali)?",
    answer:
      "Yes. The dhabihah is performed by a Muslim slaughterman by hand with a sharp blade, the name of Allah is pronounced over each animal, and the animal faces qibla. This satisfies the requirements of all four schools. [VERIFY: cite the specific scholar or board whose ruling you are relying on.]",
  },
  {
    id: "stunning",
    question: "What about stunning?",
    answer:
      "We do not pre-stun any animal in our qurbaani service. The dhabihah is performed on a fully conscious animal, by hand. This is a deliberate choice and the principal reason we partner with [VERIFY: partner abattoir name] specifically — many OMAFRA-licensed facilities require electrical stunning, and we work with one that permits exemption for religious slaughter under federal regulation. We are happy to discuss this directly on WhatsApp.",
  },
  {
    id: "payment-timing",
    question: "When is payment charged?",
    answer:
      "[VERIFY business decision: Phase 1 — deposit on reservation, balance on confirmation. Phase 2 — full charge on reservation via Stripe with refund window.]",
  },
  {
    id: "cuts",
    question: "What cuts will I receive?",
    answer:
      "On Local, a standard butcher cut — legs, shoulders, ribs, curry cut, mince — packed in food-grade bags. On Witness, the same cuts vacuum-sealed. On Concierge, you tell us how you cook (curry, roast, kebab) and we cut accordingly: legs whole, shoulders bone-in, ribs separated, mince to your fat preference.",
  },
  {
    id: "children",
    question: "Can my children attend the witnessing?",
    answer:
      "Yes, on Witness and Concierge tiers. We have a family-safe viewing area — the dhabihah itself is screened from view, but children can be present at the farm, hear the dua, and watch the meat being prepared afterward. Many families find this a meaningful Eid tradition.",
  },
  {
    id: "donation-proof",
    question: "How do I know my donated portion actually reached a family?",
    answer:
      "On Concierge, you receive a photograph by WhatsApp within 48 hours of Eid showing the meat being handed to a recipient family — face may be obscured for the family's privacy, but the location, packaging, and date are visible. We partner with [VERIFY: partner organization] for distribution.",
  },
  {
    id: "refunds",
    question: "What is your refund policy?",
    answer:
      "Full refund if cancelled 14 or more days before Eid. 50% refund 7 to 13 days before. No refund within 7 days, as your animal has been reserved at the farm. See the full refund policy for details.",
  },
  {
    id: "weather",
    question: "What if there is a severe weather event on Eid morning?",
    answer:
      "If the farm is unreachable due to declared weather emergency, your animal is sacrificed on schedule and you receive video documentation; the meat is held in cold storage and delivered when roads reopen, or you may collect when safe. No refunds for weather, as the qurbaani is fulfilled.",
  },
  {
    id: "missed-slot",
    question: "What if I miss my reserved slot?",
    answer:
      "Witness tier slots have a 20-minute grace window. After that, your sacrifice proceeds without you and you receive the HD video. We do not delay later families.",
  },
  {
    id: "languages",
    question: "Do you speak Urdu, Arabic, Somali, or Bengali?",
    answer:
      "Yes. Our WhatsApp line is staffed by people who speak [VERIFY: list real languages spoken by staff]. Phone calls in English.",
  },
  {
    id: "payment-methods",
    question: "How can I pay? Do you accept e-transfer?",
    answer:
      "Yes, Interac e-transfer is accepted and preferred by many of our customers. We also accept credit and debit card via secure online payment. We do not accept cash on Eid day.",
  },
];
