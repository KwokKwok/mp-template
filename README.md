# mpvue开发模板

模块：

1. Vant UI

## 修改配置

### 项目名

1. 打开`index.html`，修改`template`为项目名
1. 打开`package.json`，修改`name`、`description`
1. 打开`project.config.json`，修改项目名

### 请求地址

打开`config`目录，分别修改`dev.env.js`和`prod.env.js`

## Build Setup

``` bash
# 安装依赖
yarn

# 开发时构建
yarn dev

# 打包构建
yarn build

# 生成 bundle 分析报告
yarn build --report
```

## 使用Vant UI

### 安装

```bash
yarn add vant-weapp --production
```

### 使用

以`button`组件为例，找到`src/app.json`文件：

```js
"usingComponents": {
  "van-button": "vant-weapp/dist/button/index"
}
```

```html
<van-button type="primary">按钮</van-button>
```

## 增加页面

在`pages`目录下添加一个文件夹，一般包含三个文件：

1. `index.vue`，Vue写法
1. `main.js`，固定写法

    ```js
    import Vue from 'vue'
    import App from './index'

    const app = new Vue(App)
    app.$mount()
    ```

1. `main.json`，配置项，比如页面标题等，详细参见[页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)，常用如下：
   - `navigationBarBackgroundColor`，导航栏背景颜色
   - `navigationBarTextStyle`，导航栏文本颜色
   - `navigationBarTitleText`，导航栏标题
   - `backgroundColor`，页面背景色
   - `backgroundTextStyle`，下拉加载颜色
   - `usingComponents`，组件
   - `enablePullDownRefresh`，下拉刷新
   - `onReachBottomDistance`，触底距离

### 使用Vue组件

组件的写法和用法与普通Vue一致，比如在`src`目录下创建`components`目录，然后写vue组件，在页面中使用import引入
