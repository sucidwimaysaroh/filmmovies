const path = require('path');

module.exports = {
  entry: './src/script/view/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundel.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}