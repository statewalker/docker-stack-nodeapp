FROM node:18-alpine

# Check https://github.com/nodejs/docker-node/tree/27f5a992bc36a3ef61157ce7dc28d98c5aceb744#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

RUN apk add --no-cache bash

WORKDIR /app

RUN yarn global add nodemon

# RUN echo "require('http').createServer((req, res) => res.writeHead(200).end('' + Date.now())).listen(12345, '0.0.0.0', () => console.log('Server is running on http://0.0.0.0:12345'));" > /opt/await-server.cjs
# CMD ["node", "/opt/await-server.cjs"]
CMD ["yarn", "dev"]