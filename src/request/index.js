import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
  timeout: 10 * 1000
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 发送请求前做点啥
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // 返回相应结果前做点啥
  if (response.status === 200 && response.data) {
    return response.data
  }
  return Promise.reject(response)
}, function (error) {
  // 捕获promise错误
  return Promise.reject(error)
})

export const apiGet = (url, params, options) => {
  return instance.get(url + '?' + qs.stringify(params), options)
}

export const apiPost = (url, obj, options) => {
  return instance.post(url, { ...obj }, options)
}

export const apiFormPost = (url, obj, options) => {
  return instance.post(url, { ...obj }, {
    ...options,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}
