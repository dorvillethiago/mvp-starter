FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile
COPY .env /app/apps/web/.env
RUN bunx turbo run generate --filter=web
RUN bunx turbo run build --filter=web

FROM nginx:stable-alpine AS runner
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
COPY apps/web/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
