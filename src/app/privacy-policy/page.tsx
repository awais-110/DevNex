import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = { title: "Privacy Policy", description: "DevNex Solution privacy policy." };

const sections = [
  ["Data collection", "We collect contact details, project information, analytics data, and messages you send through our forms."],
  ["Cookies", "We may use cookies and analytics tools to understand site performance and improve pages."],
  ["Third-party services", "We use providers such as Vercel, Google Analytics, and Resend to operate the website."],
  ["Data retention", "We keep inquiry data only as long as needed for communication, support, and basic business records."],
  ["Your rights", "You can ask us to update or delete your personal data by emailing hello@devnexsolution.com."],
  ["Contact", "For privacy questions, contact hello@devnexsolution.com."],
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}

function LegalPage({ title, sections }: { title: string; sections: string[][] }) {
  return (
    <>
      <PageHero title={title} text="Last updated: June 2025" />
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
