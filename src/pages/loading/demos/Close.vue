<template>
  <div>
    <zr-button @click="open">服务</zr-button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { showZrLoading } from "@zrcode/zrui/zrui"
const visiable = ref(false)
const open = () => {
  const close = showZrLoading({
    title: "Loading测试数据",
    duration: 2000,
    show: true
  })

  setTimeout(() => {
    close()
  }, 5000)
}
const code = `
<div>
    <zr-button @click="open">服务</zr-button>
</div>

import { ref } from "@vue/reactivity"
import { showZrLoading } from '@zrcode/zrui/zrui'
const visiable = ref(false)
const open = () => {
    const close = showZrLoading({
        title: 'Loading测试数据',
        duration: 2000,
        show: true
    })

    setTimeout(() => {
        close()
    }, 5000)
}
`
</script>
