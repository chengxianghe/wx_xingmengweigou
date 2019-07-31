// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      list: [
        [{
            "icon": "/assets/images/profile/message.png",
            "title": "我的消息"
          },
          {
            "icon": "/assets/images/profile/pointer.png",
            "title": "积分商城"
          },
          {
            "icon": "/assets/images/profile/vip.png",
            "title": "会员卡"
          },
        ],
        [{
            "icon": "/assets/images/profile/cart.png",
            "title": "我的购物车"
          },
          {
            "icon": "/assets/images/profile/app.png",
            "title": "下载购物APP"
          }
        ]
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})