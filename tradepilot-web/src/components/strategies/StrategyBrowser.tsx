"use client";

import { useMemo, useState } from "react";

import { StrategyCard } from "@/components/strategies/StrategyCard";
import { StrategyFilters } from "@/components/strategies/StrategyFilters";
import type { StrategyFilterState, StrategyItem } from "@/types/strategy";

const INITIAL_FILTERS: StrategyFilterState = {
  category: "all",
  difficulty: "all",
  riskLevel: "all",
};

/**
 * Owns the filter state and derives the visible list.
 *
 * This is the only stateful piece, which keeps the page itself a Server
 * Component. `strategies` arrives as a prop, so when the data later comes from
 * an API instead of a mock file, nothing in here changes.
 */
export function StrategyBrowser({ strategies }: { strategies: StrategyItem[] }) {
  const [filters, setFilters] = useState<StrategyFilterState>(INITIAL_FILTERS);

  // Recomputed only when inputs change. Pure function of (strategies, filters).
  const visible = useMemo(
    () =>
      strategies.filter((s) => {
        const matchesCategory = filters.category === "all" || s.category === filters.category;
        const matchesDifficulty =
          filters.difficulty === "all" || s.difficulty === filters.difficulty;
        const matchesRisk = filters.riskLevel === "all" || s.riskLevel === filters.riskLevel;
        return matchesCategory && matchesDifficulty && matchesRisk;
      }),
    [strategies, filters],
  );

  return (
    <div className="flex flex-col gap-6">
      <StrategyFilters
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(INITIAL_FILTERS)}
        resultCount={visible.length}
      />

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((strategy) => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
          <p className="text-sm font-medium text-white/70">No strategies match these filters</p>
          <p className="mt-1 text-xs text-white/40">Try clearing one of the filters above.</p>
        </div>
      )}
    </div>
  );
}
