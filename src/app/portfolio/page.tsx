import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PortfolioFilter } from "@/components/shared/PortfolioFilter";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and project results from DevNex Solution.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero label="Portfolio" title="Our Work Speaks for Itself" text="A few shipped projects across web, design, AI, SEO, marketing, and mobile apps." />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioFilter />
        </div>
      </section>
    </>
  );
}
