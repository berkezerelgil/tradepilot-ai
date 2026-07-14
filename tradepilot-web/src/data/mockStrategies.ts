/**
 * Mock Strategy Library dataset (Sprint 1 — no API, no database).
 *
 * Every description explains *how an approach works* and *what trade-offs it
 * carries*. None tells the reader to do anything. This is a hard content rule:
 * the Strategy Library is educational, never advisory.
 */

import type {
  StrategyCategory,
  StrategyDifficulty,
  StrategyItem,
  StrategyRiskLevel,
} from "@/types/strategy";

export const strategies: StrategyItem[] = [
  {
    id: "str_001",
    slug: "dollar-cost-averaging",
    title: "Dollar Cost Averaging",
    shortDescription:
      "Investing a fixed amount at regular intervals regardless of price, so purchases are spread across many entry points instead of one. Reduces the impact of timing, but does not remove market risk.",
    category: "long-term",
    difficulty: "beginner",
    riskLevel: "low",
    timeHorizon: "long-term",
    tags: ["passive", "automation", "discipline"],
  },
  {
    id: "str_002",
    slug: "value-investing",
    title: "Value Investing",
    shortDescription:
      "Analyzing company fundamentals to identify assets trading below an estimated intrinsic value. Relies on financial statement analysis and patience; an asset can stay mispriced for a long time.",
    category: "long-term",
    difficulty: "intermediate",
    riskLevel: "medium",
    timeHorizon: "long-term",
    tags: ["fundamentals", "valuation", "patience"],
  },
  {
    id: "str_003",
    slug: "growth-investing",
    title: "Growth Investing",
    shortDescription:
      "Focusing on companies expected to expand revenue or earnings faster than the market. Valuations are often high, so results depend heavily on growth expectations being met.",
    category: "long-term",
    difficulty: "intermediate",
    riskLevel: "high",
    timeHorizon: "long-term",
    tags: ["fundamentals", "earnings", "volatility"],
  },
  {
    id: "str_004",
    slug: "momentum-trading",
    title: "Momentum Trading",
    shortDescription:
      "Studying assets that have shown strong recent price movement on the premise that trends can persist. Highly sensitive to reversals, and requires strict exit rules to manage drawdowns.",
    category: "technical",
    difficulty: "advanced",
    riskLevel: "high",
    timeHorizon: "short-term",
    tags: ["trend", "indicators", "risk-management"],
  },
  {
    id: "str_005",
    slug: "swing-trading",
    title: "Swing Trading",
    shortDescription:
      "Holding positions for days or weeks to study medium-length price swings, typically using chart patterns and technical indicators. Demands consistent monitoring and defined risk limits.",
    category: "technical",
    difficulty: "intermediate",
    riskLevel: "medium",
    timeHorizon: "medium-term",
    tags: ["charts", "technical-analysis", "timing"],
  },
  {
    id: "str_006",
    slug: "grid-trading",
    title: "Grid Trading",
    shortDescription:
      "A rules-based approach that places orders at preset intervals above and below a price level to work within a range. Struggles in strong trending markets, where the range assumption breaks down.",
    category: "algorithmic",
    difficulty: "advanced",
    riskLevel: "high",
    timeHorizon: "short-term",
    tags: ["automation", "range-bound", "rules-based"],
  },
  {
    id: "str_007",
    slug: "diversification",
    title: "Diversification",
    shortDescription:
      "Spreading exposure across assets, sectors, or regions so no single position dominates outcomes. Reduces concentration risk, but cannot eliminate broad market declines.",
    category: "portfolio",
    difficulty: "beginner",
    riskLevel: "low",
    timeHorizon: "long-term",
    tags: ["risk-management", "allocation", "correlation"],
  },
  {
    id: "str_008",
    slug: "portfolio-rebalancing",
    title: "Portfolio Rebalancing",
    shortDescription:
      "Periodically restoring a portfolio to its target allocation after prices drift it out of balance. Enforces a systematic process, though it can trigger transaction costs and taxes.",
    category: "portfolio",
    difficulty: "intermediate",
    riskLevel: "low",
    timeHorizon: "medium-term",
    tags: ["allocation", "discipline", "maintenance"],
  },
];

/* ---------- Filter options (single source of truth for the UI) ---------- */

export const CATEGORY_OPTIONS: readonly (StrategyCategory | "all")[] = [
  "all",
  "long-term",
  "technical",
  "portfolio",
  "algorithmic",
] as const;

export const DIFFICULTY_OPTIONS: readonly (StrategyDifficulty | "all")[] = [
  "all",
  "beginner",
  "intermediate",
  "advanced",
] as const;

export const RISK_OPTIONS: readonly (StrategyRiskLevel | "all")[] = [
  "all",
  "low",
  "medium",
  "high",
] as const;
