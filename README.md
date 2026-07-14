# TradePilot AI

AI-powered investment **intelligence** dashboard for individual investors — track portfolios, understand market movements, and learn strategies.

> **Not financial advice.** TradePilot analyzes and educates; it never issues buy/sell instructions and does not execute trades.

This repository is the **Sprint 0 foundation**: a running Next.js web app and FastAPI backend, wired together with a health check. Feature work builds on top of this in later sprints.

---

## What's inside

```
tradepilot/
├── tradepilot-web/          # Next.js + TypeScript + Tailwind (frontend + BFF)
│   └── src/
│       ├── app/
│       │   ├── page.tsx             # Landing page
│       │   ├── dashboard/page.tsx   # Dashboard placeholder (live backend status)
│       │   └── api/health/route.ts  # BFF route → proxies backend health
│       └── lib/api.ts               # Server-side backend client
│
└── tradepilot-api/          # FastAPI + Python (backend)
    └── app/
        ├── main.py                          # App entrypoint + CORS
        ├── core/config.py                   # Env-based settings
        └── api/v1/routers/health.py         # GET /api/v1/health
```

### Intentionally NOT included yet
Deferred to later sprints to keep Sprint 0 lightweight: **auth, database models, Redis, OpenAI integration, market/crypto API integration, background workers, and any trading features.**

---

## Prerequisites
- **Node.js** 18.18+ (20+ recommended) and npm
- **Python** 3.11+

---

## Backend setup — `tradepilot-api`

```bash
cd tradepilot-api

# 1. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Create your local env file
cp .env.example .env

# 4. Run the API (auto-reloads on file changes)
uvicorn app.main:app --reload --port 8000
```

Backend runs at **http://localhost:8000**
- Health: http://localhost:8000/api/v1/health
- Interactive docs: http://localhost:8000/docs

---

## Frontend setup — `tradepilot-web`

Open a **second terminal** (keep the backend running):

```bash
cd tradepilot-web

# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Frontend runs at **http://localhost:3000**
- Landing: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard  ← shows a live "Backend connected" badge
- BFF health route: http://localhost:3000/api/health

---

## How the two apps talk
The browser never calls FastAPI directly. It calls a Next.js route (the **BFF**), which uses the server-side client in `lib/api.ts` to reach the backend. This keeps the backend URL (and, later, API keys) server-side.

```
Browser → Next.js BFF (/api/health) → lib/api.ts → FastAPI (/api/v1/health)
```

If the backend is stopped, the dashboard degrades gracefully and shows a **"Backend offline"** badge instead of crashing.

