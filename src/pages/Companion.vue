<template>
  <div class="companion-container">
    <div class="install">
      <h3>npm、yarn 安装</h3>
      <p>推荐使用 yarn 的方式安装，它能更好地和 webpack 打包工具配合使用。yarn add @zrcode/zrui/zrui</p>
      <div class="code">
        <p>npm i @zrcode/zrui/zrui -S</p>
        <p>yarn add @zrcode/zrui/zrui</p>
      </div>
    </div>
    <div class="use">
      <h3>完整引入</h3>
      <p>在 main.js 中写入以下内容：</p>
      <div class="code">
        <p>import ZRUI from '@zrcode/zrui/zrui'</p>
        <p>import '@zrcode/zrui/zrui/dist/style.css'</p>
        <p>app.use(ZRUI)</p>
      </div>
      <h3>按需引入</h3>
      <p>在 main.js 中写入以下内容：</p>
      <div class="code">
        <p>import {zrButton} from '@zrcode/zrui/zrui'</p>
        <p>import '@zrcode/zrui/zrui/dist/style.css'</p>
        <p>app.use(zrButton)</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.companion-container {
  h3 {
    color: #e55472;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
  .code {
    padding: 10px;
    background-color: #fafafa;
  }
}
</style>
