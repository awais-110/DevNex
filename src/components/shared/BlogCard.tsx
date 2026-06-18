import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { icons } from "@/lib/icons";
import { Badge } from "@/components/ui/Badge";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const Icon = icons[post.icon];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group grid overflow-hidden border border-line bg-surface transition-colors hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary ${featured ? "md:grid-cols-[0.9fr_1.1fr]" : ""}`}
    >
      <div className="flex min-h-52 items-center justify-center border-b border-line bg-white">
        {/* TODO: Replace with real image */}
        <Icon className="h-16 w-16 text-primary/70" />
      </div>
      <div className="p-6">
        <Badge>{post.category}</Badge>
        <h3 className="mt-4 font-display text-2xl font-semibold text-text-main">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-text-soft">{post.excerpt}</p>
        <p className="mt-5 text-xs text-text-muted">
          {post.author} - {post.readTime} - {post.date}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
