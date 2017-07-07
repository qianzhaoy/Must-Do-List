## 前言
开始用Vue一段时间了, 开始想整合一下自己所学. 苦思冥想一个todolist, 加上一些自己感觉挺有意思的东西. 每日一做, 每天做一件自己必须做的事, 不要混日子.所以就叫做must-todu-list吧.


### 关于技术栈
vue2 + muse-ui + vuex + vue-router + vue-touch + webpack + ES6

### 数据相关
没有写后端接口, 因为主要还是以Vue为主.(多麻烦啊,直接放上去就能看方便!)
各个页面数据相关放在了vuex的modules里了.详情请看vuex/modules/目录下的文件.

## 效果演示

[查看demo请戳这里](https://qianzhaoy.github.io/production/MustTodo/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="https://github.com/qianzhaoy/Must-Do-List/blob/master/static/code.png" width="250" height="250"/>


### 目录结构如下
```
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── css
│   │       └── reset.css
│   ├── components
│   │   ├── allocation
│   │   │   └── allocationRepo.vue
│   │   ├── appBar.vue
│   │   ├── repository
│   │   │   ├── childrenRepo.vue
│   │   │   ├── footer.vue
│   │   │   └── inputDialog.vue
│   │   └── welcome
│   │       ├── welcomeA.vue
│   │       └── welcomeB.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── views
│   │   ├── allocation.vue
│   │   ├── history.vue
│   │   ├── home.vue
│   │   ├── repository.vue
│   │   └── welcome.vue
│   └── vuex
│       ├── modules
│       │   ├── allocation.js
│       │   ├── history.js
│       │   └── repository.js
│       └── store.js
└── static

```
## 启动相关

``` bash
# 安装依赖项
npm install

# 启动开发环境, 地址: localhost:8080
npm run dev

# 编译打包上生产
npm run build

```