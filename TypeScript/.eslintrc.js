module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  // parserOptions: {
  //     tsconfigRootDir: __dirname,
  //     project: ['./tsconfig.json'],
  // },
  overrides: [
    {
      'files': ['.eslintrc.js'], 
      'rules': {
        'no-undef': 'off'
      } 
    }
  ], // comment out this line to lint this file
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};