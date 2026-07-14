import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

/**
 * Consistent scaffold for routes whose features land in a later sprint.
 * Keeps every placeholder on-brand instead of a bare "coming soon" string.
 */
export function PagePlaceholder({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-sky-400">TradePilot AI</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-white/50">{description}</p>
      </header>

      {children ?? (
        <Card className="flex flex-col items-center justify-center gap-3 py-16 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 text-white/40">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
            </svg>
          </div>
          <p className="text-sm font-medium text-white/70">Coming in a future sprint</p>
          <p className="max-w-sm text-xs text-white/40">
            This section is scaffolded and on-brand. The interface and data wiring will be built out
            as the roadmap progresses.
          </p>
        </Card>
      )}
    </main>
  );
}
