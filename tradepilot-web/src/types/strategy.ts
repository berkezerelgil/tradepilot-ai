/**
 * Strategy Library domain types.
 *
 * These are educational content descriptors — they classify *how a strategy
 * works* and *who it suits*. They deliberately carry no signals, targets, or
 * actions, so nothing here can be read as a recommendation.
 */

/** What kind of approach the strategy represents. */
export type StrategyCategory = "long-term" | "technical" | "portfolio" | "algorithmic";

/** How much prior knowledge a reader needs. */
export type StrategyDifficulty = "beginner" | "intermediate" | "advanced";

/** Educational characterization of the risk profile — not a rating or score. */
export type StrategyRiskLevel = "low" | "medium" | "high";

/** The timeframe the strategy typically operates over. */
export type StrategyTimeHorizon = "short-term" | "medium-term" | "long-term";

/**
 * A single Strategy Library entry.
 *
 * `id` is the stable primary key (survives renames); `slug` is the
 * human-readable URL segment for a future /strategies/[slug] detail page.
 */
export interface StrategyItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: StrategyCategory;
  difficulty: StrategyDifficulty;
  riskLevel: StrategyRiskLevel;
  timeHorizon: StrategyTimeHorizon;
  tags: string[];
}

/** The three filter dimensions on the Strategies page. "all" means no filter. */
export interface StrategyFilterState {
  category: StrategyCategory | "all";
  difficulty: StrategyDifficulty | "all";
  riskLevel: StrategyRiskLevel | "all";
}
