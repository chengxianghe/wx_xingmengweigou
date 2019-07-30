import {
  baseURL,
  timeOut
} from './config.js'

function request(options) {
  wx.showLoading({
    title: '数据加载中...',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      header: options.header || {'content-type': 'application/json'},
      data: options.data || {},
      success: function(res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

export default request;