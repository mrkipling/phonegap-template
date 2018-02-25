/**
 * Webpack configuration for
 * DEVELOPMENT
 */

const paths = require('./paths');
const moduleConfig = require('./webpack.config.module');
const pluginsConfig = require('./webpack.config.plugins');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    paths.jsEntryPoint,
  ],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  devServer: {
    hot: true,
  },
  plugins: pluginsConfig.dev,
  module: moduleConfig.dev,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  watch: true,
};
