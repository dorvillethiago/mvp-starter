# Build the app with bun
FROM oven/bun:1.1 AS builder

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

# Serve the app for production
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
