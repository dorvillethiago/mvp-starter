FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune web --docker

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/apps/web/.env /app/apps/web/.env
RUN bun install
COPY --from=builder /app/out/full/ .
RUN bunx turbo run build --filter=web

FROM nginx:stable-alpine AS runner
COPY --from=installer /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
