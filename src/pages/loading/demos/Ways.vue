<template>
    <div>
        <div v-if="visiable" v-loading="{
            title: 'Loading测试数据',
            duration: 4000,
        }"></div>
        <zr-button @click="visiable = !visiable">指令</zr-button>
        <zr-button @click="open">服务</zr-button>
    </div>
    <showCode :code="code"></showCode>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { showZrLoading } from '@zhaoqiancheng/zrui'
const visiable = ref(false)
const open = () => {
    showZrLoading({
        title: 'Loading测试数据',
        duration: 4000
    })
}
const code = `
<div>
    <div v-if="visiable" v-loading="{
        title: 'Loading测试数据',
        duration: 4000,
       }"
    >
    </div>
    <zr-button @click="visiable = !visiable">指令</zr-button>
    <zr-button @click="open">服务</zr-button>
</div>

import { ref } from "@vue/reactivity"
import { showZrLoading } from '@zhaoqiancheng/zrui'
const visiable = ref(false)
const open = () => {
    showZrLoading({
        title: 'Loading测试数据',
        duration: 2000
    })
}

`
</script>