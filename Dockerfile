FROM node:13 AS builder

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./ /app

RUN npm install --unsafe-perm
RUN npm run build

COPY --from=builder /app/node_modules /app/node_modules

