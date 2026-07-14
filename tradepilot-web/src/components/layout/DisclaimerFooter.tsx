/**
 * Global disclaimer footer.
 *
 * The "not financial advice" positioning is a product constraint, so it lives
 * in the app shell and appears on every page — not just where AI output shows.
 */
export function DisclaimerFooter() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="text-xs leading-relaxed text-white/40">
          <span className="font-medium text-white/60">Not financial advice.</span> TradePilot AI is
          an educational and analysis tool. It provides data-driven insights and market context, does
          not issue buy or sell instructions, and does not execute trades. Nothing here is a
          recommendation. Do your own research.
        </p>
        <p className="mt-2 text-[11px] text-white/30">
          © {new Date().getFullYear()} TradePilot AI · Demo project · Data shown is mock data.
        </p>
      </div>
    </footer>
  );
}
