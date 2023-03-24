#!/bin/bash
cd `dirname $0`
cd ..
dir=`pwd`
if [ ! -f ".env" ]; then
  cp .env.template .env 
fi
# source .env
export $(grep -v '^#' .env | xargs -d '\n')
env UID=$(id -u) GID=$(id -g) docker-compose \
  --project-directory "$dir" \
  -f "$dir/docker/traefik/docker-compose.yml" \
  -f "$dir/docker/dev/docker-compose.yml" \
  up -d

docker exec -it ${CONTEXT_NAME}_swsite_dev yarn dev
env UID=$(id -u) GID=$(id -g) docker-compose \
  --project-directory "$dir" \
  -f "$dir/docker/traefik/docker-compose.yml" \
  -f "$dir/docker/dev/docker-compose.yml" \
  down
