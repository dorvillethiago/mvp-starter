FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune api --docker

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN bun install
COPY --from=builder /app/out/full/ .

FROM base AS runner
WORKDIR /app
COPY --from=installer /app .
WORKDIR /app/apps/api
EXPOSE 8000
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["bun", "start"]