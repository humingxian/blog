import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './router'
import { Provider } from 'react-redux'
import { store } from './store/index'
// 初始化统一样式
import 'normalize.css'
// 自定义公共样式
import './asserts/style/common.less'
// rreact项目引入这个css文件
import 'flex.css/dist/data-flex.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store} >
    <Routers />
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
