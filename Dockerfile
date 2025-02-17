FROM oven/bun

WORKDIR /app

COPY package.json .
COPY server.ts .

RUN bun install
EXPOSE 3000
ENTRYPOINT [ "bun", "start" ]