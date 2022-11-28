#!/bin/bash
cd `dirname $0`
cd ..
dir=`pwd`
if [ ! -f ".env" ]; then
  cp .env.template .env 
fi
# source .env
export $(grep -v '^#' .env | xargs -d '\n')

env UID=$(id -u) GID=$(id -g) docker exec -it ${CONTEXT_NAME}_myapp_dev bash