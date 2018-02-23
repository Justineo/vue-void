const path = require('path')

module.exports = {
  configureWebpack: config => {
    config.output.path = path.join(__dirname, '/demo')
    config.output.publicPath = '/vue-void/demo/'
    config.entry.app[0] = './src/demo/main.js'
  },
  lintOnSave: false
}
