import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { direction, formatCurrency, formatPercent } from "@/lib/format";
import type { Asset } from "@/types/market";

/**
 * Compact display for one asset: symbol, name, price, and change.
 * Used in the Market Overview grid; reusable anywhere a single asset is shown.
 */
export function AssetCard({ asset }: { asset: Asset }) {
  const up = direction(asset.changePercent) !== "down";

  return (
    <Card className="transition-colors hover:border-white/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold">{asset.symbol}</p>
          <p className="mt-0.5 line-clamp-1 text-xs text-white/50">{asset.name}</p>
        </div>
        <Badge tone="neutral" className="uppercase">
          {asset.type}
        </Badge>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <p className="text-lg font-medium tabular-nums">{formatCurrency(asset.price)}</p>
        <span
          className={`text-sm font-medium tabular-nums ${
            up ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {formatPercent(asset.changePercent)}
        </span>
      </div>
    </Card>
  );
}
