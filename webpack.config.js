const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'js/app.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tengu',
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: 'web',
    historyApiFallback: true
  }
}
