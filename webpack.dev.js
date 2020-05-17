const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development', // Webpack mode (Development | Production)
  output: {
    filename: '[name].bundle.js', // File where the bundle is saved with a unique hash for the cache
    path: path.resolve(__dirname, 'dist') // Folder where the bundle is saved
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Looks for scss files
        use: [
          'style-loader', // 3. Injects styles into DOM
          'css-loader', // 2. Turns css into commonJS
          'sass-loader' // 1. Turns scss into css
        ]
      }
    ]
  }
});