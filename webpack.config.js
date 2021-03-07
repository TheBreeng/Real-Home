'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: {home: './src/js/script.js', about: './src/js/about.js'},
  output: {
    filename: '[name].js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]
          ]
        }
      }
    }]
  }
};