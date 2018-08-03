
const app = getApp()
var common = require('../common/common.js')

Page({
  data:{
    text:"init data",
    num:0,
    array:[{text:'init data'}],
    object:{
      text:'init data'},
    array2:[1,2,3,6,0],
    view:'MINA',
    templatee:'模板',
    
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' }
    
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
    //console.log("onPageScroll")
  },
  onTabItemTap(item){
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    console.log("viewTap")
    wx.navigateBack({
      url:'../index/index'
    })    
  },
  customData: {
    hi: 'MINA'
  },

  changeText:function(){
    this.setData({text:'changed data'})
  },
  changeNum: function(){
    this.data.num++
    this.setData({num:this.data.num})
  },

  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },

  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },

  callCommon: function(){
    common.sayHello('LiLiang')
  },

})