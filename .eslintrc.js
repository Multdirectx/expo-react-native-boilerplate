const prettierConfig = require('./prettier.config')

const ignorePatterns =  [
  `**/${'node'}_modules`,
  '.cache',
  '**/.cache',
  '**/build',
  '**/dist',
  '.eslintrc.js',
  '.next',
  '.out',
  '.expo',
   '*.js'
]

module.exports = {
  root: true,
  ignorePatterns,
  plugins: ["prettier", "react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json'
  },
  env: {
    "react-native/react-native": true
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object'
        ],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  },
}
