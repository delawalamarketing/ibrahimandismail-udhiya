# Animation & Visual Polish — Implementation Plan

> Subtle motion, careful hover affordances, and a handful of visual upgrades that deepen the page's warmth without compromising its reverent tone.

---

## Section 0 — Philosophy

This brand is an act of worship for the customer, not a product launch. Every animation must clear a single bar: **would this feel out of place in a respected family-run business that has been doing this for decades?** If the answer is anything other than yes, cut it.

**Always:**
- Motion communicates state (something appeared, something is now interactive, something completed) — never decorates for its own sake.
- Durations short (140–320 ms). Easings warm and physical (`cubic-bezier(0.32, 0.72, 0.36, 1)`), never bouncy or rubber-band.
- Distances small (4–12 px), opacity shifts gentle (0 → 1, no flashes).
- Stagger by 40–80 ms — perceptible rhythm, not a parade.
- Honor `prefers-reduced-motion: reduce` everywhere. If a user has opted out, animations collapse to a 1 ms transition; presence and final state are preserved.

**Never:**
- Auto-playing carousels or rotating headlines
- Parallax that detaches scroll speed from real scroll (jarring on trackpads, illegible on tablets)
- Counting-up numbers on prices ($699 should not "tick up" — feels QVC)
- Particle effects, confetti, sparkles
- "Look at me" CTA pulses or shake-to-notice animations
- Cursor trails, custom cursors
- Heavy entrance animations on the LCP (hero photo must appear immediately)

---

## Section 1 — Motion Tokens

Add to `tailwind.config.ts` and reference from every component. One source of truth so motion stays coherent.

```
// Duration (ms)
duration-instant   100   // micro-feedback (button press, checkbox)
duration-fast      160   // hover lifts, color shifts
duration-base      220   // most reveals, accordion
duration-slow      320   // scroll-triggered fade-ups, image scale-in
duration-deliberate 480  // hero copy stagger, image Ken Burns

// Easing
ease-warm          cubic-bezier(0.32, 0.72, 0.36, 1)   // default for everything
ease-exit          cubic-bezier(0.4, 0, 1, 1)          // dismissals
ease-spring        cubic-bezier(0.34, 1.36, 0.64, 1)   // sparingly — form success only

// Distances
motion-xs    4px
motion-sm    8px
motion-md    12px
motion-lg    20px
```

Define a `@layer utilities` set in `globals.css` so any element can pick up these motion primitives without re-declaring keyframes.

---

## Section 2 — Section-by-Section Animation Spec

### 2.1 Page-level

- **Scroll-triggered reveal** — utility component `<Reveal>` wraps any element. On `IntersectionObserver` enter with `threshold: 0.15`, applies `opacity: 0 → 1` + `translateY(8px → 0)` over 320 ms with `ease-warm`. Once revealed, the observer disconnects. No re-trigger on scroll back.
- **Top-of-page progress bar** — 2 px hairline in `--color-accent-500`, fixed top, width = scroll progress. Adds quiet sense of journey through a long page. Hidden on `prefers-reduced-motion`.
- **Smooth scroll** to anchors already in place — verify `scroll-padding-top` still respected after any nav height changes.

### 2.2 Nav

- **Logo hover** — wordmark `color: ink-900 → primary-700` over 160 ms.
- **Nav link hover** — underline grows from center: pseudo-element with `width: 0 → 100%` and `transform-origin: center`. 160 ms. Keeps the link text static (no layout shift).
- **Active section indicator** — if the user is currently scrolled past `#pricing`, the "Pricing" link gets a thin underline already at 100%. Implemented with `IntersectionObserver` on section ids, no manual state juggling.
- **Scroll-shadow intensification** — currently shadow appears past 8 px. Smooth the opacity ramp 0 → 1 across 0–24 px scroll instead of binary toggle.
- **Reserve CTA hover** — shadow grows from `shadow-cta` to a slightly tighter, deeper variant (`0 8px 24px rgba(201,123,71,0.24)`) + `translateY(-1px)` over 160 ms. No color shift on hover; the color is already strong enough.

### 2.3 Hero

- **Copy stagger on mount** — keep existing `animate-fade-up` but split into three children with stagger:
  - h1 enters at 0 ms
  - subhead at 80 ms
  - CTA cluster at 160 ms
  - trust strip at 240 ms
- **Photo** — first paint must show the image at its final position (LCP). Apply a very subtle 320 ms `opacity 0 → 1` only — no scale, no movement. Photo is already `priority` loaded.
- **"See how it works →" arrow** — already animates `translate-x` on hover. Add a complementary `transition-colors` so the link color deepens from `primary-700` to `primary-900` on hover.
- **Primary CTA** — same lift+shadow as nav Reserve.

### 2.4 Problem Strip

- **Cards stagger in on scroll** — 80 ms between each, 320 ms fade-up.
- **Card hover** — border `ink-100 → primary-500`, translateY `-2px`, shadow `sm → md`. 160 ms.
- **Icon hover** — subtle `transform: rotate(-3deg) scale(1.05)` over 220 ms with `ease-warm`. Just enough to register as alive.

### 2.5 Three Pillars

- **Heading scroll-reveal** — fade-up 320 ms.
- **Pillars stagger** — 100 ms between each pillar.
- **Icon hover** — icons grow `scale(1.0 → 1.08)` over 220 ms. The thin-line icons can take this without looking cartoonish.

### 2.6 Compare Table

- **Desktop table row hover** — entire row gets a 1 px hairline-thick `bg-cream-50` wash, except the "Ibrahim and Ismail" column which stays in its cream-100 highlight. 160 ms.
- **"Ibrahim and Ismail" column initial draw attention** — on first scroll-into-view, the column's background performs a single, very slow `0.5 → 1.0` opacity bloom over 600 ms. Once. Never repeats. This is the only "look here" animation on the page and it earns the right because it's the page's central thesis.
- **Mobile/tablet cards hover** — cards lift `-2px` and shadow ramps up. Highlighted card (Ibrahim and Ismail spanning full width) lifts the same amount; no extra emphasis on hover since it's already emphasized.

### 2.7 Pricing

- **Tier cards stagger** — 100 ms between each, on scroll into view.
- **Card hover** — lift `-4px`, shadow `sm → lg`, 220 ms. The highlighted Witness card already has elevation; on hover it lifts an additional `-2px` so it doesn't look static next to the others.
- **"Most chosen" pill** — quiet, no animation. The accent color earns the eye.
- **Feature bullet checkmarks** — when card enters viewport, checkmarks stagger in over 280 ms total (40 ms each). Opacity + 4 px slide-right.
- **CTA button hover** — primary (accent) lifts with deeper shadow as defined in motion tokens. Secondary (outlined) gets `bg-primary-100` wash over 160 ms.

### 2.8 How It Works

- **Steps stagger** — 80 ms between each.
- **Step numbers** — already `text-accent-500`. On scroll into view, each numeral fades in from `opacity-0 translateY-2` over 320 ms.
- **Connecting line (desktop)** — once the steps are all in, a hairline `bg-ink-100` line draws between numerals from left to right over 600 ms using `transform: scaleX(0 → 1) transform-origin: left`. Subtle, ties the steps together visually.

### 2.9 Local Distribution (emotional centerpiece)

- **Heading + paragraphs** — staggered fade-up (heading first, then each paragraph at 120 ms apart). Slightly slower duration (380 ms) to match the section's gravitas.
- **Photo** — Ken Burns at the lowest possible level: `scale(1.0 → 1.04)` over 12 s, looping smoothly. Only animates when the section is in view; pauses when out of view (`IntersectionObserver` toggles the class). Disabled entirely under reduced motion.
- **Stat callout / fallback line** — fades in last, at 320 ms after the second paragraph.

### 2.10 Founder

- **Photo subtle scale-up on hover** — `scale(1.0 → 1.03)` over 320 ms. The photo is the founder; hover invites you closer.
- **Bio paragraph fade-in** — standard reveal.

### 2.11 Testimonials (when populated)

- **Cards stagger fade-up** — 80 ms.
- **Card hover** — `-2px` lift, shadow `sm → md`.
- **Quote glyph** — the large `"` already exists; on initial reveal it draws in from `scale(0.92) opacity-0` over 380 ms. One subtle flourish.

### 2.12 FAQ

- **Accordion expand** — already animated via Radix. Refine the `data-state` attribute hook so the chevron icon rotates 180° over 220 ms instead of swap-in/swap-out of `+`/`-` icons. Continuous motion reads more refined.
- **Question hover** — text color `ink-900 → primary-700` over 160 ms, no underline.
- **Open state** — the question text itself stays `ink-900` (don't keep it primary when open, that competes with the answer).

### 2.13 Final CTA

- **Section reveal** — heading fade-up, body fade-up at 120 ms.
- **CTA cluster** — staggers in as a group, then the primary button gets one single very slow shadow pulse on first entry: `shadow-cta → shadow-cta + 20% intensity → shadow-cta` over 1.8 s, plays once, never repeats. The page has earned this single emphasis at the bottom; it's the equivalent of an open hand at the end of a conversation.

### 2.14 Footer

- **Link hover** — `cream-100 → cream-50` color shift over 160 ms. No underlines (already restrained on dark backgrounds).
- No entrance animations; the footer is a destination, not a moment.

### 2.15 Sticky Mobile CTA

- **Entrance** — keep the existing slide-up but tune to 280 ms `ease-warm` instead of the current 200 ms. Slightly slower feels considered, not jumpy.
- **Exit (scrolling back up past hero)** — slide down with `ease-exit` (faster, decelerating). Asymmetric durations feel right: appear deliberately, leave efficiently.

### 2.16 Reserve Form

- **Tier card selection** — when a tier is chosen, the card's border and background transition over 220 ms. The currently-selected card stays distinguished; the previously-selected card returns to default with the same duration.
- **Input focus** — border color `ink-100 → primary-700` over 160 ms; no glow rings.
- **Submit button loading state** — text crossfade `"Send my request" → "Sending…"` over 160 ms; button stays the same width (lock width before swap to prevent layout reflow).
- **Success state** — replaces the form with a confirmation card. Card enters with `scale(0.98 → 1) opacity(0 → 1)` over 380 ms using `ease-spring`. A small inline checkmark in `success` color draws via SVG `stroke-dasharray` over 400 ms after the card lands.
- **Error state** — input border shifts to `error` over 160 ms; helper text fades in below.

---

## Section 3 — Hover State Inventory

A consolidated reference so the dev doesn't have to hunt for inconsistencies. All hover transitions are 160 ms `ease-warm` unless noted.

| Element | Hover behavior |
|---|---|
| Primary CTA (accent) | `translateY(-1px)` + shadow deepens |
| Secondary CTA (outlined) | bg fills with `primary-100` |
| Link variant button | text color deepens |
| Nav link | center-out underline grows |
| Logo wordmark | color shift `ink-900 → primary-700` |
| ProblemStrip card | border shifts, `-2px` lift, shadow up one step |
| Pillar icon | scale 1.05–1.08 + subtle rotate |
| Compare table row (desktop) | row tints `cream-50` |
| Compare card (stacked) | `-2px` lift, shadow up one step |
| Pricing card | `-4px` lift, shadow `sm → lg` |
| Witness pricing card (hover) | additional `-2px` on top of base elevation |
| FAQ question | text color `ink-900 → primary-700` |
| Footer link | text color `cream-100 → cream-50` |
| Tier picker card (reserve form) | bg tints, border shifts |
| Founder photo | `scale(1.03)` over 320 ms |

---

## Section 4 — Accessibility & Reduced Motion

- One global `@media (prefers-reduced-motion: reduce)` block in `globals.css` (already in place) collapses all `transition-duration` and `animation-duration` to `0.01ms`.
- For JS-driven animations (Framer Motion), respect `useReducedMotion()` hook: when true, `animate` props skip motion and snap to final state.
- The Ken Burns effect on the Local Distribution photo must be JS-gated (not just CSS) so it doesn't run at all under reduced motion — looping animations consume CPU even when invisible.
- Focus rings unchanged — these are accessibility, not decoration; do not animate or soften them.
- Every interactive element keeps a non-motion fallback for state (color, underline, border) so reduced-motion users still see what's clickable and what's selected.

---

## Section 5 — Beyond Animation: Visual Upgrades

Things that are not animations but live in the same "make it more visually appealing" bucket. All optional — implement in the order listed if time-boxed.

### 5.1 Grain overlay (high impact, low cost)
A subtle SVG noise texture overlaid at `opacity: 0.025` across the page, fixed-positioned so it doesn't scroll. Adds a warm, paper-like quality that suits the brand. Cost: one ~3 KB SVG, no perf hit. Disable on `prefers-reduced-motion` (out of an abundance of caution — some grain patterns trigger motion sensitivities).

### 5.2 Cream-tone gradient section transitions
Replace the hard color jumps between `cream-50 → white → cream-50` sections with 64 px vertical gradient transitions. Eliminates the "stacked rectangles" feel. Pure CSS, zero JS.

### 5.3 Image blur-up loading
On all `next/image` instances below the fold, add `placeholder="blur"` with a base64 microthumb. Images crossfade from blur to sharp over 320 ms as they load. Eliminates the "pop-in" effect on slow connections.

### 5.4 Selection color
Currently `bg-accent-200`. Confirmed elegant — keep.

### 5.5 Cursor on interactive elements
Add `cursor-pointer` to every interactive surface that's not a `<button>` or `<a>` (tier picker cards in reserve form, for instance). Buttons get it by default; custom-styled labels and divs do not.

### 5.6 Section dividers (optional, restrained)
Between sections, a centered 1-px-thick × 32-px-wide accent-tinted rule. Only on transitions where two same-colored sections meet (e.g., Pillars → Compare). Easily overdone — use sparingly.

### 5.7 Reading progress indicator
Hairline progress bar at the top of viewport, in `accent-500`, tied to scroll position. 2 px tall, behind the nav. Mentioned in §2.1 — listing again here so it doesn't get lost.

### 5.8 Loading skeletons
For the reserve form's submit-in-flight state — already covered by the button micro-animation. No additional skeletons needed elsewhere since the rest of the page is static.

### 5.9 Custom favicon and Open Graph image
Not animation but conspicuously missing right now. Footer mentions `/og/ibrahim-and-ismail-og.jpg` but no real OG image exists. Commission a real one. Favicon should be a single, restrained mark in primary-700 on cream-50.

### 5.10 Toast notifications
For form submission errors, replace inline error text with a toast that slides in from the top-right. `react-hot-toast` or shadcn's `sonner` integration. Avoid for success — the dedicated success state is stronger.

---

## Section 6 — Technical Approach

### 6.1 Tooling
- **Framer Motion** (already installed): use sparingly. Primary use cases: `<Reveal>` wrapper, success-state morph, success checkmark draw.
- **CSS transitions**: default for all hover states, color shifts, simple movements. Cheaper, less JS bundle weight.
- **Radix UI primitives** (already in use): rely on built-in animation hooks (`data-state` attributes) for accordion and any future dialog/popover.

### 6.2 Patterns
- **`<Reveal>` component**: one wrapper that handles `IntersectionObserver` for scroll-triggered fade-ups. Accepts `delay`, `as`, `className` props. Used in nearly every section.
- **Stagger via CSS variables**: instead of Framer's `staggerChildren`, set `--reveal-delay` per child via inline style. Simpler, doesn't pull in motion lib for every section.
- **Hover via Tailwind**: `hover:translate-y-[-2px]` etc. Always pair with `transition` classes. Avoid `:hover` in raw CSS — keeps everything inspectable in devtools as Tailwind classes.

### 6.3 What goes in Framer vs CSS
| Use Framer | Use CSS |
|---|---|
| Form success card morph | Hover states |
| SVG checkmark draw | Color transitions |
| Page transitions (if added later) | Card lifts |
|  | Accordion expand (Radix handles) |
|  | Stagger reveals |

---

## Section 7 — Performance Budget

- No animation may push CMP (Cumulative Layout Shift) above 0.05. Always animate `transform` and `opacity`; never `top`, `left`, `width`, `height`.
- Hero image stays `priority` loaded — no entrance animation that delays paint.
- JS animations gated on viewport: nothing animates off-screen.
- The Ken Burns loop on Local Distribution is the only animation that runs continuously. It's paused when off-screen via `IntersectionObserver`. CPU profile target: <1% on mid-tier Android.
- No animation library beyond Framer (already included). No GSAP, no Lottie, no anime.js.

---

## Section 8 — Phased Implementation Order

So the dev can ship value incrementally, not all-or-nothing.

**Phase 1 — Quick wins (half a day):**
- [ ] Motion tokens added to Tailwind config
- [ ] Hover states refined across all CTAs, cards, links
- [ ] FAQ chevron rotation
- [ ] Sticky mobile CTA timing tune
- [ ] Reserve form input focus + tier card selection transitions

**Phase 2 — Scroll-driven reveal (half a day):**
- [ ] `<Reveal>` component built and applied section-by-section
- [ ] Pricing checkmark stagger
- [ ] How-It-Works step numbers + connecting line
- [ ] Compare-table "Ibrahim and Ismail" column initial bloom

**Phase 3 — Considered polish (half a day):**
- [ ] Local Distribution Ken Burns (with `prefers-reduced-motion` gate)
- [ ] Reserve form success state morph + SVG checkmark draw
- [ ] Final CTA single-pulse on entry
- [ ] Nav active-section indicator
- [ ] Scroll progress hairline

**Phase 4 — Visual upgrades (half a day):**
- [ ] Grain overlay
- [ ] Cream-tone section transitions
- [ ] Image blur-up placeholders
- [ ] Cursor pointer audit on custom interactive surfaces
- [ ] Real OG image + favicon (requires designer)

**Phase 5 — Optional (post-launch):**
- [ ] Toast notifications for form errors
- [ ] Section dividers (only if needed after Phases 1–4)
- [ ] Per-section A/B test on Local Distribution Ken Burns vs static (measure dwell time)

---

## Section 9 — What This Plan Will NOT Do

Listed so the dev doesn't add them later by accident:

- No hero video background
- No animated SVG illustrations (out of scope until real illustrations are commissioned per §3.7 of the main plan)
- No theme switching, dark mode, or color preference toggles
- No mouse-tracking effects of any kind
- No scroll-jacking
- No transition pages (full-page wipes between routes)
- No animation library beyond Framer Motion + Radix
- No animation on the price numerals themselves
- No "wow moment" reveals — the page is a conversation, not a presentation

---

*Every animation in this plan exists because a quiet hand of motion can deepen attention to something that already matters. None of them are there to entertain. If at any point during implementation a particular animation starts to feel like it's asking for attention rather than directing it, cut it without ceremony.*
