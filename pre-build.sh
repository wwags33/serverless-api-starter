#!/bin/bash
cd ./api/src/libs/nodejs && npm install && npm prune --production && cd -
cd ./api/src/helloLambda && npm install && npm prune --production && cd -
cd ./api/src/goodbyeLambda && npm install && npm prune --production && cd -
# Add new function directories here
