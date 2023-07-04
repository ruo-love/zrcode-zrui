<template>
  <div>
    <zr-Button @click="success" types="success" />
    <zr-Button @click="info" types="info" />
    <zr-Button @click="error" types="error" />
    <zr-Button @click="warning" types="warning" />
  </div>
  <showCode :code="code"></showCode>
</template>

<script lang="ts" setup>
import { zrMessage } from "@zrcode/zrui/zrui"

const success = () => {
  zrMessage({ type: "success", message: "登录成功" })
}
const info = () => {
  zrMessage({ type: "info", message: "消息通知" })
}
const error = () => {
  zrMessage({ type: "error", message: "登录失败" })
}
const warning = () => {
  zrMessage({ type: "warning", message: "网络异常" })
}

const code = `
<div>
    <zr-Button @click="success" types="success" />
    <zr-Button @click="info" types="info" />
    <zr-Button @click="error" types="error" />
    <zr-Button @click="warning" types="warning" />
</div>

import { zrMessage } from '@zrcode/zrui/zrui'

const success = () => {
    zrMessage({ type: "success", message: "登录成功" })
}
const info = () => {
    zrMessage({ type: "info", message: "消息通知" })
}
const error = () => {
    zrMessage({ type: "error", message: "登录失败" })
}
const warning = () => {
    zrMessage({ type: "warning", message: "网络异常" })
}
`
</script>

<style scoped>
.zr-button {
  margin: 5px;
}
</style>
