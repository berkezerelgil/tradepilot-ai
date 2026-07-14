/**
 * Server-side helpers for talking to the FastAPI backend.
 *
 * This runs on the server only (Server Components and route handlers), so the
 * backend base URL stays out of the browser bundle. As the app grows, all
 * backend calls should funnel through helpers like these.
 */

// Falls back to localhost so the app runs even before .env.local is set.
const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

export type HealthResponse = {
  status: string;
  service: string;
};

/**
 * Calls the backend health endpoint.
 * Throws if the backend is unreachable or returns a non-2xx status, so callers
 * can render a clear "backend unavailable" state.
 */
export async function getBackendHealth(): Promise<HealthResponse> {
  const res = await fetch(`${API_BASE_URL}/api/v1/health`, {
    // Always fetch fresh — health is a live signal, never cache it.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Backend health check failed with status ${res.status}`);
  }

  return (await res.json()) as HealthResponse;
}
