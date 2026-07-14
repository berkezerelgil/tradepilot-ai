import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import type { AIInsight, Sentiment } from "@/types/market";

const sentimentTone: Record<Sentiment, "positive" | "neutral" | "negative"> = {
  positive: "positive",
  neutral: "neutral",
  negative: "negative",
};

/**
 * Preview of an AI market note. Mock content for Sprint 1 (no AI calls).
 * Always carries the educational / not-financial-advice framing — a product
 * constraint, so it lives in the component, not just page copy.
 */
export function AIInsightCard({ insight }: { insight: AIInsight }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="AI Insight"
        action={<Badge tone={sentimentTone[insight.sentiment]}>{insight.sentiment}</Badge>}
      />

      <p className="font-medium">{insight.title}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{insight.summary}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-white/35">{insight.generatedAt}</span>
        <Button variant="secondary" size="sm">
          View analysis
        </Button>
      </div>

      <p className="mt-4 border-t border-white/10 pt-3 text-[11px] leading-snug text-white/35">
        Educational analysis only. Not financial advice, and never a buy or sell instruction.
      </p>
    </Card>
  );
}
