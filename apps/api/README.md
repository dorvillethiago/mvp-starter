# API – 'Look, i can make a query!'

*This is the last backend you'll need to write before your promotion (or burnout, whichever comes first).*

## 📦 Stack

* **Elysia** – Lightweight, fast, and actually fun to use.
* **Drizzle ORM + TypeBox** – SQL with types and no magic.
* **PostgreSQL** – The one true relational DB.
* **JWT (via @elysiajs/jwt)** – Auth that doesn’t make you cry.
* **dotenv + @yolk-oss/elysia-env** – Structured env parsing like a grown-up.
* **CUID2/UUID** – Predictable or not, your choice.
* **Swagger (via @elysiajs/swagger)** – Docs you won’t be ashamed of.
* **bcryptjs** – You know why.
* **Axios** – When you need to call out, not just serve.
* **Clerk Backend SDK** – Simple user validation and session verification

## 🚀 Scripts

| Command        | Description                             |
| -------------- | --------------------------------------- |
| `bun run dev`  | Starts dev server with hot reload       |
| `bun run serve`| Runs the app once (non-watch mode)      |

## 📂 Structure

Follow whatever you want, but let's start with DDD basic separation of concerns:
```
src/
├── infrastructure/         # Env, seed, db config, auth
├── presentation/         # API routes (Elysia-style handlers)
└── index.ts        # Entry point
```

## 💠 Database

* **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
* **Migrations**: Use `drizzle-kit` (`bunx drizzle-kit push` or `bunx drizzle-kit generate`)
* **Type Safety**: Yes, everywhere.

## ✨ Philosophy

This backend prioritizes:

* **Explicit architecture** – no framework magic, just functions and flows.
* **Schema-first contracts** – TypeBox enforces it, Drizzle proves it.
* **Separation of concerns** – Routes ≠ Logic ≠ Database.
* **Zero BS DevX** – Fast iteration with Bun, no Webpack flashbacks.

## 🧠 Final Note

If you make this backend untestable, you deserve the pager duty.
If you extend it without global leaks and circular deps, you deserve equity.