//BFR.js
Page({
  data: {
    sexs: [
      { name: 'male', value: '男', checked: 'true' },
      { name: 'female', value: '女' },
    ],
    sex: 0,
    score: 0,
    waistline: 0,
    weight: 0
  },
  onLoad: function () {
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '看看你的体脂率(BFR)',
      path: '/pages/BFR/BFR',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  radioChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  bindKeyWaistlineInput: function (e) {
    this.setData({
      waistline: e.detail.value
    })
  },
  bindKeyWeightInput: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  calculateBtn: function (e) {
    if (!this.data.waistline) {
      wx.showToast({
        title: '请输入腰围'
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
  //计算BFR值
  calculate: function () {
    let score = 0;
    let waistline = this.data.waistline;
    let weight = this.data.weight;
    if (this.data.sex == 0 || this.data.sex == "male") {
      score = ((0.74 * waistline - 0.082 * weight - 44.74) / weight * 100).toFixed(1);
    } else {
      score = ((0.74 * waistline - 0.082 * weight - 34.89) / weight * 100).toFixed(1);
    }
    this.setData({
      score: score
    })
  }
})
