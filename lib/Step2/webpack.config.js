'use strict';

var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [__dirname + '/test/App.js'],
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {},
  mode: 'production'
};