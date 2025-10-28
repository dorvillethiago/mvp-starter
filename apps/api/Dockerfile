FROM oven/bun:latest AS builder
WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

FROM oven/bun:latest AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock

COPY --from=builder /app/apps/api ./apps/api

WORKDIR /app/apps/api

EXPOSE 8000
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["bun", "start"]
