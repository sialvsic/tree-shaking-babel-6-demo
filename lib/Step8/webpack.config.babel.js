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
    path: path.resolve(__dirname, './buildBabel')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  mode: 'production'
};