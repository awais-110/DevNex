"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const offsets = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: keyof typeof offsets;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? {} : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
