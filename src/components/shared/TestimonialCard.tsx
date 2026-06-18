import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6">
      <div className="mb-5 flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="leading-7 text-text-soft">{testimonial.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-text-main">
            {testimonial.name} <span className="text-text-muted">({testimonial.flag})</span>
          </p>
          <p className="text-sm text-text-muted">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}
