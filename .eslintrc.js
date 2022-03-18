module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended', //Errors
    //'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'indent': ['error', 2]

  },
};