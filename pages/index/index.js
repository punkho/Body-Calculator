//index.js
var app = getApp();
Page({
  data: {
  },
  bindToBMI: function () {
    wx.navigateTo({
      url: '../BMI/BMI',
    })
  },
  bindToBMR: function () {
    wx.navigateTo({
      url: '../BMR/BMR',
    })
  },
  bindToBFR: function () {
    wx.navigateTo({
      url: '../BFR/BFR',
    })
  },
  bindToREE: function () {
    wx.navigateTo({
      url: '../REE/REE',
    })
  },
  onShareAppMessage: function () {
  }
})