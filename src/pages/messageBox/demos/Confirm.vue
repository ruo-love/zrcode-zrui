<template>
    <div>
        <zr-button @click="openFun">toConfirm</zr-button>
    </div>
</template>


<script setup>
import { zrMessage, toConfirm } from '@zhaoqiancheng/zrui'
const openFun = () => {
    toConfirm(
        {
            title: '我是自定义title',
            content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
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

const code = `
<div>
    <zr-button @click="openFun">toConfirm</zr-button>
</div>
import { zrMessage,toConfirm } from '@zhaoqiancheng/zrui'
const openFun = () => {
    toConfirm(
        {
            title: '我是自定义title',
            content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
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