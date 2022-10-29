FROM node:18-alpine

RUN apk add --no-cache bash

COPY ./docker/dev/await-server.js /opt/await-server.js

WORKDIR /app

RUN yarn global add nodemon

CMD ["node", "-f", "/opt/await-server.js"]