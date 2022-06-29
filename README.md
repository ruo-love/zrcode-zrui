# Vue 3 + Typescript + Vite

该项目是完全由Vue 3 + Typescript + Vite 构建 为开发者提供了27个高效的自定义常用组件

文档地址: http://114.132.197.72:10003

Npm: https://www.npmjs.com/package/@zhaoqiancheng/zrui

### 使用须知
该项目是本人大三在校独立开发项目，仅供学习；
如有建议请联系：1103661612@qq.com

## 使用

### npm、yarn 安装
推荐使用 yarn 的方式安装，它能更好地和 webpack 打包工具配合使用。yarn add @zhaoqiancheng/zrui

npm i @zhaoqiancheng/zrui -S

yarn add @zhaoqiancheng/zrui

### 完整引入
在 main.js 中写入以下内容：

import ZRUI from '@zhaoqiancheng/zrui'

import '@zhaoqiancheng/zrui/dist/style.css'

app.use(ZRUI)

### 按需引入
在 main.js 中写入以下内容：

import {zrButton} from '@zhaoqiancheng/zrui'

import '@zhaoqiancheng/zrui/dist/style.css'

app.use(zrButton)

