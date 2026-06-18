import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data/pricing";
import { Button } from "@/components/shared/Button";

export function PricingCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <article className={`relative rounded-xl border bg-surface p-6 ${plan.popular ? "border-primary" : "border-line"}`}>
      {plan.popular ? (
        <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
          POPULAR
        </span>
      ) : null}
      <h3 className="font-display text-2xl font-bold text-text-main">{plan.name}</h3>
      <p className="mt-3 text-2xl font-semibold text-primary">{plan.price}</p>
      <p className="mt-2 text-sm text-text-muted">Best for: {plan.bestFor}</p>
      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-text-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <Button href="/contact" className="mt-7 w-full" variant={plan.popular ? "primary" : "secondary"}>
        {plan.cta}
      </Button>
    </article>
  );
}
