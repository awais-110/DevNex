import { Code2 } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const rows = [
  ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  ["Supabase", "AWS", "Vercel", "OpenAI", "Figma", "Tailwind CSS"],
];

export function TechStackSection() {
  return (
    <section className="bg-surface/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionLabel>Tech We Use</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">Built on Technologies That Last</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-text-soft">We do not chase trends. We use battle-tested, enterprise-grade tools.</p>
        <div className="mt-10 grid gap-4">
          {rows.map((row, rowIndex) => (
            <div key={row.join("-")} className="flex flex-wrap justify-center gap-3">
              {row.map((tech, index) => (
                <ScrollReveal key={tech} delay={(rowIndex * row.length + index) * 0.04}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm font-medium text-text-soft transition-colors hover:border-primary hover:text-primary">
                    <Code2 className="h-4 w-4 text-primary" />
                    {tech}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
