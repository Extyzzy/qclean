const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", // Entry point of the JavaScript code
    // vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/components.html",
      filename: "components.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/contacts.html",
      filename: "contacts.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/services.html",
      filename: "services.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/book.html",
      filename: "book.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/services-open.html",
      filename: "services-open.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/promotions.html",
      filename: "promotions.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/services-open-cleaning.html",
      filename: "services-open-cleaning.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/cleaning-windows.html",
      filename: "cleaning-windows.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/, // Looks for html files
        use: ["html-loader"] // Requires the needed assets
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets" // Copies the content into the dist folder within a folder with the name of "assets"
          }
        }
      }
    ]
  }
};
