import { SectionLabel } from "@/components/shared/SectionLabel";

export function SectionHeader({
  label,
  title,
  text,
}: {
  label?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-text-main">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-text-soft">{text}</p> : null}
    </div>
  );
}
