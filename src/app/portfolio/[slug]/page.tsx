import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return project ? { title: project.title, description: project.result } : {};
}

export default function CaseStudyPage({ params }: Props) {
  const index = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHero label={project.category.replaceAll("-", " ")} title={project.title} text={`${project.client} - ${project.year} - ${project.industry}`}>
        <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
      </PageHero>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader label="The Problem" title="Challenge" text={project.challenge} />
            <div className="mt-10">
              <SectionHeader label="Our Approach" title="What we did" text={project.solution} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-xl border border-line bg-surface p-6">
                <p className="font-display text-4xl font-bold text-primary">{result.metric}</p>
                <p className="mt-2 text-sm text-text-soft">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Mockups" title="Screens built for clarity" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] rounded-xl border border-line bg-elevated"
                style={{ borderTopColor: project.coverColor }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <Link href={`/portfolio/${prev.slug}`} className="inline-flex items-center gap-2 text-text-soft hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> {prev.title}
          </Link>
          <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>Start a similar project</Button>
          <Link href={`/portfolio/${next.slug}`} className="inline-flex items-center gap-2 text-text-soft hover:text-primary">
            {next.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
