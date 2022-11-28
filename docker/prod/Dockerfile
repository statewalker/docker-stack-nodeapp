# 1. Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY app/package.json app/yarn.lock* app/package-lock.json* app/pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Warning! Lockfile not found." && yarn; \
  fi

# 2. Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./app .
# This will do the trick, use the corresponding env file for each environment.
COPY .env.template .env.template
RUN yarn build

# 3. Production image, copy all the files and run next
FROM node:18-alpine AS runner
RUN apk add --no-cache bash

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app .

# RUN echo "require('http').createServer((req, res) => res.writeHead(200).end('' + Date.now())).listen(12345, '0.0.0.0', () => console.log('Server is running on http://0.0.0.0:12345'));" > /opt/await-server.cjs
# CMD ["node", "/opt/await-server.cjs"]
CMD ["yarn", "start"]
