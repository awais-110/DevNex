import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
};

const variants = {
  primary: "border border-primary bg-primary text-white hover:bg-[#451878]",
  secondary:
    "border border-line-bright bg-white text-text-main hover:border-primary hover:bg-surface hover:text-primary",
  ghost: "text-text-main hover:text-primary",
  danger: "border border-text-main bg-text-main text-white hover:border-primary hover:bg-primary",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  loading,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
  const content = loading ? (
    <>
      <Loader2 className="h-4 w-4 animate-spin" />
      Sending
    </>
  ) : (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
