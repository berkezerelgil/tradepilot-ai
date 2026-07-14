import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { MarketOverview } from "@/components/dashboard/MarketOverview";
import { PortfolioSummary } from "@/components/dashboard/PortfolioSummary";
import { StrategyLibraryPreview } from "@/components/dashboard/StrategyLibraryPreview";
import { WatchlistTable } from "@/components/dashboard/WatchlistTable";
import {
  aiInsight,
  marketIndices,
  portfolioSummary,
  strategies,
  watchlist,
} from "@/data/mockMarket";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-sky-400">TradePilot AI</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-white/50">
          Your portfolio at a glance. Analysis and education — not financial advice.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {/* Row 1: portfolio hero + AI insight */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PortfolioSummary data={portfolioSummary} />
          </div>
          <div className="lg:col-span-1">
            <AIInsightCard insight={aiInsight} />
          </div>
        </div>

        {/* Row 2: market overview */}
        <MarketOverview indices={marketIndices} />

        {/* Row 3: watchlist + strategy library */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <WatchlistTable assets={watchlist} />
          </div>
          <div className="lg:col-span-1">
            <StrategyLibraryPreview strategies={strategies} />
          </div>
        </div>
      </div>
    </main>
  );
}
