## 📦 Stack

* **Elysia** – Lightweight, fast, and actually fun to use.
* **Drizzle ORM + TypeBox** – SQL with types and no magic.
* **PostgreSQL** – The one true relational DB.
* **dotenv + @yolk-oss/elysia-env** – Structured env parsing like a grown-up.
* **CUID2/UUID** – Predictable or not, your choice.
* **Swagger (via @elysiajs/swagger)** – Docs you won't be ashamed of.
* **bcryptjs** – You know why.
* **Axios** – When you need to call out, not just serve.
* **Clerk Backend SDK** – Simple user validation and session verification

## 🚀 Scripts

| Command        | Description                             |
| -------------- | --------------------------------------- |
| `bun dev`   | Starts dev server with hot reload       |
| `bun serve` | Runs the app once (non-watch mode)      |
| `bun migrate` | Runs the migrations      |
| `bun make-migrations` | Creates the migrations
| `bun studio`| Runs the studio      |

## 📂 Structure

Domain-Driven Design (DDD) architecture with clear separation of concerns:

```
src/
├── application/              # Application Layer
│   └── use-cases/           # Business use cases and orchestration
│       └── ...              # Other domain use cases
│
├── domain/                  # Domain Layer (Pure Business Logic)
│   └── entities/            # Domain entities and business rules
│       ├── user.ts   # User domain entity
│       └── ...              # Other domain entities
│
├── infrastructure/          # Infrastructure Layer
│   ├── auth/               # Authentication implementations
│   │   ├── clerk.ts        # Clerk SDK setup
│   ├── config/             # Application configurations
│   │   ├── env.ts          # Environment variables
│   │   └── error.ts          # App-wide errors
│   └── database/           # Database layer
│       └── schema.ts       # Database schemas
│       ├── index.ts        # Database connection
│       ├── migrations/     # Drizzle migrations
│       ├── repositories/   # Database repositories
│
├── presentation/            # Presentation Layer (HTTP API)
│   ├── controllers/        # Route handlers and business logic orchestration
│   │   ├── clerk.ts    # Authentication endpoints
│   │   ├── hello.ts    # Hello world endpoint
│   ├── middlewares/        # Custom middlewares
│   │   ├── clerk.ts        # Authentication middleware
│   └── http/              # HTTP route configuration
│       ├── router.ts      # Route definitions
│       └── webhook.ts     # Webhook definitions
│
└── index.ts               # Application entry point
```

## 💠 Database

* **Migrations**: Use `drizzle-kit` (`bunx drizzle-kit push` or `bunx drizzle-kit generate`)