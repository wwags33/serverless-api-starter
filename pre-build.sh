#!/bin/bash
echo 'api/src/libs/nodejs' && cd ./api/src/libs/nodejs && npm install && npm prune --production && cd - > /dev/null
echo 'api/src/helloLambda' && cd ./api/src/helloLambda && npm install && npm prune --production && cd - > /dev/null
echo 'api/src/goodbyeLambda' && cd ./api/src/goodbyeLambda && npm install && npm prune --production && cd - > /dev/null
# Add new function directories here
