import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/shared/PortfolioCard";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function PortfolioPreview() {
  return (
    <section className="bg-surface/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">Projects That Made an Impact</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 font-semibold text-primary">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
