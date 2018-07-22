//引用node path 模块
const path = require('path')
//热更新要用到webpack的插件
const webpack = require('webpack')
//html在内存中加载的插件
const htmlwebpackplugin = require('html-webpack-plugin')
//15版本以上的vue-loader 需要插件支持 , 插件是个对象,这里引入的时候要转换成对象才行
// const {VueLoaderPlugin} = require('vue-loader')
// 这个配置文件就是个js文件,通过node.js中的操作,向外暴露了一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  //devServer的另一种配置方式
  devServer: {
    hot: true,
    inline:true,    //实时刷新
    // colors: true,  //终端中输出结果为彩色
    contentBase: 'src',
    port: 3000
    // open: true,
  },
  //配置插件的节点
  plugins: [
    //启用热更新的插件
    // new webpack.optimize.OccurenceOrderPlugin(true), //热更新替换插件
    new webpack.HotModuleReplacementPlugin(),
    //配置html在内存中加载的插件
    new htmlwebpackplugin({
      //指定模板页面,拷贝到内存中
      template: path.join(__dirname, './src/index.html'),
      //生成内存页面的名字
      filename: 'index.html'
    }),
    //15版本以上的vue-loader 需要插件支持
    // new VueLoaderPlugin()
  ],
  //第三方模块 加载器
  module: {
    rules: [
      //正则css文件并让他使用 加载器
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=123&name=[name].[ext]' },
      { test: /\.(ttf|eot|svg|otf|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: ['vue-loader'] }
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue"
    }
  }
}