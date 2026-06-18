import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-px w-24 -translate-x-1/2 bg-primary" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">Ready to Build Something Great?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-text-soft">Let us talk about your project. No commitment, no fluff, just a real conversation.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            Book a Free Call
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Send us a Message
          </Button>
        </div>
        <p className="mt-6 text-sm text-text-muted">We reply within 24 hours - Pakistan & worldwide</p>
      </div>
    </section>
  );
}
