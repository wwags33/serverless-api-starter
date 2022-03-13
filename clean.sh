#!/bin/bash
echo 'api/' \
  && cd ./api \
  && rm -rf coverage node_modules \
  && cd - > /dev/null
echo 'api/src/libs/nodejs' \
  && cd ./api/src/libs/nodejs \
  && rm -rf node_modules \
  && cd - > /dev/null
echo 'api/src/helloLambda' \
  && cd ./api/src/helloLambda \
  && rm -rf node_modules \
  && cd - > /dev/null
echo 'api/src/goodbyeLambda' \
  && cd ./api/src/goodbyeLambda \
  && rm -rf node_modules \
  && cd - > /dev/null
# Add new function directories here
