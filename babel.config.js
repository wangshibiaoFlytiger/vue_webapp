module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],

  // 配置babel插件babel-plugin-import, 使支持自动按需引入组件
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
