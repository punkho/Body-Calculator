//BMR.js
Page({
  data: {
    sexs: [
      { name: 'male', value: '男', checked: 'true' },
      { name: 'female', value: '女' },
    ],
    sex: 0,
    score: 0,
    age: 0,
    height: 0,
    weight: 0,
  },
  onLoad: function () {
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '看看你的基础代谢率(BMR)',
      path: '/pages/BMR/BMR',
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
  bindKeyAgeInput: function (e) {
    this.setData({
      age: e.detail.value
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
    if (!this.data.age) {
      wx.showToast({
        title: '请输入年龄'
      })
      return false;
    }
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
  //计算BMR值
  calculate: function () {
    let score = 0;
    let age = this.data.age;
    let height = this.data.height;
    let weight = this.data.weight;
    if (this.data.sex == 0 || this.data.sex == "male") {
      score = (13.7 * weight + (5 * height) - (6.8 * age) + 66).toFixed(1);
    } else {
      score = (9.6 * weight + (1.8 * height) - (4.7 * age) + 655).toFixed(1);
    }
    this.setData({
      score: score
    })
  }
})
