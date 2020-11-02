const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    port: 3000,

    https: false,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'errors-only',
    hot: true,
    overlay: true,
    // watchContentBase: true,
    // watchOptions: {
    //   poll: true,
    //   ignored: /node_modules/,
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/graphql': '',
      '/rest': '',
    },
  },
})
