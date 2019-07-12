//BMI.js
Page({
  data: {
    array: ['中国标准', '国际标准', '亚洲标准'],
    index: 0,
    score: 0,
    height: 0,
    weight: 0,
    charLt: '<'
  },
  onLoad: function () {
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '看看你的身体质量指数(BMI)',
      path: '/pages/BMI/BMI',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyHeightInput: function (e) {
    this.setData({
      height: e.detail.value
    })
  },
  bindKeyWeightInput: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  calculateBtn: function (e) {
    if (!this.data.height) {
      wx.showToast({
        title: '请输入身高'
      })
      return false;
    }
    if (!this.data.weight) {
      wx.showToast({
        title: '请输入体重'
      })
      return false;
    }
    this.calculate();
  },
  //计算BMI值
  calculate: function () {
    let score = 0;
    let height = this.data.height / 100;
    let weight = this.data.weight;
    score = (weight / (height * height)).toFixed(1);
    this.setData({
      score: score
    })
  }
})
