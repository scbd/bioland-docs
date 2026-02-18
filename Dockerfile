# ---- Base stage: install shared OS utilities ----
FROM node:24-bookworm-slim AS base

ENV NODE_ENV=production
ENV PATH="/usr/src/app/node_modules/.bin:${PATH}"

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates dumb-init && \
    rm -rf /var/lib/apt/lists/*

# ---- Build stage: install dependencies and compile the VitePress documentation ----
FROM base AS build

ENV NODE_ENV=development

RUN apt-get update && \
    apt-get install -y --no-install-recommends git && \
    rm -rf /var/lib/apt/lists/*

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run docs:build

# ---- Runner stage: assemble minimal production image with non-root user ----
FROM node:24-bookworm-slim AS runner

ENV NODE_ENV=production

WORKDIR /usr/src/app

RUN groupadd --system nodejs && useradd --system --gid nodejs vitepress

RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY --from=base /usr/bin/dumb-init /usr/bin/dumb-init

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/docs/.vitepress/dist ./docs/.vitepress/dist
COPY --from=build /usr/src/app/package.json ./package.json

ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

USER vitepress

# Use dumb-init as PID 1 so Node receives signals cleanly and zombie processes are reaped.
CMD ["dumb-init", "npx", "vitepress", "preview", "docs", "--port", "3000", "--host", "0.0.0.0"]
