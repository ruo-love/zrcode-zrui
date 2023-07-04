<template>
  <div>
    <zr-button @click="openFun">toConfirm</zr-button>
  </div>
</template>

<script setup>
import { zrMessage, toConfirm } from "@zrcode/zrui/zrui"
const openFun = () => {
  toConfirm({
    title: "支持HTML片段",
    html: true,
    content: `
        <em>这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</em>
        `,
    confirmButtonText: "确认",
    cancelButtonText: "失败",
    confirm: () => {
      zrMessage({ type: "success", message: "点击了确认", duration: 1000 })
    },
    cancel: () => {
      zrMessage({ type: "warning", message: "点击了取消", duration: 1000 })
    }
  })
}

const code = `
<div>
    <zr-button @click="openFun">toConfirm</zr-button>
</div>
import { zrMessage,toConfirm } from '@zrcode/zrui/zrui'
const openFun = () => {
    toConfirm(
    {
        title: '支持HTML片段',
        html: true,
        content: \`
    < em > 这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</em>
        \`,
        confirmButtonText: '确认',
        cancelButtonText: '失败',
        confirm: () => {
            zrMessage({ type: "success", message: "点击了确认", duration: 1000 },)
        },
        cancel: () => {
            zrMessage({ type: "warning", message: "点击了取消", duration: 1000 },)
        },
    }
)

}

`
</script>
<style scoped>
.zr-button {
  margin-right: 10px;
}
</style>
