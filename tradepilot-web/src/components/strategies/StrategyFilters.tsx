"use client";

import { CATEGORY_OPTIONS, DIFFICULTY_OPTIONS, RISK_OPTIONS } from "@/data/mockStrategies";
import { cn } from "@/lib/cn";
import type { StrategyFilterState } from "@/types/strategy";

/**
 * Controlled filter group. It holds no state of its own — the parent owns the
 * filter state and passes it down, so this component stays reusable and easy
 * to test. Client Component because it handles clicks.
 */
interface StrategyFiltersProps {
  filters: StrategyFilterState;
  onChange: (filters: StrategyFilterState) => void;
  onReset: () => void;
  resultCount: number;
}

/** One row of pill buttons for a single filter dimension. */
function FilterRow<T extends string>({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: readonly T[];
  active: T;
  onSelect: (value: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <p className="w-20 shrink-0 text-xs uppercase tracking-wide text-white/35">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            aria-pressed={active === option}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400",
              active === option
                ? "bg-sky-500 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
            )}
          >
            {option === "all" ? "All" : option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function StrategyFilters({
  filters,
  onChange,
  onReset,
  resultCount,
}: StrategyFiltersProps) {
  const isFiltered =
    filters.category !== "all" || filters.difficulty !== "all" || filters.riskLevel !== "all";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex flex-col gap-4">
        <FilterRow
          label="Category"
          options={CATEGORY_OPTIONS}
          active={filters.category}
          onSelect={(category) => onChange({ ...filters, category })}
        />
        <FilterRow
          label="Level"
          options={DIFFICULTY_OPTIONS}
          active={filters.difficulty}
          onSelect={(difficulty) => onChange({ ...filters, difficulty })}
        />
        <FilterRow
          label="Risk"
          options={RISK_OPTIONS}
          active={filters.riskLevel}
          onSelect={(riskLevel) => onChange({ ...filters, riskLevel })}
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <p className="text-xs text-white/40">
          {resultCount} {resultCount === 1 ? "strategy" : "strategies"}
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-sky-400 transition-colors hover:text-sky-300"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
