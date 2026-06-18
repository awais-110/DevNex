import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { projects } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/pricing", "/blog", "/careers", "/contact", "/privacy-policy", "/terms-of-service"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...services.filter((service) => service.slug !== "mobile-apps").map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${siteUrl}/portfolio/${project.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
