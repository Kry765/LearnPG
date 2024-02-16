# Use Node.js 16 as base image
FROM node:16

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

WORKDIR /frontend

COPY frontend/package.json frontend/package-lock.json ../../../../
RUN npm install

COPY frontend ../../

EXPOSE 4000
EXPOSE 3000

CMD ["npm", "run", "dev"]
