"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "@/components/shared/PortfolioCard";

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web-development" },
  { label: "Design", value: "graphic-design" },
  { label: "AI", value: "ai-automation" },
  { label: "SEO", value: "seo" },
];

export function PortfolioFilter() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary",
              filter === item.value ? "border-primary bg-primary text-white" : "border-line bg-surface text-text-soft hover:border-primary",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <motion.div layout key={project.slug}>
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
