const path = require('path');

const jsPath = path.resolve(__dirname, 'src/js');

module.exports = {
  dist: path.resolve(__dirname, 'www'),
  src: path.resolve(__dirname, 'src'),
  assets: path.resolve(__dirname, 'src/assets'),
  js: jsPath,
  jsEntryPoint: path.join(jsPath, 'app.js'),
};
