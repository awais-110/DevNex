export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 inline-flex border-l-2 border-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}
