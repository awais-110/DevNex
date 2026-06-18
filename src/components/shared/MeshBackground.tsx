export function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-line lg:block" />
      <div className="absolute right-[8%] top-[28%] hidden h-24 w-1 bg-primary lg:block" />
    </div>
  );
}
