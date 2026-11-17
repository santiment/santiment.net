FROM node:22.23.4-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --frozen-lockfile

FROM base AS builder
ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1
ENV TURNSTILE_SITEKEY="0x4AAAAAAB-r1GJrqSkCdzVi"

ARG BACKEND_URL
ARG SITE_URL

COPY . /app

RUN pnpm build

# The image is only an artifact carrier: the deploy jobs `docker create` it
# and `docker cp` /app/public to S3. Ship just the static build output.
FROM node:22.23.4-alpine
ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1
ENV TURNSTILE_SITEKEY="0x4AAAAAAB-r1GJrqSkCdzVi"

WORKDIR /app

COPY --from=builder /app/public /app/public
