import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import type { Strategy } from "@/types/market";

/** Preview of the educational Strategy Library — a few entries with a link out. */
export function StrategyLibraryPreview({ strategies }: { strategies: Strategy[] }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="Strategy Library"
        action={
          <Button variant="ghost" size="sm">
            Browse all
          </Button>
        }
      />

      <ul className="flex-1 space-y-3">
        {strategies.map((s) => (
          <li key={s.title} className="rounded-lg border border-white/10 p-3 transition-colors hover:border-white/20">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{s.title}</p>
              <Badge tone="info">{s.theme}</Badge>
            </div>
            <p className="mt-1 text-xs text-white/50">{s.summary}</p>
            <p className="mt-2 text-[11px] text-white/35">{s.readMinutes} min read</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
