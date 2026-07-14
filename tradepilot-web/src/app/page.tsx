import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-sky-400">TradePilot AI</p>
        <h1 className="mt-2 text-4xl font-semibold">Investment intelligence, explained.</h1>
        <p className="mt-4 text-white/60">
          Track your portfolio, understand market movements, and learn as you go. Analysis and
          education — never financial advice.
        </p>
      </div>
      <Link
        href="/dashboard"
        className="w-fit rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400"
      >
        Open dashboard →
      </Link>
    </main>
  );
}
