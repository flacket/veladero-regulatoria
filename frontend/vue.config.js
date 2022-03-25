const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://example.test/',
        }
    }
  },
  indexPath: process.env.NODE_ENV === 'production' ? '../app/Views/index.php' : 'index.html',
  outputDir: '../public/',
})