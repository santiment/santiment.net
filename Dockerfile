FROM node:20-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --ignore-scripts --frozen-lockfile --prod --force

FROM base AS builder
ARG BACKEND_URL

COPY . /app

RUN rm -rf public/webkit

RUN pnpm build

RUN rm -rf public/webkit/illus
RUN rm -rf public/webkit/icons
