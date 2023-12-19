const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: `bundle.[chunkhash].js`,
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][hash][ext]",
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
    new CopyWebpackPlugin({
      patterns: [
        { from: "_headers", to: "" },
        { from: "_redirects", to: "" },
        // Add more files if needed
      ],
    }),
  ],
  mode: "development",
};
