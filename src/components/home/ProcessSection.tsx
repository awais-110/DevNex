"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const steps = [
  ["Discovery", "We start by understanding your business, goals, audience, and competition. No templates, just strategy."],
  ["Design", "Wireframes, mockups, and brand alignment. You approve every pixel before we write a line of code."],
  ["Build", "Full-stack development with clean code, performance optimization, and security baked in from day one."],
  ["Launch & Grow", "Deployment, analytics setup, SEO, and ongoing support. We stay in your corner after launch."],
];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">A Process Built for Results</h2>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-line md:block" />
          <motion.div
            className="absolute left-0 top-8 hidden h-px bg-primary md:block"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={reduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          {steps.map(([title, text], index) => (
            <div key={title} className="relative rounded-xl border border-line bg-surface p-6">
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-line-bright bg-elevated font-display text-xl font-bold text-primary">
                {index + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-text-main">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
