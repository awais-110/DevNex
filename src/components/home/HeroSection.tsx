"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "24hr", label: "Response" },
];

const networkPaths = [
  "M40 88 L145 50 L235 112 L340 62",
  "M40 88 L128 165 L235 112 L322 176",
  "M145 50 L190 18",
  "M128 165 L176 208",
];

const networkNodes = [
  [40, 88],
  [145, 50],
  [235, 112],
  [340, 62],
  [128, 165],
  [322, 176],
  [190, 18],
  [176, 208],
];

function AINetwork({
  className,
  reverse = false,
  reducedMotion,
}: {
  className: string;
  reverse?: boolean;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.svg
      viewBox="0 0 380 225"
      className={className}
      aria-hidden="true"
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {networkPaths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="#D9CAE9"
          strokeWidth="1"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.45 + index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {!reducedMotion ? (
        <>
          <circle r="3" fill="#5B2595">
            <animateMotion
              dur="3.8s"
              repeatCount="indefinite"
              path={reverse ? networkPaths[1] : networkPaths[0]}
            />
          </circle>
          <circle r="2.5" fill="#7A35BD">
            <animateMotion
              dur="4.6s"
              begin="1.1s"
              repeatCount="indefinite"
              path={reverse ? networkPaths[0] : networkPaths[1]}
            />
          </circle>
        </>
      ) : null}

      {networkNodes.map(([cx, cy], index) => (
        <motion.g
          key={`${cx}-${cy}`}
          initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r="7" fill="#FFFFFF" stroke="#C7AFD9" />
          <circle cx={cx} cy={cy} r="2" fill={index % 3 === 0 ? "#5B2595" : "#83768F"} />
        </motion.g>
      ))}
    </motion.svg>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = (values: { opacity: number; y?: number }) =>
    reduceMotion ? false : values;

  return (
    <section className="relative mt-20 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden bg-white px-5 py-16 text-center sm:px-6 lg:py-14">
      <div className="hero-bg absolute inset-0" aria-hidden="true" />

      <AINetwork
        className="pointer-events-none absolute -left-20 top-[24%] hidden w-[27vw] max-w-[360px] opacity-55 lg:block"
        reducedMotion={reduceMotion}
      />
      <AINetwork
        className="pointer-events-none absolute -right-20 bottom-[19%] hidden w-[26vw] max-w-[350px] -scale-x-100 opacity-50 lg:block"
        reverse
        reducedMotion={reduceMotion}
      />

      <motion.div
        initial={initial({ opacity: 0, y: 10 })}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.85 }}
        className="pointer-events-none absolute left-[5%] top-[31%] hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-text-muted 2xl:flex"
        aria-hidden="true"
      >
        <span className="h-px w-7 bg-primary" />
        Neural systems
      </motion.div>
      <motion.div
        initial={initial({ opacity: 0, y: -10 })}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 1 }}
        className="pointer-events-none absolute bottom-[25%] right-[5%] hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-text-muted 2xl:flex"
        aria-hidden="true"
      >
        Intelligent automation
        <span className="h-px w-7 bg-primary" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.div
          initial={initial({ opacity: 0, y: -10 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-badge inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:px-4 sm:text-xs sm:tracking-widest"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Pakistan&apos;s Premier Software House
        </motion.div>

        <motion.h1
          initial={initial({ opacity: 0, y: 30 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-5 max-w-5xl text-[clamp(2.45rem,5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-gray-950 sm:mt-6"
        >
          <span className="block">We Build Digital Products</span>
          <span className="block">
            That <span className="text-primary">Actually Work</span>
          </span>
        </motion.h1>

        <motion.p
          initial={initial({ opacity: 0, y: 20 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.3 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
        >
          Websites, AI systems, and design for businesses that mean it.
        </motion.p>

        <motion.div
          initial={initial({ opacity: 0, y: 20 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.45 }}
          className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#451878] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 border border-line-bright px-6 py-3 text-sm font-semibold text-text-main transition-colors duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.p
          initial={initial({ opacity: 0 })}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.6 }}
          className="mt-5 text-xs tracking-wide text-gray-400 sm:text-sm"
        >
          50+ projects delivered · Pakistan &amp; UAE
        </motion.p>

        <motion.div
          initial={initial({ opacity: 0, y: 10 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.75 }}
          className="mt-9 flex items-center justify-center divide-x divide-gray-200 sm:mt-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-3 text-center first:pl-0 last:pr-0 sm:px-8"
            >
              <div className="text-xl font-bold text-gray-950 sm:text-2xl">{stat.value}</div>
              <div className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-gray-400 sm:text-xs sm:tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={initial({ opacity: 0 })}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.5 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
