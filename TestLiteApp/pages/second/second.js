
const app = getApp()

Page({
  data:{
    text:"this is second page",
  },
  onLoad:function(options){
    console.log("onLoad")
    console.log(options)
  },
  onReady:function(){
    console.log("onReady()")
  },
  onShow: function(){
    console.log("onShow()")
  },
  onHide: function(){
    console.log("onHide")
  },
  onUnload: function(){
    console.log("onUnload")
  },
  onPullDownRefresh: function(){
    console.log("onPullDownRefresh")
  },
  onReachBottom: function(){
    console.log("onReachBottom")
  },
  onShareAppMessage: function(){
    console.log("onShareAppMessage")
    return {
      title: '自定义转发标题',
      path: '/page/index'
    }
  },
  onPageScroll: function(){
    console.log("onPageScroll")
  },
  onTabItemTap(item){
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})