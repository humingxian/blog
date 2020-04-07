// 通过网上看到的 proxy 中间件配置代理
const proxy = require('http-proxy-middleware')
// 针对create-react-app实现接口服务代理功能
module.exports = function (app) {
  app.use(
    proxy('/api/', {
      target: 'http://localhost:3003/',
      pathRewrite: { '^/api/': '/api/' }
    })
  )
}
