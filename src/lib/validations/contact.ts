import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Choose a service."),
  budget: z.string().min(1, "Choose a budget range."),
  description: z.string().min(20, "Tell us a little more about the project."),
  source: z.string().min(1, "Choose how you heard about us."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});
