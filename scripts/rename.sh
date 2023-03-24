#!/bin/bash
cd `dirname $0`
cd ../

newname="$@"
if [ "$newname" = "" ]; then
  echo "This script replaces all references to the current application name by a new one."
  echo ""
  echo "  > $0 <NEW_APP_NAME>"
  echo ""
  echo "  ...where <NEW_APP_NAME> is the new application name instead of 'swsite'"
  exit 
fi

files="./scripts/*.sh \
  .env* \
  ./docker/** \
  ./webapp/*.json"

find $files -type f -exec sed -i "s/swsite/$newname/g" {} +

echo "Done."