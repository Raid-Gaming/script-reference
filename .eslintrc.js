module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', 120],
    'lines-between-class-members': 'off',
    curly: ['error', 'all'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always-and-inside-groups',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: '@/components/**', group: 'internal' },
          { pattern: '@/icons/**', group: 'internal' },
          { pattern: '@/interfaces/**', group: 'internal' },
          { pattern: '@/router/**', group: 'internal' },
          { pattern: '@/views/**', group: 'internal' },
          { pattern: '@/**', group: 'internal', position: 'after' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
