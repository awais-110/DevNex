import { testimonials } from "@/lib/data/testimonials";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>What Clients Say</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">Real Results, Real People</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
