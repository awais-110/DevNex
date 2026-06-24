import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/shared/BlogCard";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { ReadingProgress } from "@/components/shared/ReadingProgress";
import { siteUrl } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-xl border border-line bg-surface p-5">
            <p className="font-semibold text-text-main">On this page</p>
            <nav className="mt-4 grid gap-2 text-sm text-text-soft">
              {post.sections.map((section) => <Link key={section.id} href={`#${section.id}`}>{section.heading}</Link>)}
            </nav>
          </div>
        </aside>
        <div>
          <Badge>{post.category}</Badge>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-text-main">{post.title}</h1>
          <p className="mt-4 text-text-muted">{post.author} - {post.date} - {post.readTime}</p>
          <div className="prose mt-12 max-w-none prose-headings:font-display prose-headings:text-text-main prose-p:text-text-soft prose-a:text-primary prose-strong:text-text-main prose-pre:border prose-pre:border-line prose-pre:bg-surface prose-pre:text-text-main">
            {post.sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {index === 1 ? (
                  <div className="not-prose my-8 rounded-xl border border-line bg-surface p-6">
                    <h3 className="font-display text-xl font-semibold text-text-main">Get one useful growth note a month</h3>
                    <p className="mt-2 text-sm text-text-soft">No spam. Just practical web, AI, and SEO lessons.</p>
                    <div className="mt-4"><NewsletterForm /></div>
                  </div>
                ) : null}
                {section.code ? <pre><code>{section.code}</code></pre> : null}
              </section>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-text-soft" href={`https://twitter.com/intent/tweet?url=${siteUrl}/blog/${post.slug}`}>
              <Twitter className="h-4 w-4" /> Share
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-text-soft" href={`https://www.linkedin.com/shareArticle?url=${siteUrl}/blog/${post.slug}`}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </div>
          <div className="mt-12 rounded-xl border border-line bg-surface p-6">
            <p className="font-display text-xl font-semibold text-text-main">About {post.author}</p>
            <p className="mt-2 text-sm leading-7 text-text-soft">Techways writes practical notes from real client work, launches, and audits.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {related.map((item) => <BlogCard key={item.slug} post={item} />)}
          </div>
        </div>
      </article>
    </>
  );
}
