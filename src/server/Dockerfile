
FROM node:16
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm install -g nodemon
CMD ["nodemon", "server.js"]
EXPOSE 4000




