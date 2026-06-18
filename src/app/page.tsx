import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoScroller } from "@/components/home/LogoScroller";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Web, AI, Design, SEO and Marketing Agency",
  description:
    "DevNex Solution builds high-performance websites, AI systems, brand identities, SEO, and marketing engines for businesses in Pakistan and worldwide.",
  alternates: { canonical: siteUrl },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevNex Solution",
    url: siteUrl,
    email: "hello@devnexsolution.com",
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <LogoScroller />
      <ServicesGrid />
      <StatsSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
