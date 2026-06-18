"use client";

import { motion, useScroll } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-primary"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
