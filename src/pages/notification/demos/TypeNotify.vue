<template>
  <div>
    <zr-button types="success" @click="success">成功</zr-button>
    <zr-button types="error" @click="error">失败</zr-button>
    <zr-button types="info" @click="info">信息</zr-button>
    <zr-button types="warning" @click="warning">警告</zr-button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script setup>
import { Notify } from "@zrcode/zrui/zrui"
const success = () => {
  Notify({
    type: "success",
    content: "这是一段成功的内容"
  })
}
const error = () => {
  Notify({
    type: "error",
    content: "这是一段失败的内容"
  })
}

const info = () => {
  Notify({
    type: "info",
    content: "这是一段信息的内容"
  })
}

const warning = () => {
  Notify({
    type: "warning",
    content: "这是一段警告的内容"
  })
}

const code = `
<div>
    <zr-button types="success" @click="success">成功</zr-button>
    <zr-button types="error" @click="error">失败</zr-button>
    <zr-button types="info" @click="info">信息</zr-button>
    <zr-button types="warning" @click="warning">警告</zr-button>
</div>

import { Notify } from '@zrcode/zrui/zrui'
const success = () => {
    Notify({
        type: 'success',
        content: '这是一段成功的内容'
    })
}
const error = () => {
    Notify({
        type: 'error',
        content: '这是一段失败的内容'
    })
}

const info = () => {
    Notify({
        type: 'info',
        content: '这是一段信息的内容'
    })
}

const warning = () => {
    Notify({
        type: 'warning',
        content: '这是一段警告的内容'
    })
}


`
</script>
<style scoped>
.zr-button {
  margin-right: 10px;
}
</style>
