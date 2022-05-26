FROM node:14.19.3 AS builder

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./ /app

RUN npm install --unsafe-perm && npm run build
