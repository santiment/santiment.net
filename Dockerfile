FROM node:14

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install --unsafe-perm

COPY ./ /app

RUN npm run build
