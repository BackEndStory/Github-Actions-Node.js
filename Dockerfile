FROM node:18.6.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY  ./ ./
EXPOSE 80
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm","start"]