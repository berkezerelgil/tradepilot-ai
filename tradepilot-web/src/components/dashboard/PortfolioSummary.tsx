import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { direction, formatCurrency, formatPercent, formatSignedCurrency } from "@/lib/format";
import type { PortfolioSummaryData } from "@/types/market";

/** Builds an SVG polyline path from trend points, scaled to the given box. */
function sparklinePoints(values: number[], width: number, height: number): string {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function PortfolioSummary({ data }: { data: PortfolioSummaryData }) {
  const dir = direction(data.dayChangePercent);
  const positive = dir !== "down";
  const stroke = positive ? "#34d399" : "#fb7185"; // emerald-400 / rose-400
  const points = sparklinePoints(data.trend, 240, 56);

  return (
    <Card className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-white/40">Portfolio value</p>
        <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight">
          {formatCurrency(data.totalValue)}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <Badge tone={positive ? "positive" : "negative"}>
            {formatPercent(data.dayChangePercent)} today
          </Badge>
          <span className={positive ? "text-emerald-300" : "text-rose-300"}>
            {formatSignedCurrency(data.dayChangeValue)}
          </span>
        </div>

        <div className="mt-4 flex gap-6 text-sm">
          <div>
            <p className="text-white/40">Total return</p>
            <p className="mt-0.5 font-medium text-emerald-300">
              {formatPercent(data.totalReturnPercent)}
            </p>
          </div>
          <div>
            <p className="text-white/40">Holdings</p>
            <p className="mt-0.5 font-medium">{data.holdingsCount}</p>
          </div>
        </div>
      </div>

      {/* Signature element: a quiet 10-point sparkline of recent value. */}
      <svg
        viewBox="0 0 240 56"
        className="h-16 w-full max-w-[240px] shrink-0"
        preserveAspectRatio="none"
        role="img"
        aria-label="Recent portfolio value trend"
      >
        <polyline points={points} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Card>
  );
}
