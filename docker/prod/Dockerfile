FROM node:18-alpine

RUN apk add --no-cache bash

WORKDIR /app
COPY . .
RUN yarn --prod && yarn --prod build

CMD [ "yarn", "start" ]