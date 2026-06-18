import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-primary">
            <Image
              src="/brand/devnex-logo.png"
              alt="DevNex Solution"
              width={779}
              height={635}
              className="h-auto w-32"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-text-soft">
            A Karachi software house building websites, AI systems, brand identities, SEO, and marketing engines.
          </p>
          <div className="mt-5 flex gap-3 text-text-muted">
            <Link className="transition-colors hover:text-primary" href="https://linkedin.com" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
            <Link className="transition-colors hover:text-primary" href="https://instagram.com" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
            <Link className="transition-colors hover:text-primary" href="https://github.com" aria-label="GitHub"><Github className="h-5 w-5" /></Link>
          </div>
        </div>
        <FooterColumn title="Services" links={services.map((service) => ({ label: service.title, href: `/services/${service.slug}` }))} />
        <FooterColumn
          title="Company"
          links={[
            { label: "About", href: "/about" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
          ]}
        />
        <div>
          <h3 className="font-semibold text-text-main">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-text-soft">
            <p>hello@devnexsolution.com</p>
            <p>Karachi, Pakistan</p>
            <p>Mon-Sat, 9am-7pm PKT</p>
          </div>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 DevNex Solution</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-text-main">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-sm text-text-soft hover:text-primary" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
