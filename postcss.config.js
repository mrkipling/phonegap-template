const autoprefixer = require('autoprefixer');
const postcssEasyMediaQuery = require('postcss-easy-media-query');

const breakpoints = {
  xs: '544px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    autoprefixer,
    postcssEasyMediaQuery({ breakpoints }),
  ],
};
