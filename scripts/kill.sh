#!/bin/bash

cd `dirname $0`
cd ..
dir=`pwd`
source "$dir/.env"
docker rm -f $(docker ps -q)