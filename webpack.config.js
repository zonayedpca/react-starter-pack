const HtmlWebpackPlugin = require('html-webpack-plugin'),
      FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.png',
      prefix: 'icons/',
      title: 'React Starter Pack Complete Version'
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 4004,
    host: process.env.IP || 'localhost',
    disableHostCheck: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
