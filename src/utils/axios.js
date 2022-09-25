import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 2000
})
// 添加请求拦截器
axios.interceptors.request.use(
  /*
  在发请求前做了什么
  **/
  function (config) {
    return config;
}, function (error) {
  /**
   * 对请求戳误做些什么
   * */
  return Promise.reject(error)
})

  /**
   * 添加响应拦截器
   **/
service.interceptors.response.use(function (response) {
  /**
   * 对响应的数据做点什么**/
  return response.data
}, function (error) {
    return Promise.reject(error)
})

export default {
  ...service,
  get (url, data = {}) {
    return service.get(url, {
      params: data
    })
  }
}
