#!/bin/bash
cd `dirname $0`
cd ..
dir=`pwd`
if [ ! -f ".env" ]; then
  cp .env.template .env 
fi
source .env

docker exec -it ${CONTEXT_NAME}_abc_dev bash