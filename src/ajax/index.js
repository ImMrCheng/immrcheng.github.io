import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = '/api'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['x-requested-with'] = 'XMLHttpRequest'

const requestGet = (options, successFn, errorFn) => {
  return new Promise((resolve, reject) => {
    const { api = '', params = {} } = options
    const config = { params }
    axios
      .get(api, config)
      .then(async response => {
        const { data = {} } = response
        console.log('get', data.data)
        if (data.statusCode === '0') {
          try {
            successFn && successFn(data.data)
          } catch (err) {
            // eslint-disable-next-line
            console.log(err)
          }
          resolve(data.data)
        } else {
          const { msg = `${api}接口数据异常` } = data
          Message.error(msg)
          try {
            errorFn && errorFn(data)
          } catch (err) {
            // eslint-disable-next-line
            console.log(err)
          }
        }
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      })
  })
}
const requestPost = (options, successFn, errorFn) => {
  return new Promise((resolve, reject) => {
    const { api = '', params = {} } = options
    axios
      .post(api, params)
      .then(async response => {
        const { data = {} } = response
        console.log('post', data.data)
        if (data.statusCode === '0') {
          try {
            successFn && successFn(data.data)
          } catch (err) {
            // eslint-disable-next-line
            console.log(err)
          }
          resolve(data.data)
        } else {
          const { msg = `${api}接口数据异常` } = data
          Message.error(msg)
          try {
            errorFn && errorFn(data)
          } catch (err) {
            // eslint-disable-next-line
            console.log(err)
          }
        }
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      })
  })
}

const AJAX = {
  install: Vue => {
    Vue.prototype.$get = requestGet
    Vue.prototype.$post = requestPost
  }
}

export const fetchGet = requestGet
export const fetchPost = requestPost

export default AJAX
