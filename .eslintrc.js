module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'array-element-newline': [2, { minItems: 2 }],
    'array-bracket-newline': [2, { minItems: 2 }],
    'class-methods-use-this': 0,
    'func-names': 0,
    'guard-for-in': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'max-len': 0,
    'new-cap': 0,
    'no-alert': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/no-unused-state': 0,
  },
};
