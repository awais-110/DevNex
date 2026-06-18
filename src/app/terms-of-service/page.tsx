import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = { title: "Terms of Service", description: "DevNex Solution terms of service." };

const sections = [
  ["Service agreement", "Project scope, timelines, and deliverables are confirmed in writing before work starts."],
  ["Payment terms", "Most projects require an advance payment, with remaining payments tied to milestones or launch."],
  ["IP ownership", "After full payment, you own the final approved deliverables unless a third-party license says otherwise."],
  ["Revision policy", "Included revision rounds are defined in the proposal. Extra revisions may affect timeline and cost."],
  ["Liability limitations", "We are not liable for indirect losses, platform outages, or third-party service failures."],
  ["Governing law", "These terms are governed by the laws of Pakistan."],
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" text="Last updated: June 2025" />
      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="prose max-w-none prose-headings:text-text-main prose-p:text-text-soft prose-strong:text-text-main">
          <ul>{sections.map(([heading]) => <li key={heading}><a href={`#${heading.toLowerCase().replaceAll(" ", "-")}`}>{heading}</a></li>)}</ul>
          {sections.map(([heading, text]) => (
            <section key={heading} id={heading.toLowerCase().replaceAll(" ", "-")}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
