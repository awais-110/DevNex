import type { ReactNode } from "react";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function PageHero({
  label,
  title,
  text,
  children,
}: {
  label?: string;
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 lg:pb-24">
      <div className="absolute left-1/2 top-0 -z-10 h-px w-32 -translate-x-1/2 bg-primary" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {label ? <SectionLabel>{label}</SectionLabel> : null}
        <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-text-main">
          {title}
        </h1>
        {text ? <p className="mt-6 max-w-3xl text-lg leading-8 text-text-soft">{text}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
