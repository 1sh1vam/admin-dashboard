module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/button-has-type': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': [
      2,
      550,
    ],
  },
};
