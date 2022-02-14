# syntax=docker/dockerfile:1
FROM node:16

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/

RUN npm i 

COPY . /app/
