FROM node:14.19.3-alpine AS builder

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./ /app

RUN apk add make nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++ && npm install --unsafe-perm && npm run build
