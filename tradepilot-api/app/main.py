"""TradePilot API — application entrypoint.

Sprint 0 scope: this only stands up the FastAPI app, configures CORS so the
Next.js web app can call it, and exposes a health check. Everything else
(auth, database, AI, market data, workers) is intentionally deferred.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.routers import health
from app.core.config import settings

app = FastAPI(title=settings.APP_NAME)

# Allow the web app's origin(s) to call this API from the browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Versioned API surface. New routers get included here as features land.
app.include_router(health.router, prefix="/api/v1")


@app.get("/")
def root() -> dict[str, str]:
    """Tiny landing payload so hitting the root URL isn't a 404."""
    return {"service": settings.APP_NAME, "docs": "/docs", "health": "/api/v1/health"}
