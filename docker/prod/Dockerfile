FROM node:18-alpine

RUN apk add --no-cache bash

WORKDIR /app

RUN yarn --prod && yarn build
COPY . .

CMD [ "yarn", "start" ]