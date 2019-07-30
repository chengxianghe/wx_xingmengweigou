// pages/home/home.js

import {
  getMultiData,
  getProduct
} from '../../service/home.js'

import {
  POP,
  SELL,
  NEW,
  BACK_TOP_POSITION
} from '../../commen/const.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ["流行", "新款", "精选"],
    goods: {
      [POP]: { page: 1, list: [] },
      [SELL]: { page: 1, list: [] },
      [NEW]: { page: 1, list: [] },
    },

    currentType: [POP],
    topPosition: 0,
    tabControlTop: 0,
    showBackTop: false,
    showTabControl: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 1. 请求数据
    this._getData()
  },

  _getData: function () {
    this._getMultiData();
    this._getGoodsData(POP);
    this._getGoodsData(NEW);
    this._getGoodsData(SELL);
  },


  _getMultiData: function () {
    //请求轮播图和推荐数据
    getMultiData().then(res => {
      // console.log(res)
      //取数据
      const banners = res.data.banner.list;
      const recommends = res.data.recommend.list;

      //存数据
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },

  _getGoodsData: function (type) {
    console.log(type)
    // 1.获取数据对应的页码
    const page = this.data.goods[type].page;

    // 2.请求数据
    getProduct(type, page).then(res => {
      // 1.取出数据
      const list = res.data.list;
      console.log(res)

      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })  
    })
  },

  tabClick: function (e) {
    let currentType = ''
    const index = e.detail.index
    switch (index) {
      case 0:
      currentType = POP
      break
      case 1:
      currentType = NEW
      break
      case 2:
      currentType = SELL
      break
    }

    this.setData({
      currentType: currentType
    })

    console.log(this.selectComponent('.tab-control'))
    this.selectComponent('.tab-control').setCurrentIndex(index)
    this.selectComponent('.tab-control-temp').setCurrentIndex(index)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

})