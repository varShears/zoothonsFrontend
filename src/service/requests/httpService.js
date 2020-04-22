/*
 * @Descripttion: http 请求工具
 * @version: 1.0
 * @Author: zhaoys@boe.com.cn
 * @Date: 2019-10-23 17:34:13
 * @LastEditors  : Ling Long
 * @LastEditTime : 2019-12-19 09:34:18
 */

/*********************************/
// 请求demo
// demo(){
//  return request({
//  url:'',
//  method:'', // GET or POST
//  data or params:**
//  })
//}
/*********************************/

import { message } from 'element-ui'
import axios from 'axios'
// import {
//     Modal
// } from 'ant-design-vue'
// import {
//     TokenKey,
//     getToken
// } from './auth'
import store from '@/store'

const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000
})

// 携带 cookie
service.defaults.withCredentials = true

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 头部携带 token
      // config.headers[TokenKey] = getToken()  // 获取token
    }

    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (
      response.headers['content-type'] &&
      response.headers['content-type'].startsWith('application/json') &&
      res.statusCode !== 200
    ) {
      message.error(res.message)

      return Promise.reject(res)
    } else {
      // // 存储 token，已经启用了 cookie, 该头部字段非必须。适配一些不支持或者禁用了 cookie 的场合。
      // if (res.data.token) {
      //   store.dispatch('user/setToken', res.data.token)
      // }

      return Promise.resolve(res)
    }
  },
  error => {
    message.error(error.message, 5)
    return Promise.reject(error)
  }
)

export default service
