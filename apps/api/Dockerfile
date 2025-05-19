FROM oven/bun:1

WORKDIR /usr/src/app

COPY . .

RUN bun install --production

EXPOSE 8000

CMD ["bun", "serve"]
