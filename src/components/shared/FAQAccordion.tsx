"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          <button
            className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left font-semibold text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {faq.question}
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-text-muted transition",
                open === index && "rotate-180 text-primary",
              )}
            />
          </button>
          {open === index ? (
            <p className="px-5 pb-5 text-sm leading-7 text-text-soft">{faq.answer}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
