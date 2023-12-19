const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ferryhill Fish & Chips",
      filename: "index.html",
      template: "src/template.html",
      favicon: "src/assets/favicon.ico",
    }),
    new CopyWebpackPlugin([
      { from: "_headers", to: "_headers", toType: "file" },
      { from: "_redirects", to: "_redirects", toType: "file" },
      // Add more files if needed
    ]),
  ],
  mode: "development",
};
