<template>
  <div>
    <div
      v-if="visiable"
      v-loading="{
        title: 'Loading测试数据',
        duration: 3500,
        color: '#292d3e',
        backgroundColor: 'rgba(2, 136, 209,0.7)'
      }"
    ></div>
    <zr-button @click="visiable = !visiable">指令</zr-button>
    <zr-button @click="open">服务</zr-button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { showZrLoading } from "@zrcode/zrui/zrui"
const visiable = ref(false)
const open = () => {
  showZrLoading({
    title: "Loading测试数据",
    duration: 3500,
    color: "#da4e41",
    backgroundColor: "rgba(255, 207, 62,0.7)",
    icon: "xiangxia"
  })
}
const code = `
<div v-if="visiable" v-loading="{
            title: 'Loading测试数据',
            duration: 3500,
            color: '#292d3e',
            backgroundColor: 'rgba(2, 136, 209,0.7)'
        }">
</div>
<zr-button @click="visiable = !visiable">指令</zr-button>
<zr-button @click="open">服务</zr-button>
        
import { ref } from "@vue/reactivity"
import { showZrLoading } from '@zrcode/zrui/zrui'
const visiable = ref(false)
const open = () => {
    showZrLoading({
        title: 'Loading测试数据',
        duration: 3500,
        color: '#da4e41',
        backgroundColor: 'rgba(255, 207, 62,0.7)',
        icon:'xiangxia'
    })
}

`
</script>
