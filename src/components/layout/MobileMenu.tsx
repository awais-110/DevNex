"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { services } from "@/lib/data/services";
import { Button } from "@/components/shared/Button";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const links = [
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Pricing", "/pricing"],
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Careers", "/careers"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-base p-6 md:hidden"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={onClose}
          aria-label="Techways home"
          className="inline-flex items-center"
        >
          <Image
            src="/brand/techways-logo.svg"
            alt="Techways"
            width={980}
            height={220}
            className="h-auto w-[190px]"
          />
        </Link>
        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center border border-line text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="mt-10 grid gap-4">
        {links.map(([label, href], index) => (
          <motion.div
            key={href}
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.04 }}
          >
            <Link onClick={onClose} className="block font-display text-3xl font-bold text-text-main" href={href}>
              {label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {services.map((service) => (
          <Link
            onClick={onClose}
            className="border border-line bg-surface p-3 text-sm text-text-soft transition-colors hover:border-primary hover:text-primary"
            href={`/services/${service.slug}`}
            key={service.slug}
          >
            {service.title}
          </Link>
        ))}
      </div>
      <Button href="/contact" className="mt-8 w-full">
        Get a Quote
      </Button>
    </motion.div>
  );
}
