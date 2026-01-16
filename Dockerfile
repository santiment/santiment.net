FROM node:20-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --ignore-scripts --frozen-lockfile --force

FROM base AS builder

ENV NODE_ENV=production
ENV TURNSTILE_SITEKEY="0x4AAAAAAB-r1GJrqSkCdzVi"
ENV ASTRO_TELEMETRY_DISABLED=1

ARG BACKEND_URL
ARG SITE_URL

COPY . /app

RUN pnpm build

RUN rm -rf public/webkit/illus
RUN rm -rf public/webkit/icons
