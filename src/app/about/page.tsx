import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { team } from "@/lib/data/team";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatsSection } from "@/components/home/StatsSection";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about DevNex Solution, a Karachi software house for web, AI, design, SEO, and marketing.",
};

const values = [
  ["Delivery Over Promises", "We ship. Deadlines are not suggestions."],
  ["Quality Without Bloat", "Clean code. Fast sites. No unnecessary complexity."],
  ["Partnerships, Not Projects", "We measure our success by our clients' growth."],
];

const comparison = [
  ["Speed", "Fast sprint delivery", "Depends on availability", "Often slower"],
  ["Communication", "Direct project updates", "Varies", "Many layers"],
  ["Price", "Clear project ranges", "Cheap upfront", "High retainers"],
  ["Quality", "Senior review on core work", "Uneven", "Strong but expensive"],
  ["Support", "Post-launch care", "Often limited", "Contract dependent"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About DevNex"
        title="Karachi roots. Global standards."
        text="DevNex Solution was founded in Karachi with one idea: businesses in Pakistan deserve the same quality of digital products as Silicon Valley companies."
      />
      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div><SectionHeader label="Story" title="Built for serious businesses" /></div>
          <div className="space-y-5 text-lg leading-9 text-text-soft">
            <p>We started DevNex after seeing too many good businesses settle for slow websites, unclear branding, and agencies that disappear after launch.</p>
            <p>Our work is practical: design that earns trust, code that stays fast, automation that saves hours, and marketing tied to numbers you can see.</p>
          </div>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Values" title="How we work when nobody is watching" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-text-main">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Team" title="Small team, serious standards" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-xl border border-line bg-surface p-6 transition hover:border-primary">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 font-display text-xl font-bold text-primary">{member.initials}</div>
                <h3 className="mt-5 font-display text-xl font-semibold text-text-main">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-text-soft">{member.bio}</p>
                <div className="mt-5 flex gap-3 text-text-muted">
                  <Link href="https://linkedin.com" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Link>
                  <Link href="https://github.com" aria-label="GitHub"><Github className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Why DevNex" title="The honest comparison" />
          <div className="mt-10 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[760px] bg-surface text-left text-sm">
              <thead className="bg-elevated text-text-main">
                <tr><th className="p-4">Factor</th><th className="p-4">DevNex</th><th className="p-4">Freelancer</th><th className="p-4">Big Agency</th></tr>
              </thead>
              <tbody className="divide-y divide-line text-text-soft">
                {comparison.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4">{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <StatsSection />
      <section className="py-20 text-center">
        <SectionHeader label="Careers" title="Join the mission" text="Good at what you do and hungry to grow? We want to hear from you." />
        <Button href="/careers" className="mt-8">See Open Roles</Button>
      </section>
    </>
  );
}
