import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type Tone = "positive" | "negative" | "neutral" | "info";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const tones: Record<Tone, string> = {
  positive: "bg-emerald-500/15 text-emerald-300",
  negative: "bg-rose-500/15 text-rose-300",
  neutral: "bg-white/10 text-white/60",
  info: "bg-sky-500/15 text-sky-300",
};

/** Small status label. Tone carries meaning (gain/loss/sentiment/type). */
export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
