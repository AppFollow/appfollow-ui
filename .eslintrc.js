module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {version: 'detect'},
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ],
  env: {
    browser: true,
    es2017: true,
  },
};
