<template>
  <div>
    <zr-Button @click="success" types="info" plain>打开消息</zr-Button>
    <zr-Button @click="info" types="info" plain>打开Vnode</zr-Button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script lang="ts" setup>
import { zrMessage } from "@zrcode/zrui/zrui"

const success = () => {
  zrMessage({ type: "info", message: "提示消息", duration: 1500 })
}
const info = () => {
  zrMessage({ type: "info", dangerouslyUseHTMLString: true, message: "<em>登录成功</em>" })
}

const code = `
<div>
    <zr-Button @click="success" types="info" plain>打开消息</zr-Button>
    <zr-Button @click="info" types="info" plain>打开Vnode</zr-Button>
</div>

import { zrMessage } from '@zrcode/zrui/zrui'


const success = () => {
    zrMessage({ type: "info", message: "提示消息",duration:1500 })
}
const info = () => {
    zrMessage({ type: "info", dangerouslyUseHTMLString: true, message: "<em>登录成功</em>" })
}
`
</script>

<style scoped>
.zr-button {
  margin: 5px;
}
</style>
