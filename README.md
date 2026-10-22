# University Match

A starter application for helping students discover university programs that fit
their academic profile, budget, and preferences.

## Project layout

- `frontend/` — React, TypeScript, and Vite client
- `backend/` — FastAPI service and Python tests
- `data/` — sample and reviewed source data
- `scripts/` — data import and source validation utilities
- `ml/` — matching experiments and evaluation
- `docs/` — product, architecture, data, and security notes

## Run locally

### Backend

Requires Python 3.11 or newer.

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
uvicorn app.main:app --reload
The API is available at http://localhost:8000; interactive API docs are at
http://localhost:8000/docs.
Frontend
Requires Node.js 20.19 or newer.
cd frontend
npm install
npm run dev

Copy frontend/.env.example to frontend/.env.local if you need to override the
API URL. The default points to http://localhost:8000.
Database
docker compose up -d db starts the local PostgreSQL service. Database
integration and migrations are not wired up yet.
Validation
cd frontend
npm run build

cd ..\backend
python -m pytest

Current scope
This repository is a scaffold. Matching, persistence, authentication, university
data ingestion, and AI-assisted features are not implemented yet. Treat imported
university and funding information as untrusted until it has been reviewed and
its source recorded.