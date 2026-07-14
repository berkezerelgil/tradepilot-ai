"""Health check router.

A lightweight liveness endpoint. It takes no dependencies (no DB, no external
calls) so it stays fast and reliable — its only job is to confirm the API is up.
"""

from fastapi import APIRouter

from app.core.config import settings

router = APIRouter(tags=["health"])


@router.get("/health")
def health() -> dict[str, str]:
    """Return a simple status payload confirming the API is running."""
    return {"status": "ok", "service": settings.APP_NAME}
