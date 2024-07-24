import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.Dx5AVRXu.js";const e="/assets/20240724095636.CNxPH7Qz.png",l="/assets/20240724100608.DReimEtd.png",i="/assets/20240724100640.BVhCMMaa.png",r="/assets/20240724100829.BLvz63BV.png",c="/assets/20240724102748.COz-hPQA.png",t="/assets/20240724103048.DqrnBdyt.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/vercel+vitepress博客搭建.md","filePath":"blog/vercel+vitepress博客搭建.md","lastUpdated":1721802284000}'),b={name:"blog/vercel+vitepress博客搭建.md"},o=p(`<h2 id="node-js-环境准备" tabindex="-1">Node.js 环境准备 <a class="header-anchor" href="#node-js-环境准备" aria-label="Permalink to &quot;Node.js 环境准备&quot;">​</a></h2><h3 id="安装volta" tabindex="-1">安装Volta <a class="header-anchor" href="#安装volta" aria-label="Permalink to &quot;安装Volta&quot;">​</a></h3><p>本文使用Volta进行版本管理</p><h4 id="unix-安装​" tabindex="-1">Unix 安装<a href="https://volta.jikun.dev/guide/getting-start.html#unix" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#unix-安装​" aria-label="Permalink to &quot;Unix 安装[​](https://volta.jikun.dev/guide/getting-start.html#unix)&quot;">​</a></h4><p>在大多数 Unix 系统(包括 macOS)上，您可以使用一个命令安装 Volta:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://get.volta.sh | bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="windows安装" tabindex="-1">windows安装 <a class="header-anchor" href="#windows安装" aria-label="Permalink to &quot;windows安装&quot;">​</a></h4><p>点此跳转<a href="https://volta.jikun.dev/guide/getting-start.html#unix" target="_blank" rel="noreferrer">​</a></p><h3 id="安装node-js" tabindex="-1">安装Node.js <a class="header-anchor" href="#安装node-js" aria-label="Permalink to &quot;安装Node.js&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>volta install node@18.17.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="安装vitepress" tabindex="-1">安装Vitepress <a class="header-anchor" href="#安装vitepress" aria-label="Permalink to &quot;安装Vitepress&quot;">​</a></h2><p>windows下全程vscode搭建</p><h3 id="创建工作目录" tabindex="-1">创建工作目录 <a class="header-anchor" href="#创建工作目录" aria-label="Permalink to &quot;创建工作目录&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir blog</span></span>
<span class="line"><span>cd .\\blog\\</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -D vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="vitepress-附带一个命令行设置向导" tabindex="-1">VitePress 附带一个命令行设置向导 <a class="header-anchor" href="#vitepress-附带一个命令行设置向导" aria-label="Permalink to &quot;VitePress 附带一个命令行设置向导&quot;">​</a></h3><p>可帮助您构建基本项目。安装后，通过运行以下命令启动向导</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx vitepress init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌   Welcome to VitePress! </span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  Title</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  Description</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Theme:</span></span>
<span class="line"><span>│  Default Theme</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Use TypeScript for config and theme files?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Add VitePress npm scripts to package.json?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└  Done! Now run npm run docs:dev and start writing.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>│─ .vitepress</span></span>
<span class="line"><span>│  ├─ components            //这个目录自建，用于存放组件</span></span>
<span class="line"><span>│     └─ gitalk.vue         //这个文件自建，用于引入gitalk</span></span>
<span class="line"><span>│  ├─ theme                 //这个目录自建，用于存放主题相关文件</span></span>
<span class="line"><span>│  │    ├─ custom.css       //这个文件自建，用于存放自定义样式</span></span>
<span class="line"><span>│  │    └─ index.ts         //这个文件自建，用于引入主题和组件</span></span>
<span class="line"><span>│  └─ config.mts</span></span>
<span class="line"><span>├─ blog                     //这个目录自建，用于存放博客内容</span></span>
<span class="line"><span>├─ public                   //这个目录自建，用来存放公共资源等，引用的时候路径不需要包含public</span></span>
<span class="line"><span>│  ├─ logo.ico              //浏览器图标，自己找图</span></span>
<span class="line"><span>│  └─ logo.png              //首页右侧图片和logo，自己找图</span></span>
<span class="line"><span>├─ api-examples.md</span></span>
<span class="line"><span>├─ markdown-examples.md</span></span>
<span class="line"><span>└─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="package-json-自带的json文件" tabindex="-1">package.json 自带的json文件 <a class="header-anchor" href="#package-json-自带的json文件" aria-label="Permalink to &quot;package.json 自带的json文件&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ···</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ···</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="调试命令" tabindex="-1">调试命令 <a class="header-anchor" href="#调试命令" aria-label="Permalink to &quot;调试命令&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="构建命令" tabindex="-1">构建命令 <a class="header-anchor" href="#构建命令" aria-label="Permalink to &quot;构建命令&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用volta固定node-js版本" tabindex="-1">使用Volta固定Node.js版本 <a class="header-anchor" href="#使用volta固定node-js版本" aria-label="Permalink to &quot;使用Volta固定Node.js版本&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>volta pin node@18.17.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="执行后package-json会新增内容" tabindex="-1">执行后package.json会新增内容 <a class="header-anchor" href="#执行后package-json会新增内容" aria-label="Permalink to &quot;执行后package.json会新增内容&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;volta&quot;: {</span></span>
<span class="line"><span>    &quot;node&quot;: &quot;18.17.1&quot;</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>新增dependency也会在此文件中新增对应内容</p><hr><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="首页" tabindex="-1">首页 <a class="header-anchor" href="#首页" aria-label="Permalink to &quot;首页&quot;">​</a></h3><ul><li><code>./index.md</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span># https://vitepress.dev/reference/default-theme-home-page</span></span>
<span class="line"><span>layout: home</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hero:</span></span>
<span class="line"><span>  # 大标题</span></span>
<span class="line"><span>  name: &quot;Soap&quot;</span></span>
<span class="line"><span>  # 描述</span></span>
<span class="line"><span>  text: &quot;Soap&#39;s blog&quot;</span></span>
<span class="line"><span>  tagline: 意大利面拌42号混凝土</span></span>
<span class="line"><span>  image:</span></span>
<span class="line"><span>        src: /logo.png</span></span>
<span class="line"><span>        alt: Soapie</span></span>
<span class="line"><span>  actions:</span></span>
<span class="line"><span>    - theme: brand</span></span>
<span class="line"><span>      text: 👉  Blog  👈</span></span>
<span class="line"><span>      link: /aboutme</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>features:</span></span>
<span class="line"><span>  - title: E-mail</span></span>
<span class="line"><span>    details: 发邮件给👴</span></span>
<span class="line"><span>    link: mailto:gehoujun@outlook.com</span></span>
<span class="line"><span>  - title: Telegram</span></span>
<span class="line"><span>    details: 丢小飞机给👴</span></span>
<span class="line"><span>    link: https://t.me/soapshooter</span></span>
<span class="line"><span> # - title: A</span></span>
<span class="line"><span> #   details: xxx</span></span>
<span class="line"><span> #   link: https://baidu.com</span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><img src="`+e+`"><hr><h2 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h2><ul><li><code>.vitepress/theme/index.ts</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import DefaultTheme from &#39;vitepress/theme&#39;;</span></span>
<span class="line"><span>import &#39;./custom.css&#39;;</span></span>
<span class="line"><span>// @ts-ignore</span></span>
<span class="line"><span>import comment from &quot;../components/gitalk.vue&quot;;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  ...DefaultTheme,</span></span>
<span class="line"><span>  enhanceApp(ctx) {</span></span>
<span class="line"><span>    DefaultTheme.enhanceApp(ctx)</span></span>
<span class="line"><span>    ctx.app.component(&quot;gitalk&quot;, comment)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>编辑.vitepress/theme/custom.css 内容过多以下不引用</li></ul><h3 id="核心配置" tabindex="-1">核心配置 <a class="header-anchor" href="#核心配置" aria-label="Permalink to &quot;核心配置&quot;">​</a></h3><ul><li>编辑<code>./docs/.vitepress/config.mts</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  // 标题（浏览器后缀）</span></span>
<span class="line"><span>  title: &quot;Soap&quot;,</span></span>
<span class="line"><span>  // 描述</span></span>
<span class="line"><span>  description: &quot;Soap&#39;s blog&quot;,</span></span>
<span class="line"><span>  // 语言</span></span>
<span class="line"><span>  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span>  // 根目录</span></span>
<span class="line"><span>  base: &#39;/&#39;,</span></span>
<span class="line"><span>  // 文档最后更新时间展示</span></span>
<span class="line"><span>  lastUpdated: true,</span></span>
<span class="line"><span>  // 去除浏览器链接中的.html后缀  //此项特别注意，本文部署在vercel上因此必须是false，或者默认</span></span>
<span class="line"><span>  //cleanUrls: false,</span></span>
<span class="line"><span>  // markdown显示行数</span></span>
<span class="line"><span>  markdown: {</span></span>
<span class="line"><span>    lineNumbers: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // head设置</span></span>
<span class="line"><span>  head: [</span></span>
<span class="line"><span>    // 浏览器中图标</span></span>
<span class="line"><span>    [&quot;link&quot;, {rel: &quot;icon&quot;, href: &quot;/logo.ico&quot;}],</span></span>
<span class="line"><span>    // 添加百度统计代码</span></span>
<span class="line"><span>    [&#39;script&#39;, {},</span></span>
<span class="line"><span>    \`</span></span>
<span class="line"><span>      var _hmt = _hmt || [];</span></span>
<span class="line"><span>      (function() {</span></span>
<span class="line"><span>        var hm = document.createElement(&quot;script&quot;);</span></span>
<span class="line"><span>        hm.src = &quot;https://hm.baidu.com/hm.js?b6d40898f39099fd8bacd853f395cf6a&quot;;</span></span>
<span class="line"><span>        var s = document.getElementsByTagName(&quot;script&quot;)[0];</span></span>
<span class="line"><span>        s.parentNode.insertBefore(hm, s);</span></span>
<span class="line"><span>      })();</span></span>
<span class="line"><span>    \`</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // 主题设置</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    // 左上角logo</span></span>
<span class="line"><span>    logo: &#39;/logo.png&#39;,</span></span>
<span class="line"><span>    // 首页右上角导航栏</span></span>
<span class="line"><span>    nav: [</span></span>
<span class="line"><span>      { text: &#39;Home&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span>      { text: &#39;Blog&#39;, link: &#39;/aboutme&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 文章左侧导航栏</span></span>
<span class="line"><span>    sidebar: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &#39;博客&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &#39;About Me&#39;, link: &#39;/aboutme&#39; },</span></span>
<span class="line"><span>          //{ text: &#39;Test&#39;, link: &#39;/blog/Test&#39; }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 文章底部导航栏的自定义配置，默认是英语</span></span>
<span class="line"><span>    docFooter: {</span></span>
<span class="line"><span>      prev: &#39;Prev&#39;,</span></span>
<span class="line"><span>      next: &#39;Next&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 文章右侧目录展示级别和标题</span></span>
<span class="line"><span>    outline: {</span></span>
<span class="line"><span>      level: [2, 6],</span></span>
<span class="line"><span>      label: &#39;文章目录&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 文章更新时间的前缀文本</span></span>
<span class="line"><span>    lastUpdatedText: &#39;最后更新时间&#39;,</span></span>
<span class="line"><span>    // 开启本地搜索（左上角）</span></span>
<span class="line"><span>    search: {</span></span>
<span class="line"><span>      provider: &#39;local&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 右上角Github链接</span></span>
<span class="line"><span>    socialLinks: [</span></span>
<span class="line"><span>      { icon: &#39;github&#39;, link: &#39;https://github.com/mqzpmwxo&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 页脚</span></span>
<span class="line"><span>    footer: {</span></span>
<span class="line"><span>      copyright: &#39;Copyright © 2024-present Soap&#39;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><hr><h2 id="部署至vercel" tabindex="-1">部署至vercel <a class="header-anchor" href="#部署至vercel" aria-label="Permalink to &quot;部署至vercel&quot;">​</a></h2><h3 id="push到github" tabindex="-1">push到github <a class="header-anchor" href="#push到github" aria-label="Permalink to &quot;push到github&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm build docs:dev</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;init commit&quot;</span></span>
<span class="line"><span>git push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="注册vercel-略" tabindex="-1">注册vercel，略 <a class="header-anchor" href="#注册vercel-略" aria-label="Permalink to &quot;注册vercel，略&quot;">​</a></h3><h3 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h3><img src="`+l+'"><h3 id="选择自己的项目-import" tabindex="-1">选择自己的项目，import <a class="header-anchor" href="#选择自己的项目-import" aria-label="Permalink to &quot;选择自己的项目，import&quot;">​</a></h3><img src="'+i+'"><ul><li>根据自己的需求填写</li><li>注意:此处需要写.vitepress/dist <img src="'+r+`"></li></ul><h3 id="域名-提前准备" tabindex="-1">域名，提前准备 <a class="header-anchor" href="#域名-提前准备" aria-label="Permalink to &quot;域名，提前准备&quot;">​</a></h3><ul><li>进入创建好的项目，settings -- domains --edit</li><li>完成，访问</li></ul><hr><h2 id="其他设置" tabindex="-1">其他设置 <a class="header-anchor" href="#其他设置" aria-label="Permalink to &quot;其他设置&quot;">​</a></h2><h3 id="引入gitalk" tabindex="-1">引入gitalk <a class="header-anchor" href="#引入gitalk" aria-label="Permalink to &quot;引入gitalk&quot;">​</a></h3><h4 id="注册应用" tabindex="-1">注册应用 <a class="header-anchor" href="#注册应用" aria-label="Permalink to &quot;注册应用&quot;">​</a></h4><ul><li><code>Github</code></li><li>进入个人设置<code>Settings</code></li><li>最下方<code>Developer settings</code></li><li><code>OAuth Apps</code></li><li><code>New OAuth App</code></li><li>此刻获取到<code>clientID</code>和<code>clientSecret</code></li></ul><h4 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install md5 gitalk</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="编辑配置" tabindex="-1">编辑配置 <a class="header-anchor" href="#编辑配置" aria-label="Permalink to &quot;编辑配置&quot;">​</a></h4><ul><li>新建目录 <code>.vitepress/components</code></li><li>编辑<code>.vitepress/components/gitalk.vue</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;gitalk-container&quot;&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;gitalk-container&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import md5 from &quot;md5&quot;</span></span>
<span class="line"><span>import Gitalk from &quot;gitalk&quot;</span></span>
<span class="line"><span>import &quot;gitalk/dist/gitalk.css&quot;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;gitalk&quot;,</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {}</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    const commentConfig = {</span></span>
<span class="line"><span>      clientID: &quot;clientID&quot;,</span></span>
<span class="line"><span>      clientSecret: &quot;clientSecret&quot;,</span></span>
<span class="line"><span>      repo: &quot;reponame&quot;,</span></span>
<span class="line"><span>      owner: &quot;  &quot;,</span></span>
<span class="line"><span>      admin: [&quot;  &quot;],</span></span>
<span class="line"><span>      id: md5(location.pathname),</span></span>
<span class="line"><span>      distractionFreeMode: false,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const gitalk = new Gitalk(commentConfig)</span></span>
<span class="line"><span>    gitalk.render(&quot;gitalk-container&quot;)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.gt-container .gt-header-textarea {</span></span>
<span class="line"><span>  color: #000;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li>编辑 <code>.vitepress/theme/index.ts</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import comment from &quot;../components/gitalk.vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  ...DefaultTheme,</span></span>
<span class="line"><span>  enhanceApp(ctx) {</span></span>
<span class="line"><span>    DefaultTheme.enhanceApp(ctx)</span></span>
<span class="line"><span>    //新增内容</span></span>
<span class="line"><span>    ctx.app.component(&quot;gitalk&quot;, comment)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>···</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="gitalk使用" tabindex="-1">gitalk使用 <a class="header-anchor" href="#gitalk使用" aria-label="Permalink to &quot;gitalk使用&quot;">​</a></h4><p>在需要的Markdown里使用<code>&lt;gitalk/&gt;</code>开启评论</p><h3 id="接入百度统计" tabindex="-1">接入百度统计 <a class="header-anchor" href="#接入百度统计" aria-label="Permalink to &quot;接入百度统计&quot;">​</a></h3><ul><li>官网申请，获取接入代码</li><li>编辑<code>./docs/.vitepress/config.mts</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// head设置</span></span>
<span class="line"><span>  head: [</span></span>
<span class="line"><span>    // 添加百度统计代码</span></span>
<span class="line"><span>    [&#39;script&#39;, {},</span></span>
<span class="line"><span>    \`</span></span>
<span class="line"><span>      var _hmt = _hmt || [];</span></span>
<span class="line"><span>      (function() {</span></span>
<span class="line"><span>        var hm = document.createElement(&quot;script&quot;);</span></span>
<span class="line"><span>        hm.src = &quot;https://hm.baidu.com/hm.js?自己申请&quot;;</span></span>
<span class="line"><span>        var s = document.getElementsByTagName(&quot;script&quot;)[0]; </span></span>
<span class="line"><span>        s.parentNode.insertBefore(hm, s);</span></span>
<span class="line"><span>      })();</span></span>
<span class="line"><span>    \`</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="接入vercel-speed-insights" tabindex="-1">接入vercel Speed Insights <a class="header-anchor" href="#接入vercel-speed-insights" aria-label="Permalink to &quot;接入vercel Speed Insights&quot;">​</a></h3><ul><li>点击Speed Insights获取接入代码 <img src="`+c+`"></li></ul><h4 id="安装speed-insights" tabindex="-1">安装speed-insights <a class="header-anchor" href="#安装speed-insights" aria-label="Permalink to &quot;安装speed-insights&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install @vercel/speed-insights</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>编辑 <code>.vitepress/theme/index.ts</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { injectSpeedInsights } from &#39;@vercel/speed-insights&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  ...DefaultTheme,</span></span>
<span class="line"><span>  enhanceApp(ctx) {</span></span>
<span class="line"><span>    DefaultTheme.enhanceApp(ctx)</span></span>
<span class="line"><span>    ctx.app.component(&quot;gitalk&quot;, comment)</span></span>
<span class="line"><span>    //添加如下内容</span></span>
<span class="line"><span>    injectSpeedInsights();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="效果如下" tabindex="-1">效果如下 <a class="header-anchor" href="#效果如下" aria-label="Permalink to &quot;效果如下&quot;">​</a></h4><img src="`+t+'">',85),u=[o];function d(m,h,g,v,k,q){return a(),n("div",null,u)}const C=s(b,[["render",d]]);export{f as __pageData,C as default};
