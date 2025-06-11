# API – 'Look, i can make a query!'

*This is the last backend you'll need to write before your promotion (or burnout, whichever comes first).*

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
| `bun run dev`   | Starts dev server with hot reload       |
| `bun run serve` | Runs the app once (non-watch mode)      |
| `bun run migrate`| Runs the migrations      |
| `bun run studio`| Runs the studio      |

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

### 🏗 DDD Layer Responsibilities

#### 🎯 Domain Layer (`domain/`)
- **Pure business logic** - No external dependencies
- **Entities** - Core business objects with their rules
- **Domain rules** - Business validation and constraints
- **Value objects** - Immutable objects representing concepts

#### 🔄 Application Layer (`application/`)
- **Use cases** - Orchestrate domain operations
- **Business workflows** - Coordinate between domain and infrastructure
- **Application services** - Handle cross-cutting concerns
- **Command/Query handlers** - Process incoming requests

#### 🔧 Infrastructure Layer (`infrastructure/`)
- **External integrations** - Database, authentication, third-party APIs
- **Concrete implementations** - Repository patterns, external services
- **Configuration** - Environment setup, connection strings
- **Technical concerns** - Logging, monitoring, caching

#### 🌐 Presentation Layer (`presentation/`)
- **HTTP API** - REST endpoints and route definitions
- **Controllers** - Handle HTTP requests/responses
- **Middlewares** - Cross-cutting HTTP concerns
- **Validation** - Input validation and sanitization

### 🎯 Benefits of This Architecture

- ✅ **Testability** - Each layer can be tested in isolation
- ✅ **Maintainability** - Clear boundaries reduce complexity
- ✅ **Flexibility** - Easy to swap implementations
- ✅ **Scalability** - Well-organized code scales better
- ✅ **Domain Focus** - Business logic is protected and centralized

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