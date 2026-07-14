import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { StrategyItem, StrategyRiskLevel } from "@/types/strategy";

/**
 * Risk tone is descriptive, not a verdict — "high" is not "bad", it just means
 * higher variability of outcomes. Colors read as information, not a warning.
 */
const riskTone: Record<StrategyRiskLevel, "positive" | "neutral" | "negative"> = {
  low: "positive",
  medium: "neutral",
  high: "negative",
};

/** Small label/value pair used for the three attributes. */
function Attribute({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-white/35">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

/**
 * Presentational card for one Strategy Library entry.
 * No state, no handlers — stays a Server Component so it ships zero JS.
 */
export function StrategyCard({ strategy }: { strategy: StrategyItem }) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:border-white/20">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{strategy.title}</h3>
        <Badge tone="info" className="shrink-0 capitalize">
          {strategy.category}
        </Badge>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {strategy.shortDescription}
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
        <Attribute label="Difficulty">
          <span className="text-xs font-medium capitalize text-white/80">{strategy.difficulty}</span>
        </Attribute>
        <Attribute label="Risk">
          <Badge tone={riskTone[strategy.riskLevel]} className="capitalize">
            {strategy.riskLevel}
          </Badge>
        </Attribute>
        <Attribute label="Horizon">
          <span className="text-xs font-medium text-white/80">{strategy.timeHorizon}</span>
        </Attribute>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {strategy.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/45"
          >
            #{tag}
          </li>
        ))}
      </ul>
    </Card>
  );
}
