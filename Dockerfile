FROM node:14

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./ /app

RUN apt update && apt install -y make nasm autoconf automake libtool dpkg libpng-dev g++ && npm install --unsafe-perm && npm run build
