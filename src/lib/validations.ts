import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const activitySchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  pillarTag: z.string().min(1),
  excerpt: z.string().min(10),
  body: z.string().min(10),
  coverImage: z.string().min(1),
  publishedAt: z.string().min(1),
  published: z.boolean(),
});

export const newsSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  category: z.string().min(1),
  excerpt: z.string().min(10),
  body: z.string().min(10),
  coverImage: z.string().min(1),
  publishedAt: z.string().min(1),
  published: z.boolean(),
});

export const startupSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  logo: z.string().min(1),
  description: z.string().min(10),
  category: z.string().min(1),
  website: z.string().url().optional().or(z.literal("")),
  location: z.string().optional(),
  founded: z.coerce.number().optional(),
});

export const policySchema = z.object({
  title: z.string().min(3),
  type: z.string().min(1),
  refNumber: z.string().min(1),
  dateIssued: z.string(),
  description: z.string().min(10),
  fileUrl: z.string().optional(),
});

export const pillarSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().min(10),
  icon: z.string().min(1),
  order: z.coerce.number(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type ContactFormData = z.input<typeof contactSchema>;
export type ActivityFormData = z.input<typeof activitySchema>;
export type NewsFormData = z.input<typeof newsSchema>;
export type StartupFormData = z.input<typeof startupSchema>;
export type PolicyFormData = z.input<typeof policySchema>;
export type PillarFormData = z.input<typeof pillarSchema>;
export type LoginFormData = z.input<typeof loginSchema>;
