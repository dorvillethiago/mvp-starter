# Monorepo – "Just Build the Thing"

*A complete, minimal, type-safe starter for modern web software. No overengineering, no legacy, just velocity.*

## 🧰 What's Inside

This monorepo gives you a rock-solid base for fullstack development:

### 🕸 Web

> Located in `apps/web/`

- **React 19** – Concurrent, modern, built to last
- **Vite** – Lightning-fast build/dev
- **Tailwind CSS 4** – Utility-first styling
- **TanStack Router** – File-based routing, no magic
- **TanStack Query** – The right way to fetch
- **Shadcn UI** – Radix-powered headless UI layer
- **Recharts** – Dashboard-ready charts
- **React Hook Form + Zod** – Schema-first forms
- **Kubb** – Typed API clients via OpenAPI

### ⚙️ API

> Located in `apps/api/`

- **Elysia** – Fast, expressive Bun-native backend
- **Drizzle ORM + TypeBox** – SQL-first with strong typing
- **PostgreSQL** – Just works
- **Swagger** – Docs you can share without shame

### 🧱 Tooling

- **Bun** – Unified package manager, runtime, and bundler
- **Biome** – All-in-one formatter and linter
- **Turborepo** – Caching and orchestration done right

## 🏃 Getting Started

```bash
bun install # installs all dependencies in all apps
bun setup:env # sets up .env files for all apps
bun dev # starts both frontend and backend in dev mode
```

Use `bun run build` in individual apps for production builds.

## 🐳 Docker

Each app can be containerized separately. Example:

```bash
# Web
cd apps/web && docker build -t web .
docker run -p 3000:80 web

# API
cd apps/api && docker build -t api .
docker run -p 8000:8000 api
```

## 🗂 Structure

```
.
├── apps/
│   ├── web/     # React frontend
│   └── api/     # Elysia backend
├── turbo.json   # Pipeline config
├── bun.lockb    # Bun lockfile
└── README.md
```

## ✨ Philosophy

This stack aims for:

- **Type safety everywhere** – Zod, Drizzle, TypeBox, TypeScript-first
- **Minimal global state** – Favor explicit data flow
- **Separation of concerns** – No blurred lines between routing, logic, and data
- **Developer sanity** – Fast tooling, zero-config DX, predictable file structure

## 🧠 Final Note

If you need more than this to ship an MVP, you’re solving the wrong problem.
If you keep this clean, you’re building something worth keeping.