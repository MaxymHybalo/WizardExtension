module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'max-classes-per-file': ['error', 2],
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off'
  },
  globals: {
    chrome: false,
  },
};
