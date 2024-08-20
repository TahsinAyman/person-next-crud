FROM node:20.16.0-bullseye

RUN npm install -g pnpm

WORKDIR /app
COPY package*.json /app/

RUN pnpm install

COPY . /app/

RUN pnpm build
EXPOSE 3000

CMD pnpm start

