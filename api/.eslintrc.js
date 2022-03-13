module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  overrides: [
    {
      files: ['**/__tests__/*.js', '**/__mocks__/*.js'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
};
