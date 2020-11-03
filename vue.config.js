const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']


module.exports = {
    configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.jsnpm install --save-dev compression-webpack-plugin
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         drop_debugger: true,
    //         drop_console: true
    //       }
    //     },
    //     sourceMap: false,
    //     parallel: true
    //   }),
      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
   
}

