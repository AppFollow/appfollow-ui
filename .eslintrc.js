module.exports = {
  'root': true,
  'extends': [
    'airbnb',
    'plugin:react/recommended',
  ],
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'restParams': true,
      'legacyDecorators': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'settings': {
    'import/resolver': 'webpack',
    'import/cache': 5,
    'import/ignore': [
      /\.(css)$/
    ],
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'import/no-default-export': ["warn"],
    'import/prefer-default-export': ["off"],
    'lines-between-class-members': ["error", "always", {"exceptAfterSingleLine": true}],
    'react/sort-comp': [2, {order: [
      'static-methods',
      'lifecycle',
      'everything-else',
      'render'
      ],
    }],
    'strict': ['off', 'never'],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'import/no-webpack-loader-syntax': 'off',
    'import/extensions': ['error', {"js": "never", "json": "always"}],
    'arrow-parens': 'off',
    'object-curly-newline': ["error", {"consistent": true}],
    'no-confusing-arrow': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-unused-vars': ['error', {'varsIgnorePattern': '^styles$'}],
    'indent': ['error', 2, {SwitchCase: 1}],
    'no-multiple-empty-lines': ["error", {'max': 1, 'maxEOF': 0, 'maxBOF': 0}],
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['to', 'hrefLeft', 'hrefRight'],
      'aspects': ['noHref', 'invalidHref', 'preferButton'],
    }],
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        'allowSamePrecedence': true
      }
    ],
    'no-console': ['error', {allow: ['error']}],
    'no-tabs': 'off',
    'linebreak-style': 'off',
    'space-before-function-paren': ['error', 'never'],
    'key-spacing': [2, {'mode': 'strict', 'beforeColon': false, 'afterColon': true}],
    'quote-props': [2, 'consistent-as-needed', {'keywords': false}],
    'id-length': ['error', {'min': 2, 'properties': 'never', 'exceptions': ['_', '$', 'i']}],
    'import/no-unresolved': [2, {ignore: ['app', 'templates', 'css', 'semantic-js', 'components', 'styles', 'nextjs']}],
    'object-curly-spacing': ['error', 'never'],
    'no-underscore-dangle': ['error', {
      'allowAfterThis': true,
      'allow': [
        '_mfq',
        '__DEV__',
        '__adroll',
        '__LOCAL__',
        '__STATIC__',
        '__INSTANCE__',
      ],
    }],
    'max-len': ['error', 130, 4, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
    }],
    'max-statements': ['error', 41], // decrease to 10
    'max-params': ['error', 5],
    'max-nested-callbacks': ['error', 5],
    'max-depth': ['error', 4],
    'no-use-before-define': ['error', {functions: false, classes: true, variables: false}],
    'no-param-reassign': ['warn', {// TODO: заменить на error
      props: true,
      ignorePropertyModificationsFor: [
        // Стандарт для редьюсов
        'acc',
        'arr',
        'obj',
        'error',
        // Будет удалено
        'accumulator',
        'array',
        'object',
      ]
    }],
    'consistent-return': 'warn',
    'newline-per-chained-call': 'off',
    'padding-line-between-statements': [
      'error',
      {'blankLine': 'always', 'prev': '*', 'next': 'return'},
    ],

    // React
    "react/jsx-no-undef": [2, {"allowGlobals": true}],
    "react/no-did-update-set-state": 'off',
    "react/no-did-mount-set-state": 'off',
    'react/jsx-indent-props': ['error', 2],
    "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
    'react/jsx-key': 'error',
    'react/no-danger': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/destructuring-assignment': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/anchor-is-valid': 'warn', // TODO: заменить на error, когда все вычистим
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-wrap-multilines': [2, {
      "declaration": "parens",
      "assignment": "parens",
      "return": "parens",
      "arrow": "parens",
      "condition": "ignore",
      "logical": "ignore",
      "prop": "parens"
    }],
    'react/jsx-no-bind': 'warn',
    'react/jsx-indent': ['error', 2],
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-multi-str': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  'globals': {
    'React': true,
    '$': true,
    'analytics': true,
    '_mfq': true,
    'jQuery': true,
    'moment': true,
    'app': true,
    'i18n': true,
    '_': true,
    'classNames': true,
    'Intercom': true,
    'queryString': true,
  },
};
