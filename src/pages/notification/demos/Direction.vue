<template>
    <div>
        <zr-button types="info" @click="fun1">右上角</zr-button>
        <zr-button types="info" @click="fun2">右下角</zr-button>
        <zr-button types="info" @click="fun3">左上角</zr-button>
        <zr-button types="info" @click="fun4">左下角</zr-button>
    </div>
    <showCode :code="code"></showCode>
</template>

<script setup>
import { Notify } from '@zhaoqiancheng/zrui'
const fun1 = () => {
    Notify({
        type: 'success',
        content: '这是一段成功的内容',
        direction: 'right-top'
    })
}
const fun2 = () => {
    Notify({
        type: 'error',
        content: '这是一段失败的内容',
        direction: 'right-bottom'
    })
}

const fun3 = () => {
    Notify({
        type: 'info',
        content: '这是一段信息的内容',
        direction: 'left-top',
    })
}

const fun4 = () => {
    Notify({
        type: 'warning',
        content: '这是一段警告的内容',
        direction: 'left-bottom'
    })
}



const code = `
<div>
    <zr-button types="info" @click="fun1">右上角</zr-button>
    <zr-button types="info" @click="fun2">右下角</zr-button>
    <zr-button types="info" @click="fun3">左上角</zr-button>
    <zr-button types="info" @click="fun4">左下角</zr-button>
</div>

import { Notify } from '@zhaoqiancheng/zrui'
const fun1 = () => {
    Notify({
        type: 'success',
        content: '这是一段成功的内容',
        direction: 'right-top'
    })
}
const fun2 = () => {
    Notify({
        type: 'error',
        content: '这是一段失败的内容',
        direction: 'right-bottom'
    })
}

const fun3 = () => {
    Notify({
        type: 'info',
        content: '这是一段信息的内容',
        direction: 'left-top',
    })
}

const fun4 = () => {
    Notify({
        type: 'warning',
        content: '这是一段警告的内容',
        direction:'left-bottom'
    })
}



`


</script>
<style scoped>
.zr-button {
    margin-right: 10px;
}
</style>