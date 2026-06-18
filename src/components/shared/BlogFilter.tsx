"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts } from "@/lib/data/blog-posts";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/shared/BlogCard";

const categories = ["All", "Web Dev", "Design", "AI", "SEO", "Business"];

export function BlogFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const posts = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchesCategory = category === "All" || post.category === category;
        const matchesQuery = `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input className="field pl-11" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights" />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary",
                category === item ? "border-primary bg-primary text-white" : "border-line bg-surface text-text-soft hover:border-primary",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
