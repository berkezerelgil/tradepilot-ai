import { NextResponse } from "next/server";

import { getBackendHealth } from "@/lib/api";

/**
 * BFF health route: GET /api/health
 *
 * The browser calls this Next.js route instead of hitting FastAPI directly.
 * It proxies the backend health check and reports whether the API is reachable,
 * so the frontend never needs to know the backend URL.
 */
export async function GET() {
  try {
    const backend = await getBackendHealth();
    return NextResponse.json({ web: "ok", backend });
  } catch {
    return NextResponse.json(
      { web: "ok", backend: null, error: "Backend unreachable" },
      { status: 503 },
    );
  }
}
