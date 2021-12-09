module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'no-loops',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-empty-function': ['off'],
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'no-loops/no-loops': 'error',
    'no-multi-spaces': ['error'],
    'no-else-return': ['error'],
    'no-use-before-define': [1, { functions: true, classes: true }],
    'no-unused-expressions': [1, {
      allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true, enforceForJSX: true,
    }],
    'arrow-body-style': ['off'],
    'max-classes-per-file': ['off'],
    'linebreak-style': ['off'],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': 'off',
    'prefer-object-spread': 'off',
    'comma-dangle': ['off', 'never'],
    'no-useless-constructor': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
