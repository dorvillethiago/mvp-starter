FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo prune web --docker

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN bun install
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/apps/web/.env.production /app/apps/web/.env
RUN bunx turbo run generate
RUN bunx turbo run build --filter=web

FROM nginx:stable-alpine AS runner
COPY --from=installer /app/apps/web/dist /usr/share/nginx/html
COPY apps/web/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
