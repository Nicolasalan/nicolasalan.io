FROM node:latest

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
VOLUME . /app
CMD npm run build && npm run dev1`