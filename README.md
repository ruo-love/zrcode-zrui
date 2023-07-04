# Vue 3 + Typescript + Vite

该项目是完全由 Vue 3 + Typescript + Vite 构建 为开发者提供了 27 个高效的自定义常用组件

文档地址: http://175.178.39.125:10003

Npm: https://www.npmjs.com/package/@zrcode/zrui

### 使用须知

该项目是本人大三在校独立开发项目，仅供学习；
如有建议请联系：1103661612@qq.com

## 使用

### npm、yarn 安装

推荐使用 yarn 的方式安装，它能更好地和 webpack 打包工具配合使用。yarn add @zrcode/zrui

npm i @zrcode/zrui

yarn add @zrcode/zrui

### 完整引入

在 main.js 中写入以下内容：

import ZRUI from '@zrcode/zrui'

import '@zrcode/zrui/dist/style.css'

app.use(ZRUI)

### 按需引入

在 main.js 中写入以下内容：

import {zrButton} from '@zrcode/zrui'

import '@zrcode/zrui/dist/style.css'

app.use(zrButton)
