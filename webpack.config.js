const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    "./app/index.js",
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist/",
    historyApiFallback: true,
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader:"css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader:"sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("styles.css")]
};
