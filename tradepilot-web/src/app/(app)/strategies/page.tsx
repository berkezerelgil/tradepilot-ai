import { StrategyBrowser } from "@/components/strategies/StrategyBrowser";
import { strategies } from "@/data/mockStrategies";

/**
 * Strategy Library.
 *
 * Stays a Server Component: it reads the data and passes it down. All
 * interactivity lives inside StrategyBrowser, so the cards and page shell
 * ship no client JavaScript.
 */
export default function StrategiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-widest text-sky-400">TradePilot AI</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Strategy Library</h1>
        <p className="mt-1 max-w-2xl text-sm text-white/50">
          Learn how common investment approaches work, what they assume, and the trade-offs they
          carry. Explanations only — no signals, no targets, no recommendations.
        </p>
      </header>

      {/* Prominent, page-level disclaimer — required, and stated plainly. */}
      <div
        role="note"
        className="mb-6 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="mt-0.5 shrink-0 text-amber-300"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
        <p className="text-sm text-amber-100/80">
          <span className="font-semibold text-amber-200">
            Educational content only. Not financial advice.
          </span>{" "}
          These explainers describe how strategies work. They are not suggestions to buy, sell, or
          hold any asset.
        </p>
      </div>

      <StrategyBrowser strategies={strategies} />
    </main>
  );
}
