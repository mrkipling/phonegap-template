/**
 * Webpack configuration for
 * PRODUCTION
 */

const paths = require('./paths');
const moduleConfig = require('./webpack.config.module');
const pluginsConfig = require('./webpack.config.plugins');

module.exports = {
  entry: [paths.jsEntryPoint],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  plugins: pluginsConfig.prod,
  module: moduleConfig.prod,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
