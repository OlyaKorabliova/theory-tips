module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'no-loops'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    'no-loops/no-loops': 'error',
    'no-multi-spaces': ['error'],
    'no-else-return': ['error'],
    'max-classes-per-file': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'class-methods-use-this': ['off'],
    'no-use-before-define': [1, { functions: true, classes: true }],
    'import/prefer-default-export': 'off',
    'prefer-object-spread': 'off',
    'no-unused-expressions': [1, {
      allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true, enforceForJSX: true
    }],
    'comma-dangle': ['off', 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
