import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { icons } from "@/lib/icons";
import { Badge } from "@/components/ui/Badge";

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = icons[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full w-full flex-col border border-line bg-surface p-6 transition-colors hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-line-bright bg-elevated">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-text-main">{service.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-text-soft">{service.fullDesc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.features.slice(0, 4).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
        Explore service
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
