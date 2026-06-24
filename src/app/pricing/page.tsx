import type { Metadata } from "next";
import { pricingFaqs, pricingPlans } from "@/lib/data/pricing";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { PricingCard } from "@/components/shared/PricingCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent project ranges for Techways websites, apps, automation, SEO, and marketing.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Transparent Pricing"
        title="Know What You're Getting"
        text="Every project is custom, but here's what most clients invest."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
          </div>
          <p className="mt-8 rounded-xl border border-line bg-surface p-5 text-sm text-text-soft">
            We accept bank transfer, JazzCash, EasyPaisa, and international wire.
          </p>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Pricing questions" />
          <div className="mt-8"><FAQAccordion faqs={pricingFaqs} /></div>
        </div>
      </section>
    </>
  );
}
