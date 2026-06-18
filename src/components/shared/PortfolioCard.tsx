import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function PortfolioCard({ project }: { project: Project }) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden border border-line bg-surface transition-colors hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-primary/[0.035]"
        style={{ borderTopColor: project.coverColor }}
      >
        {/* TODO: Replace with real image */}
        <span className="font-display text-6xl font-black text-primary/15">{initials}</span>
        <div className="absolute inset-0 flex items-end bg-primary p-5 opacity-0 transition group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
            View Case Study <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="p-5">
        <Badge className="capitalize">{project.category.replaceAll("-", " ")}</Badge>
        <h3 className="mt-4 font-display text-xl font-semibold text-text-main">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.industry}</p>
        <p className="mt-4 text-sm font-semibold text-primary">{project.result}</p>
      </div>
    </Link>
  );
}
