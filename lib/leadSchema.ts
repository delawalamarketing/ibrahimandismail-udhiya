import { z } from "zod";

export const tierEnum = z.enum(["standard", "deluxe"]);

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(100),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[+()\-.\s\d]+$/, "Phone can only contain digits and + ( ) - . space."),
  email: z.string().email("Please enter a valid email address.").max(200),
  tier: tierEnum,
  // Honeypot — must be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
