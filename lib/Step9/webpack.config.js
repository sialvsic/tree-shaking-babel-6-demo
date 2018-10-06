'use strict';

var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  entry: [__dirname + '/test/App.js'],
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new WebpackDeepScopeAnalysisPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {},
  mode: 'production'
};