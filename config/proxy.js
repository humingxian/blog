// 自己通过看 webpack 了解的proxy配置
module.exports = {
  '/omall': {
    target: 'http://sltest.juboon.com:9500/', // 测试
    changeOrigin: true,
    pathRewrite: { '^/omall/': '/bonade-omall-web/omall/' }
  }
}
