#!/bin/bash
cd `dirname $0`
cd ..
dir=`pwd`
if [ ! -f ".env" ]; then
  cp .env.template .env 
fi
source .env

command="$@"
if [ "$command" = "" ]; then
  echo "$0 [up | up -d | down | build]"
  exit 
fi

docker compose \
  --project-directory "$dir" \
  -f "$dir/docker/traefik/docker-compose.yml" \
  -f "$dir/docker/prod/docker-compose.yml" \
  $command
