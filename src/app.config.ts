export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/goods/category/index',
    'pages/cart/index',
    'pages/my/index',
  ],
  tabBar: {
    color: '#333',
    selectedColor: '#6cb1ff',
    backgroundColor: '#fff',
    list:[{
      pagePath:'pages/index/index',
      text:'首页',
      selectedIconPath: './images/tabbar_home_on.png',
      iconPath: './images/tabbar_home.png',
    },{
      pagePath:'pages/goods/category/index',
      text:'分类',
      selectedIconPath: './images/tabbar_cate_on.png',
      iconPath: './images/tabbar_cate.png',
    },{
      pagePath:'pages/cart/index',
      text:'购物车',
      selectedIconPath: './images/tabbar_cart_on.png',
      iconPath: './images/tabbar_cart.png',
    },{
      pagePath:'pages/my/index',
      text:'我的',
      selectedIconPath: './images/tabbar_my_on.png',
      iconPath: './images/tabbar_my.png',
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
