<template>
    <div>
        <zr-button @click="autoClose">可自动关闭</zr-button>
        <zr-button @click="handleClose">手动关闭</zr-button>
    </div>
    <showCode :code="code"></showCode>
</template>

<script setup>
import { Notify } from '@zhaoqiancheng/zrui'
const autoClose = () => {
    Notify({
        type: 'success',
        content: '这是一段测试内容',
        duration: 2000
    })
}

const handleClose = () => {
    Notify({
        type: 'success',
        content: '这是一段测试内容',
        duration: 0
    })
}


const code=`
<div>
    <zr-button @click="autoClose">可自动关闭</zr-button>
    <zr-button @click="handleClose">手动关闭</zr-button>
</div>

import { Notify } from '@zhaoqiancheng/zrui'
const autoClose = () => {
    Notify({
        type: 'success',
        content: '这是一段测试内容',
        duration: 2000
    })
}

const handleClose = () => {
    Notify({
        type: 'success',
        content: '这是一段测试内容',
        duration: 0
    })
}


`


</script>
<style scoped>
.zr-button {
    margin-right: 10px;
}
</style>