const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // Webpack mode (Development | Production)
  plugins: [
    require("autoprefixer"),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin() // Removed the content from the dist folder before adding the new one
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  output: {
    filename: "[name].[contentHash].bundle.js", // File where the bundle is saved with a unique hash for the cache
    path: path.resolve(__dirname, "dist") // Folder where the bundle is saved
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Looks for scss files
        use: [
          MiniCssExtractPlugin.loader, // 4. Extracts CSS into files
          "css-loader", // 3. Turns css into commonJS
          "postcss-loader", // 2. Prefixes
          "sass-loader" // 1. Turns scss into css
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
});
