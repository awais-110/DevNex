const companies = ["TechFlow", "NexaRetail", "BuildRight", "SwiftPay", "OrbMedia", "DigitalNest", "RetailHub", "SwiftCare"];

export function LogoScroller() {
  const items = [...companies, ...companies];

  return (
    <section className="border-y border-line bg-surface/70 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Companies we have worked with</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {items.map((company, index) => (
              <div key={`${company}-${index}`} className="flex items-center gap-3 text-text-muted">
                <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-primary/60" />
                <span className="font-display text-xl font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
