#!/bin/bash
echo 'api/' \
  && npm install
echo 'api/src/libs/nodejs' \
  && cd ./src/libs/nodejs \
  && npm install \
  && cd - > /dev/null
echo 'api/src/helloLambda' \
  && cd ./src/helloLambda \
  && npm install \
  && cd - > /dev/null
echo 'api/src/goodbyeLambda' \
  && cd ./src/goodbyeLambda \
  && npm install \
  && cd - > /dev/null
# Add new function directories here
