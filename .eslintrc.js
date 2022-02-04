module.exports = exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'react-hooks'],
  rules: {
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        explicitSpread: 'ignore',
        custom: 'ignore'
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'htmlFor',
        depth: 25
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './node_modules/@stratum/framework/webpack/webpack.common.js',
        path: ['gen', 'theme'],
        env: {
          rootDir: __dirname
        }
      }
    }
  }
};
