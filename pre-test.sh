#!/bin/bash
cd ./api \
  && npm install \
  && cd -
cd ./api/src/libs/nodejs \
  && npm install \
  && cd -
cd ./api/src/helloLambda \
  && npm install \
  && cd -
cd ./api/src/goodbyeLambda \
  && npm install \
  && cd -
# Add new function directories here
