export default {
  pages: [
    
    'pages/home/home',
    'pages/my/my',
    'pages/detail/detail',
  ],
  tabBar:{
    color: "#b0b1b8",
    selectedColor: "#f01d24",
    borderStyle: "white",
    backgroundColor: "backgroundColor",
    list: [
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "assets/tabBar/home.png",
        selectedIconPath: "assets/tabBar/home-fill.png",
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "assets/tabBar/my.png",
        selectedIconPath: "assets/tabBar/my-fill.png",
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
