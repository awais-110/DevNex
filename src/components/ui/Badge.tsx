import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-elevated px-3 py-1 text-xs font-medium text-text-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
