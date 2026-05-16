# Ibrahim and Ismail — Landing Page Implementation Plan

> A developer-ready specification for a high-trust, conversion-focused landing page for a premium local qurbaani service in the Greater Toronto Area.

---

## How To Read This Document

This file is the single source of truth for building v1 of the landing page. Every section below contains: purpose, exact copy or copy direction, design notes, conversion considerations, and mobile notes where relevant. Any factual claim that has not been verified against the real business is marked `[VERIFY: ...]`. Any creative asset that must be sourced from a real human is marked `[PLACEHOLDER: ...]` or `[PHOTO NEEDED: ...]`. **Do not ship the page until every such marker is resolved.** Section 9 is the final pre-launch checklist.

A guiding principle runs through every decision below: this is an act of worship for the customer, not a transaction. Tone, imagery, and pacing must honor that.

---

## Section 1 — Brand & Design System

### 1.1 Voice and Tone Principles

- **Reverent but warm.** Speak as a trusted neighbour who happens to run the service, not a marketer.
- **Confident but never boastful.** State what you do; let the customer judge.
- **Modern but rooted in tradition.** Plain English, no jargon, no transliterated Arabic unless it adds meaning (e.g., *dhabihah*, *tayyib*).
- **No "Black Friday" energy.** No exclamation marks in headlines, no countdown timers, no "act now", no "limited spots left" unless it is literally true.
- **No emoji anywhere on the page.**
- **No exclamation marks in body copy.** Save them for the rare moment they earn their place — currently, none.
- Write in second person ("you", "your family"). Never "our valued customers".

### 1.2 Color Palette

A warm, grounded palette that leans on earth and harvest tones. Deliberately avoids the bright kelly-green-and-gold cliché used by most halal brands. Every text/background combination listed below has been chosen to clear WCAG AA contrast (4.5:1 for body, 3:1 for large text); developers must verify with a contrast checker before shipping.

```css
/* Primary — deep forest, grounded and dignified */
--color-primary-900: #1F3329;   /* darkest, for primary CTA hover */
--color-primary-700: #2C4A3E;   /* primary CTA background, headlines on cream */
--color-primary-500: #4A6B5C;   /* secondary surfaces, borders */
--color-primary-100: #DDE6E0;   /* hover tints, subtle backgrounds */

/* Secondary — warm cream, parchment, page background */
--color-cream-50:  #FBF7F0;     /* page background */
--color-cream-100: #F5EFE6;     /* card surfaces */
--color-cream-200: #EBE2D2;     /* dividers, subtle wells */

/* Accent — terracotta / saffron, used sparingly */
--color-accent-700: #A4582F;    /* hover state for accent */
--color-accent-500: #C97B47;    /* primary accent — used only for "Most chosen" border, key highlights */
--color-accent-200: #F0D9C4;    /* tints */

/* Neutrals — warm grays, not cold */
--color-ink-900: #1F1B16;       /* primary body text */
--color-ink-700: #3F3933;       /* secondary text */
--color-ink-500: #6B655C;       /* muted text, captions */
--color-ink-300: #B8B1A6;       /* placeholder, disabled */
--color-ink-100: #E8E3D9;       /* hairline borders */

/* Semantic */
--color-success: #4A6B3E;       /* muted olive — confirmation states */
--color-error:   #9C3B2A;       /* muted rust — never alarming red */
--color-info:    #3E5B6B;       /* muted slate — informational */
```

**Usage rule:** The accent color (`#C97B47`) is the *only* color used for primary CTAs and the "Most chosen" tier highlight. Do not use it for decoration. Scarcity creates emphasis.

### 1.3 Typography

Pair one transitional serif for headlines with one humanist sans for body. Both are free via Google Fonts.

**Recommended pairing (primary):** Fraunces (display/headlines) + Inter (body).
Fraunces brings warmth and a slight literary feel; Inter is the workhorse for legibility on mobile.

**Alternatives if Fraunces feels too distinctive:** Newsreader + Inter, or Cormorant Garamond + DM Sans.

```css
/* Headlines */
font-family: 'Fraunces', Georgia, serif;
font-feature-settings: 'ss01', 'ss02'; /* enable Fraunces stylistic sets */
font-optical-sizing: auto;

/* Body */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-feature-settings: 'cv02', 'cv11'; /* improved Inter glyphs */
```

**Type scale (mobile-first; values shown for >= 768px in parens):**

```
display-xl   48px / 56px   line-height 1.05   weight 400   tracking -0.02em   (72px / 76px)
display-lg   36px / 44px   line-height 1.1    weight 400   tracking -0.02em   (56px / 60px)
display-md   28px / 36px   line-height 1.15   weight 500   tracking -0.01em   (40px / 48px)
heading-lg   22px / 30px   line-height 1.25   weight 500   tracking -0.01em   (28px / 36px)
heading-md   18px / 26px   line-height 1.3    weight 600   tracking 0          (20px / 28px)
body-lg      18px / 28px   line-height 1.55   weight 400                       (20px / 32px)
body         16px / 26px   line-height 1.6    weight 400
body-sm      14px / 22px   line-height 1.5    weight 400
caption      13px / 18px   line-height 1.4    weight 500   tracking 0.04em uppercase
```

Headlines use Fraunces at weight 400 with slight negative tracking — this is what gives the warm, literary feel. Do not bold Fraunces above weight 500; it loses character.

### 1.4 Spacing, Radius, Shadows

```css
/* Spacing scale (rem) — based on 4px unit */
--space-1: 0.25rem;   /* 4px  */
--space-2: 0.5rem;    /* 8px  */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px — section padding desktop */

/* Border radius — soft, never sharp, never fully round */
--radius-sm: 6px;     /* inputs, small buttons */
--radius-md: 10px;    /* cards */
--radius-lg: 16px;    /* feature surfaces */
--radius-pill: 9999px; /* badges, pills */

/* Shadows — low, warm, never harsh */
--shadow-sm:  0 1px 2px rgba(31, 27, 22, 0.04);
--shadow-md:  0 4px 12px rgba(31, 27, 22, 0.06);
--shadow-lg:  0 12px 32px rgba(31, 27, 22, 0.08);
--shadow-cta: 0 6px 20px rgba(201, 123, 71, 0.18); /* warm shadow under accent CTA */
```

### 1.5 Visual Style — Photography Direction

Every image on the page must be real, warm, natural photography. Golden hour light, shallow depth of field, real human hands at work. The page is built around emotion, and stock imagery breaks the spell instantly.

**Always:** hands carefully preparing meat, a rolling Ontario farm at dawn, a family seated around an Eid table, vacuum-sealed cuts on butcher paper, a delivery being handed to a neighbour, an elder receiving meat with both hands.

**Never:**
- Crescent moons, mosque silhouettes, Kaaba imagery, calligraphic flourishes as decoration
- AI-generated imagery of any kind
- Generic stock photos of non-Muslim families
- Close-ups of animal slaughter (handled with care in the witness section — see 3.7)
- Overly saturated, "halal brand"-style green-and-gold compositions
- Pictures of children's faces unless explicit signed parental consent is on file

---

## Section 2 — Tech Stack & File Structure

### 2.1 Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+ (App Router) | RSC for fast first paint; built-in image optimization; clean DX |
| Styling | Tailwind CSS + CSS variables for tokens | Tokens above map directly to Tailwind config |
| UI primitives | shadcn/ui (selective: Button, Dialog, Accordion, Tabs) | Owned components, not a dependency |
| Animation | Framer Motion | Only used for subtle scroll reveals and tier-card hover |
| Forms | React Hook Form + Zod | Lightweight, accessible by default |
| Lead handling (Phase 1) | Resend for transactional email + Formspree as fallback | Ship fast, no DB needed |
| Booking management (Phase 2) | Supabase (Postgres + Auth) | When manual triage stops scaling |
| Payments (Phase 2) | Stripe Checkout | Phase 1 collects leads and confirms via WhatsApp; charge happens once tier is confirmed |
| Hosting | Vercel | Edge functions, automatic image optimization, free SSL |
| Analytics | GA4 + Meta Pixel + custom WhatsApp/phone click events | Need to attribute booking source for next year's spend |

### 2.2 Folder Structure

```
ibrahimandismail-udhiya/
├── app/
│   ├── layout.tsx                  # Root layout, fonts, analytics
│   ├── page.tsx                    # Landing page (composes section components)
│   ├── reserve/page.tsx            # Dedicated reserve form (linked from CTAs)
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── refunds/page.tsx
│   └── api/
│       └── lead/route.ts           # POST handler -> Resend + DB write
├── components/
│   ├── sections/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── ProblemStrip.tsx
│   │   ├── Pillars.tsx
│   │   ├── CompareTable.tsx
│   │   ├── Pricing.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── LocalDistribution.tsx
│   │   ├── Founder.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── ui/                         # shadcn primitives
│   ├── StickyMobileCTA.tsx
│   └── WhatsAppButton.tsx
├── content/
│   ├── faqs.ts                     # FAQ source of truth
│   ├── pricing.ts                  # Tier data
│   └── testimonials.ts             # Pulled from CMS later; static array v1
├── lib/
│   ├── analytics.ts                # GA4 + Pixel + click tracking helpers
│   ├── schema.ts                   # JSON-LD generators
│   └── env.ts                      # Zod-validated env vars
├── public/
│   ├── images/                     # Optimized real photography only
│   ├── icons/                      # Custom thin-line SVGs
│   └── og/                         # Open Graph images
├── styles/
│   └── globals.css                 # Token definitions, base resets
├── tailwind.config.ts              # Maps tokens from section 1
├── next.config.mjs
└── package.json
```

### 2.3 Environment Variables

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=
LEAD_NOTIFY_EMAIL=             # Founder's inbox
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=   # E.164 format, e.g. +14165550100
NEXT_PUBLIC_PHONE_DISPLAY=     # (416) 555-0100
SUPABASE_URL=                  # Phase 2
SUPABASE_SERVICE_ROLE=         # Phase 2
STRIPE_SECRET_KEY=             # Phase 2
```

### 2.4 Analytics Events

```
event: 'cta_reserve_click'        params: { location: 'hero' | 'pricing' | 'final' | 'sticky' }
event: 'whatsapp_click'           params: { location }
event: 'phone_click'              params: { location }
event: 'tier_selected'            params: { tier: 'local' | 'witness' | 'concierge' }
event: 'lead_submit'              params: { tier, delivery_preference }
event: 'faq_open'                 params: { question_id }
```

---

## Section 3 — Page Sections

### 3.1 Sticky Navigation

**Purpose:** Anchor identity, provide constant access to the primary conversion action.

**Layout (desktop):** logo left (wordmark "Ibrahim and Ismail" + small tagline below: *Qurbaani, witnessed*) — three center links (How it works · Pricing · FAQ) — right side: phone number (click-to-call) + accent CTA button "Reserve".

**Layout (mobile):** logo left — right side: small WhatsApp icon button + "Reserve" button (compact). Hamburger optional; only three nav links so consider keeping them visible in a bottom row instead.

**Design notes:** White/cream background with a 1px hairline border-bottom in `--color-ink-100`. Sticks at scroll with a subtle shadow that appears only after 8px of scroll. Height 72px desktop, 60px mobile. Wordmark in Fraunces 500, tagline in Inter 13px uppercase tracking +0.08em.

**Conversion notes:** CTA is the only accent-colored element in the nav. Phone number uses `tel:` link with click tracking.

### 3.2 Hero (above the fold)

**Purpose:** In two seconds, communicate what this is, why it is different, and what to do next.

**Headline — three variants for A/B testing:**

- **Variant A (intention-led):** *Your qurbaani, witnessed. Your intention, honored.*
- **Variant B (local-distribution-led):** *The qurbaani your family deserves — and the meat your neighbours need.*
- **Variant C (calm-confidence-led):** *Reserve your sacrifice. Keep your portion in Canada.*

Start with Variant A in production; rotate B and C as A/B tests in week two.

**Subheadline (constant across variants):**
> From a licensed Ontario farm to your table — and to a GTA refugee family who receives the needy portion, with photo confirmation.

**Primary CTA:** *Reserve your qurbaani* (accent color, large) — anchors to `#pricing`.
**Secondary CTA:** *See how it works* (text link with chevron) — anchors to `#how-it-works`.

**Trust strip directly below the CTAs:**
> Licensed Ontario abattoir · Halal certified · Local 1/3 distribution

Use a thin separator dot (·) between items. Caption type style. `[VERIFY: licensing body and halal certifier exact names before going live]`.

**Hero image:** `[PHOTO NEEDED: warm golden-hour shot of two hands — one elder, one younger — placing wrapped meat into a brown paper bag on a wooden surface. Shallow depth of field. No faces. Suggests transfer of trust between generations. Aspect ratio 4:3 on desktop, full-bleed 4:5 on mobile. Avoid any visible blood, knives, or distressing imagery.]`

**Mobile:** stacked vertical — headline → subheadline → primary CTA (full width) → secondary CTA → trust strip → image below the fold of viewport on small phones. Keep H1 tight at 36–44px so the CTA stays visible without scroll on a 375px-wide screen.

### 3.3 Problem / Agitation Strip

**Purpose:** Validate the reader's frustration with the status quo — quickly, without piling on.

**Layout:** Three short cards in a row on desktop, stacked on mobile. Cream background section, cards on white with subtle borders.

**Card 1 — Heading:** *Phone trees and no-shows*
Body: *Most GTA abattoirs only take bookings by phone — and only when someone picks up. You shouldn't have to redial twenty times to fulfill an act of worship.*

**Card 2 — Heading:** *Your portion, on another continent*
Body: *Major charities ship the needy portion overseas. There is barakah in that — and there is also need in your own city.*

**Card 3 — Heading:** *No proof your name was said*
Body: *When the dhabihah is performed without you present, you receive nothing more than a confirmation text. We think you deserve to see it.*

**Design notes:** Card heading in `heading-md` weight 600 ink-900. Body in `body` ink-700. Small thin-line icon at top-left of each card (no background fill). 32px padding inside cards.

### 3.4 Three Pillars Section

**Purpose:** State the three things this brand stands for, plainly.

**Heading (above pillars):** *Three commitments we keep, every Eid.*

**Pillar 1 — Witnessed**
Heading: *Witnessed*
Body: *You — or a recorded HD video that includes your name and your intention — are present for the dhabihah. No anonymous ledger entries.*

**Pillar 2 — Local**
Heading: *Local*
Body: *Animals are raised on licensed Ontario farms. The needy third stays in the GTA, delivered with photo confirmation to families who need it now.*

**Pillar 3 — Tayyib**
Heading: *Tayyib*
Body: *Beyond halal: pasture-raised, antibiotic-free animals from farms we visit ourselves. Quality you can taste at the Eid table.*

**Icon style spec:** Custom-drawn thin-line SVG icons at 1.5px stroke weight, monochrome in `--color-primary-700`, 48px square. Suggestions: a single open eye (Witnessed), a leaf with a single grain (Local), a wheat stem (Tayyib). Do not use crescent-moon or mosque-based iconography. Do not use filled or duotone icons. If a vector designer is unavailable, fall back to thin-stroke icons from Phosphor Icons (regular weight, not bold).

**Layout:** Three-column grid on desktop with generous gap (48px), stacked on mobile. Pillar heading in Fraunces `heading-lg`, body in Inter `body`.

### 3.5 How We Compare

**Purpose:** Position the brand against the two alternatives most customers are weighing today — overseas charities and existing GTA farms — without naming competitors.

**Heading:** *Where your qurbaani goes — and what you get back.*

| | Overseas charity | Typical GTA farm | **Ibrahim and Ismail** |
|---|---|---|---|
| Where the needy portion goes | Another country | Returned to you to distribute | **GTA refugee family, with photo confirmation** |
| Your physical witness | Not possible | If you can take the day off | **Reserved slot in a family-safe viewing area, or HD video of your named sacrifice** |
| Proof your intention was said | None | None | **Recorded, named dhabihah video** |
| Booking | Online | Phone only, often unanswered | **Online in under three minutes** |
| Animal sourcing | Varies by country | Often unspecified | **Named Ontario farm, pasture-raised on Concierge tier** |
| Customer experience on Eid | None — you are not there | Wait outside in any weather | **Indoor waiting area, chai, scheduled time** |
| Pricing transparency | Donation amount only | Quoted on the phone | **Three tiers, posted publicly** |

**Design notes:** On desktop, render as a four-column table with the rightmost column visually emphasized (cream background, slight shadow, primary-700 text in column header). On mobile, transform into three stacked cards — header row of each becomes the card title, each comparison row becomes a labeled line. Do not horizontally scroll the table on mobile.

### 3.6 Pricing

**Purpose:** Convert. This is the section the page exists to support.

**Heading:** *Three ways to fulfill your qurbaani.*
**Subheading:** *Choose the experience. We handle the rest.*

**Layout:** Three tier cards. On desktop, equal-width columns side by side. On mobile, stacked. The Witness card is visually elevated: cream surface, 2px accent border, small pill above the card reading "Most chosen" in accent color, caption type style.

**Pricing data:**

| Tier | Price | Promise |
|---|---|---|
| **Local** | $699 | A complete qurbaani from a licensed Ontario farm, with proof of dhabihah. |
| **Witness** | $799 | Be present, in comfort, for your own qurbaani — or watch HD video of your named sacrifice. |
| **Concierge** | $1,199 | Premium tayyib animal, white-glove delivery, and a needy portion delivered to a GTA refugee family in your name. |

**Local — feature bullets:**
- Lamb or goat from a licensed Ontario farm
- Standard cut, butcher-prepared
- WhatsApp photo and dhabihah video sent the same day
- Pickup included; home delivery within GTA: +$60
- Halal certified

**Witness — feature bullets:**
- Everything in Local, plus:
- Reserved time slot — no waiting
- Indoor waiting area with chai for your family
- You say your own intention before the dhabihah
- HD video and photographs of your named sacrifice
- Family-safe viewing area (children welcome, view is screened)
- Vacuum-sealed cuts, ready for the freezer

**Concierge — feature bullets:**
- Everything in Witness, plus:
- Premium tayyib animal — pasture-raised, antibiotic-free
- Custom cut to your specification (legs whole, mince, curry cut, etc.)
- Vacuum-sealed, labelled, freezer-ready portions
- Free cold-chain home delivery within the GTA
- **One-third portion delivered to a GTA refugee family, with photo confirmation in your name**
- Priority Day 1 Eid slot
- Digital Qurbaani Certificate for your records

**CTA on each card:** *Reserve [Tier name]* — uses accent button on Witness card only; Local and Concierge use outlined primary-color buttons. This subtly steers traffic to the middle tier without making the others feel like an afterthought.

**Fine print directly below cards (caption type):**
> Prices in CAD, all-in. Eid al-Adha 2026 falls on or about [VERIFY: confirm Hijri-calculated date with local masjid; do not estimate]. Bookings open [VERIFY: date]. Full refund up to 14 days before Eid; see [refund policy](/refunds).

**Design notes:** Card padding 32px desktop, 24px mobile. Price in Fraunces 500 `display-md`. Tier name in Fraunces 500 `heading-lg`. Bullets in Inter `body` with a thin checkmark icon (not filled). Equal card height enforced with flex.

### 3.7 How It Works

**Purpose:** Reduce uncertainty. A customer who can picture the process will book.

**Heading:** *Four steps from reservation to your Eid table.*

**Step 1 — Reserve online**
Sub: *Pick your tier. Tell us pickup or delivery. Three minutes.*

**Step 2 — WhatsApp confirmation**
Sub: *We confirm your slot and answer questions in the channel you actually use.*

**Step 3 — Witness or watch**
Sub: *On Eid morning, come to the farm at your scheduled time — or receive the HD video of your named sacrifice within hours.*

**Step 4 — Meat home, donation delivered**
Sub: *Vacuum-sealed cuts to your door. On Concierge, a photo of the needy portion in a GTA family's hands.*

**Design spec:** Horizontal row of four cards on desktop with a faint dotted connector line between them, stacked on mobile with vertical connector. Each step has a numeral (1–4) in Fraunces 400 at 48px in `--color-accent-500`, the heading below it, the sub-line below that.

**Illustration spec:** One small custom illustration per step, hand-drawn feel, monochrome line work in `--color-primary-700`. Suggestions: (1) a phone with a calendar on screen, (2) a chat bubble with a verified checkmark, (3) a folded piece of paper with a play-button overlay, (4) a wrapped parcel on a doorstep. Commission these from an illustrator; do not use icon-library glyphs for this section. `[PLACEHOLDER: commissioned illustration set required]`.

### 3.8 The Local Distribution Story

**Purpose:** This is the emotional centerpiece of the page. The single strongest differentiator. Treat it accordingly.

**Layout:** Full-bleed section, deep primary-900 background, cream text. Asymmetric two-column layout on desktop: large photograph on the right (60%), copy on the left (40%). On mobile, copy first, photograph below.

**Heading:** *The portion that stays here.*

**Body — two short paragraphs (use exactly this copy):**

> The Quran asks us to feed the needy with one-third of our qurbaani. For decades, that portion has crossed oceans. The intention is beautiful — and the families breaking their fast in Mississauga, Scarborough, and Etobicoke also have a claim on it.
>
> On Concierge, we deliver your needy third directly to a GTA refugee family — single mothers, recent arrivals, families between paycheques — through our partnership with [VERIFY: partner organization, e.g. NZF Canada or Muslim Welfare Centre]. We send you a photograph of the moment the meat is received. Your sadaqah travels less than fifty kilometres, and you see where it lands.

**Stat callout (centered, beneath body):**
> `[VERIFY: X lb of meat delivered to Y GTA families in [year] Eid al-Adha]`

Until verified, do not display this callout. Replace with the line: *Built for the first Eid we serve. Numbers we can stand behind, soon.* This is more credible than a fabricated stat.

**Photo:** `[PHOTO NEEDED: real moment of meat being received by a Canadian family in their home or at the door. Faces may be obscured for privacy if needed (shot from behind, hands only). Warm interior light. The mood is dignity, not pity — no staged sad expressions, no signage that identifies the recipient as a refugee.]`

**Conversion note:** Place a soft CTA in cream text at the bottom of this section: *Reserve Concierge* → anchors to the Concierge card in pricing. Do not use the accent color here — let the story carry the weight.

### 3.9 Founder Story / About

**Purpose:** Put a human behind the brand. Trust scales with a face.

**Heading:** *Why we started Ibrahim and Ismail.*

**Body:** `[PLACEHOLDER: One-paragraph founder story, written in the founder's own voice. Should answer: (1) what personal qurbaani experience went wrong or felt incomplete, (2) what they wanted instead, (3) why local distribution mattered to them specifically. Conversational, 100–140 words. Ends with founder's first name as signature, e.g. "— Yusuf".]`

**Photo:** `[PHOTO NEEDED: real photograph of the founder, environmental portrait, warm natural light, looking slightly off-camera. At a farm, at home, or in a community space — not in a studio. Aspect 4:5.]`

**Design:** Two-column on desktop, photo right at ~40% width. Body in `body-lg` for readability. Signature in Fraunces 500 at `heading-md`.

### 3.10 Testimonials

**Purpose:** Social proof from people who look and sound like the reader.

**Heading:** *From the families we have served.*

**Layout:** Four to six cards in a responsive grid. Three columns on desktop, two on tablet, one on mobile. White card surface, subtle border, generous padding.

**Each card structure:**

```
"[2–3 sentences. Must reference a specific pain that was solved — e.g.,
'I sat with chai while my kids watched safely from the indoor area' —
not generic praise like 'great service'.]"

— [First name + last initial]
[Neighbourhood, e.g. Thornhill]
[Package: Witness 2025]
```

**Status:** `[PLACEHOLDER: every testimonial card. Collect real testimonials from real customers with signed consent before launch. Do not write fake testimonials with realistic-sounding names — this is dishonest and erodes the trust the page is built on.]`

Until real testimonials are collected, **hide this section entirely**. A missing section is more trustworthy than a fabricated one.

**Design notes:** Quotation mark glyph at top-left of each card in Fraunces, 48px, in `--color-accent-200`. Body in Inter `body`. Attribution in `body-sm` ink-500.

### 3.11 FAQ

**Purpose:** Remove every remaining objection. Optimize for the kind of question someone is afraid to ask in front of others.

**Heading:** *Questions, answered plainly.*

**Layout:** Single-column accordion. Question rows in `heading-md`, expanded body in `body`. Only one panel open at a time. Smooth height transition, 200ms.

**Questions (write the answers in plain English, ~40–80 words each; mark anything contested or unverified):**

1. **Who certifies your operation as halal?**
   `[VERIFY: certifying body — HMA, IFANCA, or HFCC — and link to certificate. Do not name a body until written confirmation is on file.]`

2. **Is the qurbaani acceptable across all four madhahib (Hanafi, Shafi'i, Maliki, Hanbali)?**
   *Yes. The dhabihah is performed by a Muslim slaughterman by hand with a sharp blade, the name of Allah is pronounced over each animal, and the animal faces qibla. This satisfies the requirements of all four schools. [VERIFY: cite the specific scholar or board whose ruling you are relying on.]*

3. **What about stunning?**
   *We do not pre-stun any animal in our qurbaani service. The dhabihah is performed on a fully conscious animal, by hand. This is a deliberate choice and the principal reason we partner with [VERIFY: partner abattoir name] specifically — many OMAFRA-licensed facilities require electrical stunning, and we work with one that permits exemption for religious slaughter under federal regulation. We understand this is a question many customers ask first; we are happy to discuss it directly on WhatsApp.*

4. **When is payment charged?**
   `[VERIFY business decision: Phase 1 — deposit on reservation, balance on confirmation. Phase 2 — full charge on reservation via Stripe with refund window.]`

5. **What cuts will I receive?**
   *On Local, a standard butcher cut — legs, shoulders, ribs, curry cut, mince — packed in food-grade bags. On Witness, the same cuts vacuum-sealed. On Concierge, you tell us how you cook (curry, roast, kebab) and we cut accordingly: legs whole, shoulders bone-in, ribs separated, mince to your fat preference.*

6. **Can my children attend the witnessing?**
   *Yes, on Witness and Concierge tiers. We have a family-safe viewing area — the dhabihah itself is screened from view, but children can be present at the farm, hear the dua, and watch the meat being prepared afterward. Many families find this a meaningful Eid tradition.*

7. **How do I know my donated portion actually reached a family?**
   *On Concierge, you receive a photograph by WhatsApp within 48 hours of Eid showing the meat being handed to a recipient family — face may be obscured for the family's privacy, but the location, packaging, and date are visible. We partner with [VERIFY: partner organization] for distribution.*

8. **What is your refund policy?**
   *Full refund if cancelled 14 or more days before Eid. 50% refund 7–13 days before. No refund within 7 days, as your animal has been reserved at the farm. See [full policy](/refunds).*

9. **What if there is a severe weather event on Eid morning?**
   *If the farm is unreachable due to declared weather emergency, your animal is sacrificed on schedule and you receive video documentation; the meat is held in cold storage and delivered when roads reopen, or you may collect when safe. No refunds for weather, as the qurbaani is fulfilled.*

10. **What if I miss my reserved slot?**
    *Witness tier slots have a 20-minute grace window. After that, your sacrifice proceeds without you and you receive the HD video. We do not delay later families.*

11. **Do you speak Urdu / Arabic / Somali / Bengali?**
    *Yes. Our WhatsApp line is staffed by people who speak [VERIFY: list real languages spoken by staff]. Phone calls in English.*

12. **How can I pay? Do you accept e-transfer?**
    *Yes, Interac e-transfer is accepted and preferred by many of our customers. We also accept credit and debit card via secure online payment. We do not accept cash on Eid day.*

**Schema note:** This entire section must be marked up with `FAQPage` schema — see Section 8.

### 3.12 Final CTA

**Purpose:** One last clear path to action for readers who scrolled the whole page.

**Heading:** *Reserve your qurbaani for Eid al-Adha [VERIFY: Gregorian date].*

**Body (one sentence):**
> We accept [VERIFY: X] qurbaanis across [VERIFY: Y] days of Eid, and reservations have historically closed [VERIFY: Z] weeks before. The earlier you reserve, the better your slot.

Do not invent the numbers. If they are not yet known, replace with: *Reservations open [date] and slots are limited by the farm's daily capacity.*

**CTAs:** Primary accent button *Reserve your qurbaani* (anchors to pricing). Below it: phone number and WhatsApp button side by side, each with click tracking.

**Design notes:** Cream background, centered layout, max-width 720px. Generous vertical padding (`--space-32` desktop, `--space-16` mobile). No imagery — let the CTAs breathe.

**Do not use a countdown timer.** A real Eid date in the heading creates honest urgency.

### 3.13 Footer

**Purpose:** Trust signals, legal links, contact, copyright.

**Columns (4 on desktop, stacked on mobile):**

1. **Contact** — partner abattoir address `[VERIFY]`, phone (click-to-call), WhatsApp (click-to-chat), email (`hello@ibrahimandismail.ca` or [VERIFY: real domain]).
2. **Certifications** — halal certifying body logo `[PLACEHOLDER]`, OMAFRA license number `[VERIFY]`, insurance carrier line `[VERIFY]`.
3. **Policies** — Privacy, Terms, Refunds, Accessibility (links).
4. **About** — short brand line: *A family-run qurbaani service for the Greater Toronto Area.* Founded `[VERIFY: year]`.

**Bottom strip:** Copyright with both calendars, e.g. *© 1447 / 2026 Ibrahim and Ismail.*

**Design:** Deep primary-900 background, cream text, accent-500 used only for hover states on links. Hairline divider above bottom strip.

---

## Section 4 — Trust & Credibility Layer

The following trust elements are woven throughout the page; they are not a single section. Treat them as a checklist for the reviewer.

| Element | Location | Status |
|---|---|---|
| Real street address | Nav (mobile menu), Footer | `[VERIFY]` |
| Real phone number with click-to-call | Nav (desktop), Final CTA, Footer | `[VERIFY]` |
| Real WhatsApp number with click-to-chat | Nav (mobile), Final CTA, Sticky CTA | `[VERIFY]` |
| Halal certifying body logo | Footer, optional hero trust strip | `[PLACEHOLDER]` — must be a real, licensed logo |
| OMAFRA license reference | Footer | `[VERIFY]` |
| Scholar / imam endorsement quote | Above FAQ, single quote card | `[PLACEHOLDER: real, signed endorsement from a recognized GTA scholar]` |
| Google Reviews widget | Below testimonials | `[PLACEHOLDER: install once 10+ reviews are live]` |
| Satisfaction guarantee badge | Pricing section, footer | Link to refund policy |
| Founder photograph and name | Founder section | `[PLACEHOLDER]` |
| Partner abattoir name | FAQ, Footer | `[VERIFY: e.g. Caledon Halal Meat Packers or Sunrise Halal — written partnership required]` |
| Partner distribution organization | Local Distribution section | `[VERIFY: e.g. NZF Canada or Muslim Welfare Centre]` |

**Hard rule:** Do not invent any of the above. Each one ships only when verified.

---

## Section 5 — Conversion Optimization

### 5.1 CTA Hierarchy

- The accent color `#C97B47` is reserved exclusively for primary CTAs and the "Most chosen" Witness card. Nothing else.
- Every primary CTA on the page reads either *Reserve your qurbaani* or *Reserve [Tier name]*. Consistency of language is more important than variety.
- Secondary CTAs are text-with-chevron, no background fill.

### 5.2 Sticky Mobile CTA Bar

Appears after the hero scrolls out of view (use IntersectionObserver on the hero `<section>`). Fixed to bottom of viewport, full-width, two buttons side-by-side: *Reserve* (accent) and a WhatsApp icon button. Height 56px, subtle top shadow, safe-area-inset-bottom respected for notched devices. Hidden on desktop.

### 5.3 Lead Form Minimization

**Phase 1 form fields (exactly four):**
1. Name (text, required)
2. Phone (tel, required, validated for North American format)
3. Email (email, required)
4. Preferred package (radio: Local / Witness / Concierge — pre-filled if user came from a tier card)

Pickup vs delivery, exact cuts, and any custom requests are handled in the WhatsApp follow-up. Do not let the form grow.

Submit goes to `/api/lead` which: (a) writes to Resend transactional email to the founder, (b) sends an auto-reply to the customer, (c) [Phase 2] writes to Supabase.

### 5.4 Urgency

Tied to the real Eid al-Adha date and historical booking patterns only. **No countdown timers. No "spots remaining" widgets unless they reflect real inventory.** Fake scarcity reads as bazaar tactics and corrodes the dignified positioning.

### 5.5 A/B Test Backlog (post-launch)

1. **Hero headline** — A (intention) vs B (local-distribution) vs C (calm-confidence) — primary metric: scroll-to-pricing rate.
2. **Primary CTA copy** — *Reserve your qurbaani* vs *Reserve your slot* vs *Begin reservation* — primary metric: CTA click-through.
3. **Witness card highlight treatment** — pill-only vs pill + border vs pill + border + slightly larger card — primary metric: Witness selection rate.
4. **Section order** — Problem strip → Comparison table vs Comparison table → Problem strip — primary metric: time-on-page and pricing-section reach rate.

---

## Section 6 — Realistic Constraints & Honest Placeholders

This page must not be shipped with fabricated trust signals. The following markers exist throughout the document and must each be resolved by a real human before the page goes live:

- **`[VERIFY: ...]`** — a factual claim that requires confirmation against the real business. Examples: certifying body name, OMAFRA license number, Eid date, partner organization names, founder credentials.
- **`[PLACEHOLDER: ...]`** — a creative or human asset that must be sourced from a real person with appropriate consent. Examples: testimonials, scholar endorsement, founder bio.
- **`[PHOTO NEEDED: ...]`** — a real photograph that must be commissioned. AI-generated imagery is forbidden on this page without exception.

The full reconciliation list lives in Section 9.

---

## Section 7 — Accessibility & Performance

### 7.1 Accessibility (WCAG 2.1 AA)

- Every text/background color combination listed in Section 1.2 has been chosen to clear AA contrast (4.5:1 body, 3:1 large text). Verify with a contrast checker before shipping; the burden of proof is on the dev, not the spec.
- Every image carries descriptive `alt` text. Decorative images use `alt=""`. Hero image alt: *Two hands passing a wrapped parcel of meat across a wooden surface, golden hour light.*
- All interactive elements are keyboard-reachable with a visible focus ring (2px solid `--color-primary-700`, 2px offset).
- Form fields have associated `<label>` elements; error messages are linked via `aria-describedby`.
- FAQ accordion uses `<button>` triggers with `aria-expanded` and `aria-controls`.
- Sticky mobile CTA bar does not trap focus or obscure content; `aria-hidden` toggled appropriately when off-screen.
- Page is fully usable at 200% zoom on mobile.
- If any Arabic phrase (e.g., bismillah, Eid Mubarak) is rendered visually, wrap in `<span lang="ar" dir="rtl">` and ensure the font supports the script (use Noto Naskh Arabic, loaded only on pages that use it).
- Test with VoiceOver on iOS and TalkBack on Android — these are the primary screen readers for the target audience.

### 7.2 Performance

- Lighthouse targets, mobile: **Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+**.
- Use Next.js `<Image>` for all photography with explicit `width`, `height`, and `priority` only on hero image.
- Below-the-fold images lazy-loaded by default.
- Fonts loaded via `next/font/google` with `display: 'swap'` and only the weights actually used (Fraunces 400/500, Inter 400/500/600).
- Total JS budget: under 120 KB compressed for the landing route.
- No third-party scripts above analytics. Reviews widget and chat widgets load on idle.
- Self-host icon SVGs; do not import an entire icon library.

---

## Section 8 — SEO & Schema

### 8.1 Meta Tags

```html
<title>Ibrahim and Ismail — Witnessed Qurbaani in the GTA | Eid al-Adha 2026</title>
<meta name="description" content="Reserve your qurbaani from a licensed Ontario farm. Witness your sacrifice, receive HD video, and have the needy portion delivered to a GTA refugee family — with photo proof. Serving Toronto, Mississauga, Brampton, Markham." />
<meta property="og:title" content="Ibrahim and Ismail — Witnessed Qurbaani in the GTA" />
<meta property="og:description" content="A premium qurbaani service for Greater Toronto. Witnessed, local, tayyib." />
<meta property="og:image" content="/og/ibrahim-and-ismail-og.jpg" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_CA" />
<meta name="twitter:card" content="summary_large_image" />
```

### 8.2 JSON-LD Schema

Generate in `lib/schema.ts` and inject in `app/layout.tsx`.

**LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ibrahim and Ismail",
  "image": "https://ibrahimandismail.ca/og/ibrahim-and-ismail-og.jpg",
  "telephone": "[VERIFY]",
  "email": "[VERIFY]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[VERIFY]",
    "addressLocality": "[VERIFY]",
    "addressRegion": "ON",
    "postalCode": "[VERIFY]",
    "addressCountry": "CA"
  },
  "areaServed": "Greater Toronto Area",
  "priceRange": "$$$"
}
```

**Product schema** — one block per tier (Local, Witness, Concierge), with `offers` priceCurrency `CAD`.

**FAQPage schema** — generated from `content/faqs.ts` so the FAQ source of truth produces both the visible accordion and the structured data automatically. Do not maintain two copies.

### 8.3 Target Keywords

Primary: *qurbani toronto*, *qurbaani gta*, *eid al adha sacrifice mississauga*, *halal qurbani canada*, *local qurbani brampton*.
Long-tail: *witnessed qurbani toronto*, *tayyib qurbani gta*, *halal animal sacrifice ontario*, *qurbani delivered toronto*.

Use these naturally — the headline, subheadline, and an H2 should cover the primary set without keyword-stuffing.

---

## Section 9 — Pre-Launch Checklist

Every item below is a blocker. Page does not go live until every box is checked.

**Verification**
- [ ] Halal certifying body confirmed in writing; logo licensed for web use
- [ ] OMAFRA-licensed partner abattoir confirmed via signed partnership agreement
- [ ] Local distribution partner organization confirmed via signed partnership agreement
- [ ] Eid al-Adha 2026 Gregorian date confirmed with local masjid
- [ ] Daily qurbaani capacity confirmed with abattoir
- [ ] Languages spoken by staff confirmed
- [ ] Partner abattoir street address, phone, hours confirmed
- [ ] WhatsApp Business number provisioned with auto-reply

**Creative**
- [ ] Hero photograph commissioned and delivered
- [ ] Local Distribution section photograph commissioned and delivered
- [ ] Founder portrait photograph commissioned and delivered
- [ ] Step illustrations (4) commissioned and delivered
- [ ] Three pillar icons (Witnessed, Local, Tayyib) commissioned and delivered
- [ ] Real founder bio written in founder's voice
- [ ] Minimum 4 real testimonials collected with signed consent forms on file
- [ ] Scholar / imam endorsement quote secured with signed permission

**Legal & Operational**
- [ ] Privacy policy reviewed by a lawyer
- [ ] Terms of service reviewed by a lawyer
- [ ] Refund policy reviewed by a lawyer and made public
- [ ] Liability insurance confirmed for the operation
- [ ] Accessibility statement drafted and published

**Technical**
- [ ] All `[VERIFY]` and `[PLACEHOLDER]` markers in this document resolved or removed
- [ ] Lighthouse mobile scores hit targets (90 / 95 / 95 / 95)
- [ ] Color contrast verified on every text/background combination
- [ ] GA4 installed and event firing verified
- [ ] Meta Pixel installed and standard events firing
- [ ] WhatsApp and phone click events verified in analytics
- [ ] Lead form end-to-end test: submission → founder email → customer auto-reply
- [ ] Schema validated with Google Rich Results Test
- [ ] Site tested on iOS Safari, Android Chrome, desktop Safari, Chrome, Firefox
- [ ] Site tested with VoiceOver and TalkBack screen readers
- [ ] All forms validated for submission spam (honeypot + rate limit)

**Phase 2 (post-launch, when ready)**
- [ ] Stripe Checkout activated and tested end-to-end
- [ ] Supabase booking pipeline activated, replacing Formspree
- [ ] Google Reviews widget installed once 10+ reviews collected
- [ ] A/B testing platform configured (Vercel Edge Config or Statsig)

---

*This document is the v1 specification. Treat it as a living plan: as decisions are made and placeholders are resolved, update this file in place. The day the page launches, every section should read as fact, not direction.*
