const cssnano = require('cssnano');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = require('./paths');

module.exports = {
  dev: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin(),
  ],
  prod: [
    new CleanWebpackPlugin(paths.dist),
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
    new ExtractTextPlugin('app.bundle.css'),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
    }),
  ],
};
