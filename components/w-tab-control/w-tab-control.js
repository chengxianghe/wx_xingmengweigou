// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    currendIndex: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick: function(data) {
      const index = data.currentTarget.dataset.index
      console.log(index)

      this.setData({
        currentIndex: index
      })

      //发出事件
      this.triggerEvent("tabClick", index, {})
    },

    setCurrentIndex(index) {
      console.log(index)

      this.setData({
        currendIndex: index
      })
    }
  }
})