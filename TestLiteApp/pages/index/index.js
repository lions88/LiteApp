//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    message:'hello liliang',
    //array:[1, 2, 3, 4, 5],
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    view:'APP'
  },

  //事件处理函数
  bindViewTap: function() {
    console.log("bindViewTap")
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (Object) {
    console.log("onLoad() ")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    console.log("onShow()")
    //console.log(Page.)
  },
  onReady: function(){
    console.log("onReady")
  },
  onHide: function(){
    console.log("onHide()")
  },
  onUnload: function(){
    console.log("onUnload()")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function(){
    return{
      title:'自定义转发',
      path:'/page/index'
    }
  },
  switch: function(event){
    console.log("switch")
    console.log(event)
  },

  handleTap1:function(){
    console.log("handleTap1")
  },
  handleTap2: function () {
    console.log("handleTap2")
  },
  handleTap3: function () {
    console.log("handleTap3")
  },
  handleTap4: function () {
    console.log("handleTap4")
  },

})
