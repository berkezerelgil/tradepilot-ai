import { DisclaimerFooter } from "@/components/layout/DisclaimerFooter";
import { Navbar } from "@/components/layout/Navbar";

/**
 * Shared shell for all in-app pages (dashboard, watchlist, portfolio, alerts,
 * strategies). The landing page lives outside this group and stays chrome-free.
 * flex-col + the footer's mt-auto keep the disclaimer pinned to the bottom.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <DisclaimerFooter />
    </div>
  );
}
