import { AssetCard } from "@/components/dashboard/AssetCard";
import type { MarketIndex } from "@/types/market";

/**
 * Market Overview section: a responsive grid of benchmark indices.
 * MarketIndex is adapted to the Asset shape AssetCard expects.
 */
export function MarketOverview({ indices }: { indices: MarketIndex[] }) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold tracking-wide text-white/80">Market Overview</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indices.map((idx) => (
          <AssetCard
            key={idx.symbol}
            asset={{
              symbol: idx.symbol,
              name: idx.name,
              price: idx.value,
              changePercent: idx.changePercent,
              type: idx.symbol === "BTC" ? "crypto" : "etf",
            }}
          />
        ))}
      </div>
    </section>
  );
}
