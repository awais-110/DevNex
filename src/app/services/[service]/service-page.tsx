import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/portfolio";
import { icons } from "@/lib/icons";
import { siteUrl } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/shared/Button";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { PricingCard } from "@/components/shared/PricingCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { pricingPlans } from "@/lib/data/pricing";

type Props = { params: { service: string } };

export function generateStaticParams() {
  return services.filter((service) => service.slug !== "mobile-apps").map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.service);
  if (!service) return {};
  return {
    title: service.title,
    description: service.fullDesc,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((item) => item.slug === params.service);
  if (!service || service.slug === "mobile-apps") notFound();
  const Icon = icons[service.icon];
  const related = projects.filter((project) => project.category === service.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "Organization", name: "Techways" },
    areaServed: "Pakistan",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero label="Service" title={service.title} text={service.fullDesc}>
        <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>Start This Project</Button>
      </PageHero>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Included" title="What's Included" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.deliverables.map((item) => (
              <div key={item} className="rounded-xl border border-line bg-surface p-5">
                <Icon className="mb-4 h-6 w-6 text-primary" />
                <p className="font-semibold text-text-main">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader label="Process" title={`How ${service.title} projects run`} />
            <div className="mt-8 grid gap-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-line bg-surface p-5">
                  <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-text-main">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-soft">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader label="Fit" title="Who This Is For" />
            <div className="mt-8 grid gap-4">
              {service.audiences.map((audience) => (
                <div key={audience.title} className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="font-display text-xl font-semibold text-text-main">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-soft">{audience.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Related Work" title="Proof from similar projects" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((project) => <PortfolioCard key={project.slug} project={project} />)}
            </div>
          </div>
        </section>
      ) : null}
      <section className="bg-surface/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader label="Pricing" title="Start with a clear range" text="Most clients begin with one of these investment ranges, then we refine around scope." />
            <Button href="/pricing" className="mt-6" variant="secondary">View Full Pricing</Button>
          </div>
          <PricingCard plan={pricingPlans[1]} />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title={`${service.title} questions`} />
          <div className="mt-8"><FAQAccordion faqs={service.faq} /></div>
        </div>
      </section>
    </>
  );
}
