// https://cli.vuejs.org/zh/config
const path = require('path')
const assetsDir = 'static'

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // publicPath: '/',
  outputDir: 'dist',
  assetsDir: assetsDir,
  indexPath: 'index.html',
  filenameHashing: true,
  productionSourceMap: false,
  devServer: {
    port: 80,
    proxy: {
      '/dip/api': {
        target: 'http://dip.csjiovs.com/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/dip/api': ''
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals = { // 不会被打包的库
        three: 'THREE'
      }
    }
  },
  chainWebpack: (config) => {
    // config.plugins.delete('prefetch')
    // config.plugins.delete('preload')
    // config.plugins.delete('named-chunks')
    // 配置别名
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('styles', resolve('src/styles'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('store', resolve('src/store'))
      .set('@', resolve('src'))
    // config.set('externals', {
    //   THREE: 'three'
    // })
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  css: {
    sourceMap: false
  }
}
