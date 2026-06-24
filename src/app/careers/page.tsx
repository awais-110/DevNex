import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Techways for developers, SEO specialists, and UI/UX designers.",
};

const roles = [
  ["Frontend Developer", "Remote, Part-time/Full-time", "React, Next.js, TypeScript, Tailwind"],
  ["SEO Specialist", "Remote, Part-time", "Technical SEO, content briefs, Search Console"],
  ["UI/UX Designer", "Remote, Project-based", "Figma, brand systems, product flows"],
];

const benefits = ["Remote Work", "Real Projects", "Growth", "Competitive Pay"];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Build the Future With Us" text="We're a small team that ships big things. If you're good at what you do and want to grow, let's talk." />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Open Roles" title="Current openings" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roles.map(([role, type, skills]) => (
              <article key={role} className="rounded-xl border border-line bg-surface p-6">
                <h2 className="font-display text-xl font-semibold text-text-main">{role}</h2>
                <p className="mt-2 text-sm text-primary">{type}</p>
                <p className="mt-4 text-sm leading-7 text-text-soft">{skills}</p>
                <Button href={`mailto:hello@techways.com?subject=Application: ${role}`} className="mt-6" variant="secondary">Apply Now</Button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Why Work Here" title="You get room to do strong work" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {benefits.map((benefit) => <div key={benefit} className="rounded-xl border border-line bg-surface p-6 font-semibold text-text-main">{benefit}</div>)}
          </div>
          <form className="mt-12 grid gap-4 rounded-xl border border-line bg-surface p-6 md:grid-cols-2">
            <input className="field" placeholder="Name" />
            <input className="field" placeholder="Role" />
            <input className="field md:col-span-2" placeholder="Portfolio / GitHub link" />
            <textarea className="field min-h-32 md:col-span-2" placeholder="Short intro" />
            <Button className="md:w-max">Send Application</Button>
          </form>
        </div>
      </section>
    </>
  );
}
