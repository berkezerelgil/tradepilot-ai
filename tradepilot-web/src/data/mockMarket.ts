/**
 * Mock market data for Sprint 1.
 *
 * Everything the dashboard renders comes from here. No network, no API keys.
 * Values are illustrative and clearly fictional — this is a UI-only sprint.
 */

import type {
  AIInsight,
  Asset,
  MarketIndex,
  PortfolioSummaryData,
  Strategy,
} from "@/types/market";

export const portfolioSummary: PortfolioSummaryData = {
  totalValue: 48213.57,
  dayChangeValue: 612.34,
  dayChangePercent: 1.29,
  totalReturnPercent: 18.4,
  holdingsCount: 7,
  trend: [45200, 45680, 45410, 46120, 46890, 46540, 47320, 47010, 47880, 48213],
};

export const watchlist: Asset[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 227.52, changePercent: 0.84, type: "stock" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 431.18, changePercent: 1.12, type: "stock" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 138.44, changePercent: -2.31, type: "stock" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 251.09, changePercent: 3.47, type: "stock" },
  { symbol: "VOO", name: "Vanguard S&P 500 ETF", price: 512.76, changePercent: 0.41, type: "etf" },
  { symbol: "BTC", name: "Bitcoin", price: 67421.0, changePercent: -1.08, type: "crypto" },
  { symbol: "ETH", name: "Ethereum", price: 3284.15, changePercent: 2.19, type: "crypto" },
];

export const marketIndices: MarketIndex[] = [
  { symbol: "SPX", name: "S&P 500", value: 5738.17, changePercent: 0.55 },
  { symbol: "NDX", name: "Nasdaq 100", value: 20124.63, changePercent: 0.92 },
  { symbol: "DJI", name: "Dow Jones", value: 42063.36, changePercent: -0.18 },
  { symbol: "BTC", name: "Bitcoin", value: 67421.0, changePercent: -1.08 },
];

export const aiInsight: AIInsight = {
  title: "Tech leads a mixed session",
  summary:
    "Large-cap technology names are driving today's gains, with software and semiconductors diverging. Broad indices are modestly higher while crypto softens. Context only — this is educational analysis, not a recommendation.",
  sentiment: "positive",
  generatedAt: "Today, 9:41 AM",
};

export const strategies: Strategy[] = [
  {
    title: "Dollar-Cost Averaging",
    theme: "Fundamentals",
    summary: "Investing a fixed amount on a schedule to smooth out entry price over time.",
    readMinutes: 4,
  },
  {
    title: "Diversification Basics",
    theme: "Risk",
    summary: "How spreading exposure across assets can reduce the impact of any single move.",
    readMinutes: 6,
  },
  {
    title: "Value vs. Growth",
    theme: "Styles",
    summary: "The trade-offs between buying established cash-flows and betting on expansion.",
    readMinutes: 5,
  },
];
