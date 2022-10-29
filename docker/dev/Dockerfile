FROM node:18-alpine

RUN apk add --no-cache bash

WORKDIR /app

RUN yarn global add nodemon

# RUN echo "require('http').createServer((req, res) => res.writeHead(200).end('' + Date.now())).listen(12345, '0.0.0.0', () => console.log('Server is running on http://0.0.0.0:12345'));" > /opt/await-server.cjs
# CMD ["node", "/opt/await-server.cjs"]
CMD ["yarn", "dev"]