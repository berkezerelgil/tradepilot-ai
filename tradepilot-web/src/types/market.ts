/**
 * Shared domain types for the TradePilot dashboard.
 * These are the contracts the UI renders against — mock data now, real API later.
 */

export type AssetType = "stock" | "etf" | "crypto";

/** Core asset shape (required by the sprint spec). */
export interface Asset {
  symbol: string;
  name: string;
  price: number;
  /** Percent change over the period, e.g. 1.24 or -0.87. */
  changePercent: number;
  type: AssetType;
}

/** A held position — an Asset the user owns, with cost basis. */
export interface Holding extends Asset {
  quantity: number;
  avgCost: number;
}

/** Aggregated portfolio figures shown in the summary card. */
export interface PortfolioSummaryData {
  totalValue: number;
  dayChangeValue: number;
  dayChangePercent: number;
  totalReturnPercent: number;
  holdingsCount: number;
  /** Recent value points for the sparkline (oldest → newest). */
  trend: number[];
}

/** A market index / benchmark (e.g. S&P 500, BTC). */
export interface MarketIndex {
  symbol: string;
  name: string;
  value: number;
  changePercent: number;
}

export type Sentiment = "positive" | "neutral" | "negative";

/** A preview of an AI-generated market note. */
export interface AIInsight {
  title: string;
  summary: string;
  sentiment: Sentiment;
  generatedAt: string;
}

/** A Strategy Library entry (educational content). */
export interface Strategy {
  title: string;
  theme: string;
  summary: string;
  readMinutes: number;
}
