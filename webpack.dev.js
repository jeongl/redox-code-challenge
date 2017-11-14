const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    clientLogLevel: 'warning',
    openPage: 'http://localhost:8080',
    overlay: {
      warnings: true,
      errors: true
    }
  }
});
