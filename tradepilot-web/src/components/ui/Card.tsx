import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Removes default padding when a child needs to control it (e.g. tables). */
  flush?: boolean;
}

/**
 * The base surface for every dashboard panel. Keeps borders, radius, and
 * background consistent so panels feel like one system.
 */
export function Card({ className, flush = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] shadow-sm shadow-black/20",
        flush ? "" : "p-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Optional header row for a Card: a title and an optional action slot. */
export function CardHeader({
  title,
  action,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 flex items-center justify-between", className)}>
      <h2 className="text-sm font-semibold tracking-wide text-white/80">{title}</h2>
      {action}
    </div>
  );
}
