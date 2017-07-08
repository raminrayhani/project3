var webpack = require("webpack");
var path = require("path");

var APP = path.resolve(__dirname, "app");
var BUNDLE = path.resolve(__dirname, "bundle");

var config = {
  entry: APP + "/app.js",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        include: APP,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;
