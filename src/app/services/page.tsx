import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { generalFaqs } from "@/lib/data/faqs";
import { icons } from "@/lib/icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/shared/Button";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, graphic design, AI automation, SEO, digital marketing, and mobile apps from DevNex Solution.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything You Need to Compete Online"
        text="One focused team for strategy, design, development, automation, SEO, and growth."
      >
        <div className="grid gap-3 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-xl border border-line bg-surface p-4 transition hover:border-primary">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h2 className="font-display text-xl font-semibold text-text-main">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-soft">{service.shortDesc}</p>
              </Link>
            );
          })}
        </div>
      </PageHero>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.slug} className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div
                  className="flex aspect-[4/3] items-center justify-center rounded-xl border border-line bg-elevated"
                  style={{ borderTopColor: service.color }}
                >
                  {/* TODO: Replace with real image */}
                  <Icon className="h-20 w-20 text-primary" />
                </div>
                <div>
                  <Badge>{service.shortDesc}</Badge>
                  <h2 className="mt-4 font-display text-3xl font-bold text-text-main">{service.title}</h2>
                  <p className="mt-4 leading-8 text-text-soft">{service.fullDesc}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.deliverables.slice(0, 6).map((item) => (
                      <div key={item} className="rounded-lg border border-line bg-surface p-3 text-sm text-text-soft">{item}</div>
                    ))}
                  </div>
                  <Button href={`/contact?service=${service.slug}`} className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
                    Get a Quote for {service.title}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Common questions" />
          <div className="mt-8"><FAQAccordion faqs={generalFaqs} /></div>
        </div>
      </section>
    </>
  );
}
