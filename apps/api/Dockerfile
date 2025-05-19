FROM oven/bun:latest

WORKDIR /usr/src/app

COPY apps/web ./apps/web
COPY bun.lock .
COPY package.json package.json
COPY turbo.json turbo.json

RUN bun install --production

EXPOSE 8000

CMD ["bun", "serve", "--filter=api"]
