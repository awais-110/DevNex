import { services } from "@/lib/data/services";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">End-to-End Digital Solutions</h2>
          <p className="mt-4 text-lg leading-8 text-text-soft">From concept to deployment, we handle every layer of your digital presence.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.08} className="h-full">
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
