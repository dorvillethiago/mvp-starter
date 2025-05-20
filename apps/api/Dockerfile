FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune api --docker

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/apps/api/.env /app/apps/api/.env
RUN bun install
COPY --from=builder /app/out/full/ .

FROM base AS runner
WORKDIR /app
COPY --from=installer /app .
EXPOSE 8000
CMD ["bun", "serve", "--filter=api"]
