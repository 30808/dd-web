import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 2000
})

export default {
  ...service,
  get (url, data = {}) {
    return service.get(url, {
      params: data
    })
  }
}
