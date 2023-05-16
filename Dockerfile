FROM node:19.6.0

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY src ./src
COPY public ./public
COPY tsconfig.json .

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]