import type { Metadata } from "next";
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Techways for websites, AI automation, design, SEO, and digital marketing.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Techways",
    url: `${siteUrl}/contact`,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero label="Contact" title="Tell us what you want to build" text="Share the useful details. We will reply within 24 hours with a practical next step." />
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-xl border border-line bg-surface p-6"><ContactForm /></div>
          <aside className="space-y-5">
            {[
              [Mail, "Email", "hello@techways.com"],
              [MessageCircle, "WhatsApp", "+92 300 0000000"],
              [MapPin, "Location", "Karachi, Pakistan"],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="rounded-xl border border-line bg-surface p-5">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-text-main">{title as string}</p>
                <p className="text-sm text-text-soft">{text as string}</p>
              </div>
            ))}
            <div className="rounded-xl border border-line bg-surface p-5 text-sm leading-7 text-text-soft">
              <p>Response time: Usually within 24 hours</p>
              <p>Working hours: Mon-Sat, 9am-7pm PKT</p>
              <Link className="mt-4 inline-block font-semibold text-primary" href="https://calendly.com/">Book a free 30-minute call</Link>
            </div>
            <div className="flex gap-3 text-text-muted">
              <Link href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></Link>
              <Link href="https://instagram.com" aria-label="Instagram"><Instagram /></Link>
              <Link href="https://github.com" aria-label="GitHub"><Github /></Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
