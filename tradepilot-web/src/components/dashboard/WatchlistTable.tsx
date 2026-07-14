import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { direction, formatCurrency, formatPercent } from "@/lib/format";
import type { Asset } from "@/types/market";

function ChangeText({ value }: { value: number }) {
  const up = direction(value) !== "down";
  return (
    <span className={`font-medium tabular-nums ${up ? "text-emerald-300" : "text-rose-300"}`}>
      {formatPercent(value)}
    </span>
  );
}

/**
 * Watchlist of tracked assets.
 * - md and up: a proper table with column headers.
 * - below md: the table is hidden and each asset renders as a stacked row,
 *   so nothing overflows on a phone.
 */
export function WatchlistTable({ assets }: { assets: Asset[] }) {
  return (
    <Card flush>
      <CardHeader title="Watchlist" className="p-5 pb-0" />

      {/* Desktop / tablet: table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/40">
              <th className="px-5 py-3 font-medium">Symbol</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 text-right font-medium">Price</th>
              <th className="px-5 py-3 text-right font-medium">Change</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a) => (
              <tr key={a.symbol} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-3 font-semibold">{a.symbol}</td>
                <td className="px-5 py-3 text-white/60">{a.name}</td>
                <td className="px-5 py-3">
                  <Badge tone="neutral" className="uppercase">
                    {a.type}
                  </Badge>
                </td>
                <td className="px-5 py-3 text-right tabular-nums">{formatCurrency(a.price)}</td>
                <td className="px-5 py-3 text-right">
                  <ChangeText value={a.changePercent} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked rows */}
      <ul className="divide-y divide-white/5 md:hidden">
        {assets.map((a) => (
          <li key={a.symbol} className="flex items-center justify-between px-5 py-3">
            <div>
              <p className="font-semibold">{a.symbol}</p>
              <p className="text-xs text-white/50">{a.name}</p>
            </div>
            <div className="text-right">
              <p className="tabular-nums">{formatCurrency(a.price)}</p>
              <ChangeText value={a.changePercent} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
