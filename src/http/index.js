import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 配置默认url/使用mock
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b790c90de8698087073344b/snailreading'

// 配置超时默认值/2.5s
var instance = axios.create()
instance.defaults.timeout = 2500

// 在请求或响应被 then 或 catch 处理前拦截它们。
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  switch (config.method) {
    case 'get':
      break
    case 'post':
      if (!config.data) {
        // data必传
        config.data = {}
      }

      break
    default: break
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response && response.data) {
    let data = response.data

    return data
  } else {
    return {}
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
