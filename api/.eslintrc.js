module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
};
