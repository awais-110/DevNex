import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "web-development"
  | "graphic-design"
  | "ai-automation"
  | "seo"
  | "digital-marketing"
  | "mobile-apps";

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  color: string;
  accentClass: string;
  features: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  audiences: { title: string; text: string }[];
  tools: string[];
  faq: Faq[];
};

export type Project = {
  slug: string;
  title: string;
  category: ServiceCategory;
  client: string;
  industry: string;
  year: number;
  challenge: string;
  solution: string;
  result: string;
  results: { metric: string; label: string }[];
  tags: string[];
  coverColor: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: "Web Dev" | "Design" | "AI" | "SEO" | "Business";
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  icon: string;
  sections: { id: string; heading: string; body: string[]; code?: string }[];
};

export type IconMap = Record<string, LucideIcon>;
