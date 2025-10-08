## ===== Stage 1: Builder =====
FROM node:18-alpine AS builder

WORKDIR /app

# Установка OpenSSL для Prisma
RUN apk add --no-cache openssl

# Install all deps (prod + dev) for building
COPY package*.json ./
RUN npm install

# Copy sources and build
COPY . .
RUN npx prisma generate
RUN npm run build

## ===== Stage 2: Production runtime =====
FROM node:18-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

# Установка OpenSSL для Prisma в production
RUN apk add --no-cache openssl

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy build output and necessary runtime assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Create uploads directory
RUN mkdir -p /app/uploads

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3002/health || exit 1

EXPOSE 3002

# Generate Prisma client and start server
CMD sh -c "npx prisma generate && node dist/index.js"
