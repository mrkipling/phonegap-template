module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'above',
          'from-width',
          'below',
          'to-width',
          'between',
          'between-from',
          'between-to',
          'breakpoint',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
