FROM node:13 AS builder

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm i

COPY ./ /app

RUN npm run build

