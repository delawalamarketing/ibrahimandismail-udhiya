# Pricing — 2026 Season Plan

> Simplifying from three tiers to two for Eid al-Adha 2026. Day of sacrifice becomes the primary differentiator; the rest is a single, well-built offering.

---

## Why the change

Three tiers (Local / Witness / Concierge) created decision friction without proportional revenue benefit. For first-time buyers especially, the Witness vs Concierge distinction was hard to explain in a single line. Two tiers — anchored on day of Eid — give customers a cleaner choice and let us match capacity to the day that matters most.

The brand promise (named dhabihah, local distribution, HMA certification, hand slaughter without stunning) is unchanged. We are not removing features customers cared about — we are removing options that didn't earn their slot in the menu.

---

## The 2026 lineup

| Tier | Day | Price | One-line promise |
|---|---|---|---|
| **Standard** | Day 2 or Day 3 | `[DECIDE]` | A complete qurbaani with your name and your chosen animal, on the day that fits your schedule. |
| **Deluxe** | Day 1 | `[DECIDE]` | The earliest day, your animal, your name, and your cuts. |

Both tiers: lamb or goat, named dua, customer-selected animal, HMA-certified halal slaughter at our OMAFRA-licensed Ontario partner farm.

---

## Per-tier feature breakdown

### Standard

- **Day:** Day 2 or Day 3 of Eid (assigned by us based on capacity; customer may request a preference)
- **Animal:** Lamb or goat (customer chooses the species)
- **Animal selection:** Customer reviews available animals via WhatsApp photos before the slot, picks the one they want
- **Named dua:** "Bismillah, Allahu Akbar" recited with the customer's name and intention noted aloud
- **Cuts:** Standard butcher cut — legs, shoulders, ribs, curry cut, mince — packed in food-grade bags
- **Documentation:** WhatsApp photo of the chosen animal beforehand; HD video of the named dhabihah delivered same-day
- **Delivery:** `[DECIDE: pickup default with delivery as paid add-on? or included GTA delivery?]`
- **Local 1/3 distribution:** `[DECIDE: include by default, or Deluxe-only?]`

### Deluxe

Everything in Standard, plus:

- **Day:** Day 1 of Eid (the sunnah-preferred day)
- **Custom cuts:** Customer tells us how they cook (stew, chops, roast, boneless, bone-in, mince fat preference) and we cut accordingly. Vacuum-sealed and labelled by cut.
- **Priority slot:** First pick of available time windows on Day 1
- `[DECIDE: any other Deluxe-only inclusions? See "Open decisions" below.]`

---

## What stays from the 2025 plan

These were core to the brand and remain unchanged in both tiers:

- HMA Canada halal certification
- OMAFRA-licensed Ontario farm
- Hand slaughter, no stunning
- Named dhabihah with customer's intention
- HD video proof of the named sacrifice
- Lamb or goat (customer's choice)
- Same-day meat
- WhatsApp-driven communication (not phone-only chaos)
- Three-tier transparent pricing → now two-tier transparent pricing

---

## What's removed or merged

| 2025 feature | Status for 2026 |
|---|---|
| Three tiers (Local / Witness / Concierge) | **Merged into two:** Standard + Deluxe |
| Reserved Witness time slot with indoor chai area | `[DECIDE: keep as part of all tiers, drop entirely, or offer as a paid add-on?]` |
| Family-safe in-person viewing area | `[DECIDE: keep? drop? paid add-on?]` |
| Pasture-raised "tayyib" premium animal upgrade | `[DECIDE: drop the distinction, or carry over to Deluxe only?]` |
| Digital Qurbaani Certificate | `[DECIDE: include in both, Deluxe only, or drop?]` |
| Free cold-chain home delivery within GTA | `[DECIDE: included in Deluxe at minimum?]` |
| 1/3 needy portion to GTA refugee family with photo confirmation | `[DECIDE: this was the strongest brand differentiator — keep in both tiers?]` |
| Vacuum-sealed cuts | Carries over: standard packing for Standard, vacuum-sealed for Deluxe (matches the "custom cuts" promise) |

**Strong recommendation:** the local 1/3 distribution should remain in **both** tiers. It is the single most distinctive thing about the brand, and pulling it back to a paid upgrade weakens the central pitch on the homepage.

---

## Open decisions

These are blockers — the new pricing cannot ship until each is resolved.

1. **Standard price** — suggested range `$649 – $749`. Old Local was $699; the simplification justifies staying at or near that price.
2. **Deluxe price** — suggested range `$999 – $1,199`. Old Concierge was $1,199; the day-1 + custom-cuts proposition supports keeping the premium.
3. **Delivery model** — included in both? Paid add-on for Standard, included in Deluxe? Critical for pricing math.
4. **Witnessing** — drop, keep as a free part of the experience, or sell as a paid add-on? If dropped, the "Witness" idea exits the brand vocabulary and that affects copy across the site.
5. **Local 1/3 distribution** — confirmed in both tiers? (Recommended yes.)
6. **Animal availability** — is the customer's species choice (lamb vs goat) firm, or limited by what the farm has on a given day?
7. **Capacity per day** — how many Standard slots on Day 2 + Day 3, how many Deluxe on Day 1? Drives the urgency copy on the Final CTA.
8. **Day assignment for Standard** — first come first served? Or customer requests Day 2 or Day 3 at booking?
9. **Naming** — "Standard" and "Deluxe" are clear and conventional. The 2025 names (Local / Witness / Concierge) had more character. `[DECIDE: keep Standard/Deluxe for clarity, or use brand-tone alternatives like "Named" / "Named + Custom"?]`

---

## Marketing implications

The shift changes a few things on the page beyond just swapping prices:

- **Comparison table** — the "Where your qurbaani goes" comparison was three columns (Overseas charity / Typical GTA farm / Ibrahim and Ismail). The internal pricing table was also three columns. The internal pricing table becomes two columns; the external comparison stays at three.
- **"Most chosen" pill** — currently on Witness. Move to Deluxe (anchoring the premium choice) or remove entirely now that there are only two options.
- **Hero subhead** — currently mentions "needy portion … with photo confirmation." Unchanged if local distribution stays in both tiers.
- **Eid date** — already updated in `content/site.ts` to "Wednesday, May 27 through Friday, May 29, 2026 (subject to moon sighting)." This now matters more because Day 1 (May 27) is the Deluxe-only day.
- **Urgency copy** — Day 1 = limited capacity, real scarcity. Final CTA gets a tighter line: *"Day 1 slots are limited. Standard slots open across Day 2 and Day 3."*
- **FAQ** — at least three answers need editing: cuts, refund policy (day-based), payment timing (if it changes).
- **A/B test backlog** — drop the "Witness card highlight treatment" test, since the pill moves or disappears.

---

## Code & content migration map (for later, not now)

When the open decisions are settled, the following files change. Listing them here so the implementation pass is mechanical:

- [content/pricing.ts](content/pricing.ts) — replace the three `tiers` entries with two. Update `TierId` type from `"local" | "witness" | "concierge"` to `"standard" | "deluxe"`.
- [lib/leadSchema.ts](lib/leadSchema.ts) — the Zod `tierEnum` matches the new TierIds.
- [app/reserve/page.tsx](app/reserve/page.tsx) — `initialTier` default changes from `"witness"` to `"deluxe"` (the new "most chosen" anchor).
- [app/reserve/ReserveForm.tsx](app/reserve/ReserveForm.tsx) — the radio grid is now `sm:grid-cols-2` not `sm:grid-cols-3`.
- [components/sections/Pricing.tsx](components/sections/Pricing.tsx) — `lg:grid-cols-3` → `lg:grid-cols-2`. The card highlight logic stays the same; just one of two cards is highlighted instead of one of three. Consider a wider max-width per card now there's more breathing room.
- [components/sections/CompareTable.tsx](components/sections/CompareTable.tsx) — no change to the external comparison; this is "us vs overseas vs typical farm."
- [components/sections/FinalCTA.tsx](components/sections/FinalCTA.tsx) — refresh the capacity copy once daily capacity is known.
- [content/faqs.ts](content/faqs.ts) — edit `cuts`, `refunds`, and `payment-timing` answers to match the new model.
- [lib/schema.ts](lib/schema.ts) — `productSchemas()` iterates `tiers`, so it picks up the new shape automatically. No manual change.
- [implementationplan-ibrahimandismail.md](implementationplan-ibrahimandismail.md) — update §3.6 (Pricing) to reflect the two-tier structure as the new source of truth.

No new dependencies. No infrastructure work. Estimated effort: half a day once the open decisions are locked.

---

## Suggested rollout

1. **Today:** Resolve the nine open decisions above. Prices and the witnessing question are the two blockers.
2. **Same week:** Update `content/pricing.ts`, `content/faqs.ts`, and `content/site.ts`. Push a preview branch.
3. **Same week:** Update Pricing section grid, reserve form radio grid, Final CTA copy.
4. **Before booking opens:** Review with the founder on a staging URL. Make sure the new pricing reads correctly to a Muslim customer who's never been on the site before.
5. **Booking opens:** Site goes live with the two-tier structure. Old `/reserve?tier=local|witness|concierge` query params should redirect gracefully — Standard for `local|witness`, Deluxe for `concierge`.

---

## Hard guardrails

- Do not ship the new pricing without the new prices in place. `[DECIDE]` markers stay until real numbers are confirmed.
- Do not weaken the local 1/3 distribution promise to push customers toward Deluxe. The brand stands on that line; reducing it is a credibility cost.
- Do not introduce a third "premium" upsell tier later in the season. The whole point of going to two is decisional clarity.
- Do not use "limited time" or "act now" language. Day 1 capacity scarcity is a fact and can be stated factually; manufactured urgency breaks the reverent tone.

---

*Once the nine open decisions are answered, the code migration is straightforward and listed above. Until then, no source files should be touched.*
