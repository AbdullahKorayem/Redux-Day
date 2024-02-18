
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': [
      'warn',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false
      }
    ]
  }
};