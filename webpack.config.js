const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    library: "svg-hue-filter-matrix",
    libraryTarget: "umd"
  }
}