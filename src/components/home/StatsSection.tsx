import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { to: 50, suffix: "+", label: "Projects Delivered" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
  { to: 3, suffix: "x", label: "Avg. Traffic Growth" },
  { to: 24, suffix: "hr", label: "Support Response" },
];

export function StatsSection() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line bg-elevated/50 p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-text-main">
              <AnimatedCounter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
