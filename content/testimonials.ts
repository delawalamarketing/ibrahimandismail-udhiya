// PLACEHOLDER: every testimonial must be a real, signed customer quote before
// launch. Until real testimonials are collected, leave this array empty — the
// Testimonials section hides itself when there are zero entries. A missing
// section is more trustworthy than a fabricated one.

export type Testimonial = {
  quote: string;
  firstName: string;
  lastInitial: string;
  neighbourhood: string;
  tier: "Local" | "Witness" | "Concierge";
  year: number;
};

export const testimonials: Testimonial[] = [];
