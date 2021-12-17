FROM node:alpine

WORKDIR /app

COPY package.json ./

ENV PORT 3000

RUN npm install --silent

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

EXPOSE 3000

RUN npm install -g nodemon

CMD ["nodemon", "-L", "app.js"]