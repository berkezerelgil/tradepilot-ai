/** Number/format helpers shared across dashboard components. */

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

/** $48,213.57 */
export function formatCurrency(value: number): string {
  return usd.format(value);
}

/** +1.29% / -0.87% (always signed, 2 decimals) */
export function formatPercent(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

/** +$612.34 / -$44.10 (signed currency, for day change) */
export function formatSignedCurrency(value: number): string {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${usd.format(Math.abs(value))}`;
}

/** Returns the semantic direction of a change for coloring. */
export function direction(value: number): "up" | "down" | "flat" {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "flat";
}
