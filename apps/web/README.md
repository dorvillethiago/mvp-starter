# Web - 'Look, i can center a div!'

*This is the only thing you'll need to build a web app that won't have to be rewritten in 6 months or maintained with pain, suffering and tears.*

## 📁 Stack

* **React 19** – The library.
* **Vite** – Fast dev/build tooling.
* **Tailwind CSS 4** – Utility-first styling.
* **TanStack Router** – File-based, typed, and sensible.
* **TanStack Query** – The right way to fetch anything.
* **React Hook Form + Zod** – Schema-first forms with proper validation.
* **Shadcn UI** – Radix-based component layer (pre-installed, no CLI ceremony).
* **Recharts** – For dashboards that aren't Excel in disguise.
* **Kubb** – Typed API clients from OpenAPI (because fetch is pain).
* **Clerk React** – Fullstack authentication and authorization, session sync via cookies
* **Biome** – Fast linting/formatting with no extra tooling circus.

## 🚀 Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `bun dev`     | Starts local dev server            |
| `bun run build`   | Builds for production              |
| `bun preview` | Preview production build           |
| `bun gen`     | (Re)generates API clients via Kubb |

## 🗂 Structure

```
src/
├── components/ui/       # Reusable, pre-tuned shadcn components
├── routes/              # File-based TanStack routes
├── lib/                 # Config, theme, api, etc
├── utils/               # Battle-tested utility functions
```

## ✨ Philosophy

This template prioritizes:

* **Type safety** (Zod, TanStack, TS-first design)
* **Explicit ownership** (no global soup like Zustand)
* **Maintainability** (clear routing, scoped providers, strong separation)
* **DX that doesn’t fight you** (but doesn’t enable bad decisions either)

## 🧠 Final Note

If you break this project’s architecture, you deserve the rewrite.
If you extend it cleanly, you probably deserve a raise.
