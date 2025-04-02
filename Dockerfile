FROM node:18-bullseye-slim AS base
WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install --include=optional sharp --platform=linux --os=linux --libc=glibc

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env .env
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY .env .env

EXPOSE 3000
CMD ["npm", "start"]
