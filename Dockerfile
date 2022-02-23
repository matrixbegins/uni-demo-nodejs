FROM node:16.14.0-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./

RUN npm install

EXPOSE 3000

# start the app
CMD [ "node", "index.js" ]
