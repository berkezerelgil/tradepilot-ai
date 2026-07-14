"""Application configuration, loaded from environment variables.

Values are read from the process environment (and a local .env file if present).
Nothing here is secret yet — auth, database, and API keys arrive in later sprints.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # Human-readable service name, surfaced by the /health endpoint.
    APP_NAME: str = "TradePilot API"

    # Comma-separated list of origins allowed to call this API (the web app).
    # e.g. "http://localhost:3000,https://app.tradepilot.example"
    CORS_ORIGINS: str = "http://localhost:3000"

    @property
    def cors_origins_list(self) -> list[str]:
        """Split the comma-separated CORS string into a clean list."""
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]


settings = Settings()
