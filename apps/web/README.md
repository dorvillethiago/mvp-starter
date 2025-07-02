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
| `bun generate`     | (Re)generates API clients via Kubb |

## 🗂 Structure

```
src/
├── components/ui/       # Reusable, pre-tuned shadcn components
├── routes/              # File-based TanStack routes
├── lib/                 # Config, theme, api, etc
├── utils/               # Battle-tested utility functions
```