// 通过网上看到的 proxy 中间件配置代理
const proxy = require('http-proxy-middleware')
// 针对create-react-app实现接口服务代理功能
module.exports = function (app) {
  app.use(
    proxy('/omall/', {
      target: 'http://sltest.juboon.com:9500/',
      pathRewrite: { '^/omall/': '/bonade-omall-web/omall/' }
    })
  )
}
