import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogCard } from "@/components/shared/BlogCard";
import { BlogFilter } from "@/components/shared/BlogFilter";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical web, AI, design, SEO, and business insights from DevNex Solution.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero label="Insights" title="Insights & Tutorials" text="Practical notes for founders who want better websites, automation, traffic, and launch decisions." />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogCard post={blogPosts[0]} featured />
          <div className="mt-12"><BlogFilter /></div>
        </div>
      </section>
    </>
  );
}
