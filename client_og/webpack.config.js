const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/,exclude: /node_modules/,use: "babel-loader"},
      { test: /\.html$/, use: 'html-loader?minimize=false' },
      { test: /\.css$/, use: ['style-loader','css-loader',] },
      { test: /\.(png|jpg|jpeg|gif|svg)$/,exclude: /node_modules/, use: 'url-loader?limit=25000'}
    ],
  },
};