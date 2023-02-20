FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 5000

CMD ["npm", "start"]
