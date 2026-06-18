"use client";

import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/data/services";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 border-b transition",
          scrolled ? "border-line bg-base" : "border-transparent bg-base",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="DevNex Solution home"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Image
              src="/brand/devnex-mark.png"
              alt=""
              width={736}
              height={442}
              priority
              className="h-9 w-auto sm:h-10"
            />
            <Image
              src="/brand/devnex-wordmark.png"
              alt="DevNex Solution"
              width={735}
              height={153}
              priority
              className="h-auto w-[116px] sm:w-[132px]"
            />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            <div className="group relative">
              <Link
                href="/services"
                className={cn("py-8 text-sm font-medium text-text-soft hover:text-text-main", pathname.startsWith("/services") && "text-text-main")}
              >
                Services
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-2 rounded-xl border border-line bg-surface p-4 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => {
                    const Icon = icons[service.icon];
                    return (
                      <Link key={service.slug} href={`/services/${service.slug}`} className="flex gap-3 rounded-lg p-3 hover:bg-elevated">
                        <Icon className="mt-1 h-5 w-5 text-primary" />
                        <span>
                          <span className="block font-semibold text-text-main">{service.title}</span>
                          <span className="text-xs leading-5 text-text-muted">{service.shortDesc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-7 text-sm font-medium text-text-soft hover:text-text-main",
                  pathname === link.href && "text-text-main after:absolute after:bottom-5 after:left-0 after:h-0.5 after:w-full after:bg-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-text-main focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      <AnimatePresence>{mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}</AnimatePresence>
    </>
  );
}
