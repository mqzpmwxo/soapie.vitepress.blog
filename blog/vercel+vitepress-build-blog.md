# vercel+vitepress博客搭建

## Node.js 环境准备

### 安装Volta
本文使用Volta进行版本管理

#### Unix 安装[​](https://volta.jikun.dev/guide/getting-start.html#unix)

在大多数 Unix 系统(包括 macOS)上，您可以使用一个命令安装 Volta:
```
curl https://get.volta.sh | bash
```

#### windows安装

点此跳转[​](https://volta.jikun.dev/guide/getting-start.html#unix)

### 安装Node.js


```
volta install node@18.17.1
```

---
## 安装Vitepress

windows下全程vscode搭建

### 创建工作目录

```
mkdir blog
cd .\blog\
```

### 安装依赖

```
npm install -D vitepress
```

### VitePress 附带一个命令行设置向导

可帮助您构建基本项目。安装后，通过运行以下命令启动向导

```
npx vitepress init
```

```
┌   Welcome to VitePress! 
│
◇  Where should VitePress initialize the config?
│  ./
│
◇  Site title:
│  Title
│
◇  Site description:
│  Description
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

### 目录结构

```
.
│─ .vitepress
│  ├─ components            //这个目录自建，用于存放组件
│     └─ gitalk.vue         //这个文件自建，用于引入gitalk
│  ├─ theme                 //这个目录自建，用于存放主题相关文件
│  │    ├─ custom.css       //这个文件自建，用于存放自定义样式
│  │    └─ index.ts         //这个文件自建，用于引入主题和组件
│  └─ config.mts
├─ blog                     //这个目录自建，用于存放博客内容
├─ public                   //这个目录自建，用来存放公共资源等，引用的时候路径不需要包含public
│  ├─ logo.ico              //浏览器图标，自己找图
│  └─ logo.png              //首页右侧图片和logo，自己找图
├─ api-examples.md
├─ markdown-examples.md
└─ index.md
└─ package.json
```

### package.json 自带的json文件

```
{
  ···

  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  
  ···
}
```

### 调试命令
```
npm run docs:dev
```

### 构建命令
```
npm run docs:build
```

### 使用Volta固定Node.js版本
```
volta pin node@18.17.1
```

### 执行后package.json会新增内容
```
"volta": {
    "node": "18.17.1"
  }
```

新增dependency也会在此文件中新增对应内容

---

## 配置

### 首页

- `./index.md`
```
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # 大标题
  name: "Soap"
  # 描述
  text: "Soap's blog"
  tagline: 意大利面拌42号混凝土
  image:
        src: /logo.png
        alt: Soapie
  actions:
    - theme: brand
      text: 👉  Blog  👈
      link: /aboutme
  
features:
  - title: E-mail
    details: 发邮件给👴
    link: mailto:gehoujun@outlook.com
  - title: Telegram
    details: 丢小飞机给👴
    link: https://t.me/soapshooter
 # - title: A
 #   details: xxx
 #   link: https://baidu.com
---
```

<img src="/blog/assets/20240724095636.png" />

---
## 主题

- `.vitepress/theme/index.ts`

```
import DefaultTheme from 'vitepress/theme';
import './custom.css';
// @ts-ignore
import comment from "../components/gitalk.vue";
  

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component("gitalk", comment)
  },
};
```

- 编辑.vitepress/theme/custom.css
内容过多以下不引用
### 核心配置
- 编辑`./docs/.vitepress/config.mts`

```
import { defineConfig } from 'vitepress'

  

export default defineConfig({
  // 标题（浏览器后缀）
  title: "Soap",
  // 描述
  description: "Soap's blog",
  // 语言
  lang: 'zh-CN',
  // 根目录
  base: '/',
  // 文档最后更新时间展示
  lastUpdated: true,
  // 去除浏览器链接中的.html后缀  //此项特别注意，本文部署在vercel上因此必须是false，或者默认
  //cleanUrls: false,
  // markdown显示行数
  markdown: {
    lineNumbers: true,
  },
  // head设置
  head: [
    // 浏览器中图标
    ["link", {rel: "icon", href: "/logo.ico"}],
    // 添加百度统计代码
    ['script', {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b6d40898f39099fd8bacd853f395cf6a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
  // 主题设置
  themeConfig: {
    // 左上角logo
    logo: '/logo.png',
    // 首页右上角导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/aboutme' }
    ],
    // 文章左侧导航栏
    sidebar: [
      {
        text: '博客',
        items: [
          { text: 'About Me', link: '/aboutme' },
          //{ text: 'Test', link: '/blog/Test' }
        ]
      }
    ],
    // 文章底部导航栏的自定义配置，默认是英语
    docFooter: {
      prev: 'Prev',
      next: 'Next',
    },
    // 文章右侧目录展示级别和标题
    outline: {
      level: [2, 6],
      label: '文章目录'
    },
    // 文章更新时间的前缀文本
    lastUpdatedText: '最后更新时间',
    // 开启本地搜索（左上角）
    search: {
      provider: 'local',
    },
    // 右上角Github链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mqzpmwxo' }
    ],
    // 页脚
    footer: {
      copyright: 'Copyright © 2024-present Soap',
    }
  }
})
```

---
## 部署至vercel

### push到github
```
npm build docs:dev
git add .
git commit -m "init commit"
git push
```

### 注册vercel，略

### 新建项目
<img src="/blog/assets/20240724100608.png" />

### 选择自己的项目，import
<img src="/blog/assets/20240724100640.png" />

- 根据自己的需求填写
- 注意:此处需要写.vitepress/dist
<img src="/blog/assets/20240724100829.png" />

### 域名，提前准备
- 进入创建好的项目，settings -- domains --edit
- 完成，访问

---
## 其他设置

### 引入gitalk
#### 注册应用

- `Github`
- 进入个人设置`Settings`
- 最下方`Developer settings`
- `OAuth Apps`
- `New OAuth App`
- 此刻获取到`clientID`和`clientSecret`

#### 安装依赖
```
npm install md5 gitalk
```

#### 编辑配置

- 新建目录 `.vitepress/components`
- 编辑`.vitepress/components/gitalk.vue`

```
<template>
    <div class="gitalk-container">
      <div id="gitalk-container"></div>
    </div>
</template>
<script>
import md5 from "md5"
import Gitalk from "gitalk"
import "gitalk/dist/gitalk.css"
export default {
  name: "gitalk",
  data() {
    return {}
  },
  mounted() {
    const commentConfig = {
      clientID: "clientID",
      clientSecret: "clientSecret",
      repo: "reponame",
      owner: "  ",
      admin: ["  "],
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
</style>
```

- 编辑 `.vitepress/theme/index.ts`
```
import comment from "../components/gitalk.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    //新增内容
    ctx.app.component("gitalk", comment)
  }
···

```
#### gitalk使用

在需要的Markdown里使用`<gitalk/>`开启评论

### 接入百度统计

- 官网申请，获取接入代码
- 编辑`./docs/.vitepress/config.mts`

```
// head设置
  head: [
    // 添加百度统计代码
    ['script', {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?自己申请";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
```

### 接入vercel Speed Insights
- 点击Speed Insights获取接入代码
<img src="/blog/assets/20240724102748.png" />

#### 安装speed-insights
```
npm install @vercel/speed-insights
```

- 编辑 `.vitepress/theme/index.ts`
```
import { injectSpeedInsights } from '@vercel/speed-insights';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component("gitalk", comment)
    //添加如下内容
    injectSpeedInsights();
  },
};
```

#### 效果如下
<img src="/blog/assets/20240724103048.png" />