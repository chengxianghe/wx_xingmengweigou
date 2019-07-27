import {
  baseURL
} from './config.js'

export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      header: options.header || {'content-type': 'application/json'},
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
  
}