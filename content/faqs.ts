// Single source of truth for the FAQ accordion AND the FAQPage schema.
// Keep answers in plain English, ~40-80 words.

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
      "Our entire operation is certified halal by HMA Canada (Halal Monitoring Authority). All sacrifices are hand-slaughtered only, without stunning, at an HMA-certified facility under strict religious supervision. You can find more information about their certification standards on the HMA website.",
  },
  {
    id: "madhahib",
    question: "Is the qurbaani acceptable across all four madhahib (Hanafi, Shafi'i, Maliki, Hanbali)?",
    answer:
      "Yes. Our process meets the requirements of all four madhahib: it is performed by a practising Muslim slaughterman, 'Bismillah, Allahu Akbar' is recited at the moment of slaughter with your name and intention noted, a single swipe of a sharp, non-serrated blade severs the jugular veins, carotid arteries, windpipe, and esophagus, there is no stunning of any kind (animals are fully conscious), and the sacrifice is carried out at an HMA-certified, OMAFRA-licensed Ontario facility under provincial food-safety inspection.",
  },
  {
    id: "stunning",
    question: "What about stunning?",
    answer:
      "We do not pre-stun any animal in our qurbaani service. The dhabihah is performed on a fully conscious animal, by hand. This is a deliberate choice and a core pillar of our service — many OMAFRA-licensed facilities require electrical stunning, and we work with our Ontario farm partner who permits exemption for religious slaughter under provincial regulation. We are happy to discuss this directly on WhatsApp.",
  },
  {
    id: "payment-timing",
    question: "When is payment charged?",
    answer:
      "Full payment is charged upfront at the time of booking to secure your animal and scheduled slot. We accept Interac e-transfer sent to team.ibrahimandismail@gmail.com as well as secure credit and debit cards via Stripe online checkout.",
  },
  {
    id: "cuts",
    question: "What cuts will I receive?",
    answer:
      "On Standard, a butcher cut — legs, shoulders, ribs, curry cut, mince — packed in food-grade bags. On Deluxe, you tell us how you cook (stew, chops, roast, boneless, mince fat preference) and we cut accordingly: legs whole, shoulders bone-in, ribs separated. Vacuum-sealed and labelled by cut.",
  },
  {
    id: "children",
    question: "Can my family witness the sacrifice?",
    answer:
      "We do not offer in-person attendance for the dhabihah in the 2026 season. You will receive an HD video of the named slaughter — your name and intention recited at the moment — within hours of Eid. Many families watch it together at home before opening the meat parcel; it has become a meaningful Eid tradition.",
  },
  {
    id: "donation-proof",
    question: "How do I know my donated portion actually reached a family?",
    answer:
      "You receive a photograph by WhatsApp within 48 hours of Eid showing the meat being handed to a recipient family — face may be obscured for the family's privacy, but the location, packaging, and date are visible. We partner with our local charity partners for distribution, and your 1/3 portion is delivered on every order — Standard and Deluxe.",
  },
  {
    id: "refunds",
    question: "What is your refund policy?",
    answer:
      "We offer a full refund if cancelled 14 or more days before Eid. After that, refunds are available only if Ibrahim and Ismail cannot fulfil the sacrifice, as your animal has already been reserved at the farm.",
  },
  {
    id: "weather",
    question: "What if there is a severe weather event on Eid morning?",
    answer:
      "If the farm is unreachable due to a declared weather emergency, your animal is sacrificed on schedule and you receive video documentation; the meat is held in cold storage and delivered when roads reopen, or you may collect when safe. No refunds are given for weather, as the qurbaani is fulfilled.",
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
      "Yes. Our live support is staffed by people who speak both English and Urdu. WhatsApp and phone support are available in either language.",
  },
  {
    id: "payment-methods",
    question: "How can I pay? Do you accept e-transfer?",
    answer:
      "Yes, Interac e-transfer is accepted and preferred by many of our customers. Simply send your payment to team.ibrahimandismail@gmail.com. We also accept secure credit and debit card payments online via Stripe. We do not accept cash on Eid day.",
  },
];
