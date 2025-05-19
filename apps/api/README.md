# API – Wait, Was that 'delete' supposed to come with a 'where' clause?

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

## 🚀 Scripts

| Command        | Description                             |
| -------------- | --------------------------------------- |
| `bun run dev`  | Starts dev server with hot reload       |
| `bun run serve`| Runs the app once (non-watch mode)      |
| `bun run start`| Alias to run the main entry file        |

## 📂 Structure

Follow whatever you want, but let's start with DDD basic separtion:
```
src/
├── infrastructure/         # Env, seed, db config
├── presentation/         # API routes (Elysia-style handlers)
└── index.ts        # Entry point
```

## 💠 Database

* **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
* **Migrations**: Use `drizzle-kit` (`bunx drizzle-kit push` or `bunx drizzle-kit generate`)
* **Type Safety**: Yes, everywhere.

## 🐳 Docker

```bash
# Build the image
docker build -t api .

# Run the container
docker run -p 8000:8000 api
```

Your API will be available at [http://localhost:8000](http://localhost:8000)

## ✨ Philosophy

This backend prioritizes:

* **Explicit architecture** – no framework magic, just functions and flows.
* **Schema-first contracts** – TypeBox enforces it, Drizzle proves it.
* **Separation of concerns** – Routes ≠ Logic ≠ Database.
* **Zero BS DevX** – Fast iteration with Bun, no Webpack flashbacks.

## 🧠 Final Note

If you make this backend untestable, you deserve the pager duty.
If you extend it without global leaks and circular deps, you deserve equity.