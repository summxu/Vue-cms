# 第一个Vue的小项目,CMS系统

## 没有后端接口,数据都是在本地模拟的.

## 组件支持:

1. Mint-UI
    - 按需导入对懒加载的小图标显示不完全....
2. MUI
    - MUI 在用到js的组件的时候,需要手动初始化
    - 导入mui.js
    ```
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ```
    - wapack打包默认启用严格模式,MUI的js里用到了'caller', 'callee', and 'arguments',打包会出错,把严格模式取消掉
    - 滑动警告取消
    ` *{ touch-action pan-y }`
    - 初始化滑动模块要在 图片 组件 mounted 钩子里去初始话.因为滑动条是对DOM元素进行操作,要等所有dom元素都加载完毕
    - tabbar不能用 是因为 mui-tab-item 样式 和 这个js里有冲突,要换类名



## 组件
1. 主页组件
    - 新闻列表组件
    - 新闻信息组件
2. 会员组件
3. 购物车组件
4. 搜索组件