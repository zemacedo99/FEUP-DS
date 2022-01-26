module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:testcafe/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import-helpers',
    'testcafe',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^@/',
          [
            'parent',
            'sibling',
            'index',
          ],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'no-console': [
      'warn',
      { allow: ['error'] },
    ],
  },
};
