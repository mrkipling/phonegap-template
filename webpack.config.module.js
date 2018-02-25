const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      'eslint-loader',
    ],
  },
  files: {
    test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
    use: ['file-loader?name=./assets/[hash].[ext]'],
  },
};

module.exports = {
  dev: {
    rules: [
      rules.js,
      rules.files,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  prod: {
    rules: [
      rules.js,
      rules.files,
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
};
