#!/bin/bash
cd ./api \
  && rm -rf coverage node_modules \
  && cd -
cd ./api/src/libs/nodejs \
  && rm -rf node_modules \
  && cd -
cd ./api/src/helloLambda \
  && rm -rf node_modules \
  && cd -
cd ./api/src/goodbyeLambda \
  && rm -rf node_modules \
  && cd -
# Add new function directories here
