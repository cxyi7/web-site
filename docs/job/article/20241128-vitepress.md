---
outline: deep
title: vitepress的使用和部署
titleTemplate: cxyi7的个人网站站点
---

# vitepress的使用和部署

这里简单介绍下如何使用vitepress创建项目，并且部署到githubPage上。创建项目应该是比较简单的，但是部署到githubPage上貌似直接按照文档来不太行，至少对于我来说行不通。所以，如果已经创建好了项目，但是没法按照文档来部署的，可以直接跳过创建项目这节，直接看部署章节，我会直接贴出代码，拷贝后简单改改即可使用。

## 创建vitepress项目

我这里是使用`npm`安装的

### 前置要求
* Node.js 18 及以上版本。（对应vitepress 1.5版本）
* 使用vscode编辑器。（**不要使用gitbash进行安装，会报错**）

### 安装

* 新建一个文件夹
* 依次执行以下命令
```sh
$ git init

$ npm init -y

$ npm add -D vitepress

$ npx vitepress init
```
执行完最后一个命令后会出现问题，如无特殊需要，直接使用默认即可。
```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```
到这里项目就创建好了，非常简单。

### 关于配置
如果你想设置的和vitepess官网一样，那么就直接去github上，将他们的配置直接抄下来改改就行，这是最简单好用的方法了，这是[中文地址](https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/zh.ts)。我当时就没想到这个办法，还傻啦吧唧的去谷歌问为啥配置了不生效！！！


项目创建好了，配置也有了。接下来就是怎么将写好的项目部署到githubPage上了，毕竟这是免费的，不用白不用。

## 部署vitepress
这是官网的[部署方法](https://vitepress.dev/zh/guide/deploy)，写的非常明白了。但是，但是我就是用不了，奇了怪了。我看别人文章里都能直接拿来就用，到我这里就挂了。

没得办法，只能另辟蹊径了。好歹我学了一点点简单的脚本，直接自己动手写。

在根目录下创建一个`deploy.sh`文件，目录结构如下所示
```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
├─ package.json
├─ deploy.sh
```

在`deploy.sh`文件**直接复制以下内容，改两个地方，一个是你的github名字，另一个是远程仓库的名字**
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 在github上创建xxx的项目， 这里的xxx就是指github上创建的项目名称
git push -f git@github.com:你的github名字/xxx.git master:gh-pages

cd -
```

复制好之后，在`package.json`中新增一条命令

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs",
  "deploy": "sh deploy.sh" // [!code ++]
},
```

当关联好远程仓库后，需要**先将项目上传到github上**，然后**才能执行下面这个命令进行部署**
```sh
$ npm run deploy
```
::: danger 注意
运行这个命令前，需要将本地项目关闭，不然会一直提示 **EPERM: operation not permitted, scandir 'xx\docs\.vitepress\.temp\assets'**
:::

也就是说，我这个方法，需要多执行一次命令。也还能接受吧，反正能部署起来了~


最后，还得去github上进行设置一下，即*Settings>>Pages>>Build and deployment* 下 将branch选择为 `gh-pages`就好了


## 完美
遇到问题，还得靠自己~~

感谢那个啥都会一点的自己



