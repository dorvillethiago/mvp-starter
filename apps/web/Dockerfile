# Build the app with bun
FROM oven/bun:latest AS builder

WORKDIR /app

COPY apps/api ./apps/api
COPY bun.lock .
COPY package.json package.json
COPY turbo.json turbo.json

RUN bun install --production

RUN bun run build --filter=web

# Serve the app for production
FROM nginx:stable-alpine

COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
