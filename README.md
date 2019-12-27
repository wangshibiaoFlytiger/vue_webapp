项目原始仓库地址: https://github.com/wangshibiaoFlytiger/vue_webapp #若本项目给您带来收获, 还请您动动小拇指,右上角给点个赞哈,万分感谢哈哈!!!

基于 vue 的 webapp 开发脚手架, 用到的技术栈:

1. vue-router
   用于路由管理
2. vuex
   用户组件的状态管理, 为适用于大型工程, 本工程采用分模块的状态管理
3. vant
   是现有开源的 ui 组件库中推荐的一款, 其他组件库经测试都不支持 vue-cli3

一. 创建工程
执行命令 vue create vue_webapp
创建选项如下:
Vue CLI v3.6.3
┌───────────────────────────┐
│ Update available: 4.1.1 │
└───────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Vuex, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) n

二. 工程目录约定

1. components 目录
   存放非页面组件
2. views 目录
   存放页面组件

三. 预渲染
使用插件 prerender-spa-plugin 实现预渲染

1. 注意事项
   通过实践得知, 对于 vue 中配置为重定向的路由, 不会做预渲染
