<template>
    <div>
        <zr-button @click="openFun">toPrompt</zr-button>
    </div>
</template>


<script setup>
import { zrMessage,toPrompt } from '@zhaoqiancheng/zrui'
const openFun = () => {
    toPrompt(
        {
            title: '提示',
            confirmButtonText: '确认',
            cancelButtonText: '失败',
            confirm: (value) => {
                zrMessage({ type: "success", message: value, duration: 1000 },)
            },
            cancel: (value) => {
                zrMessage({ type: "warning", message: value, duration: 1000 },)
            },
        }
    )

}

const code = `
<div>
    <zr-button @click="openFun">toPrompt</zr-button>
</div>
import { zrMessage,toPrompt } from '@zhaoqiancheng/zrui'
const openFun = () => {
    toPrompt(
        {
            title: '提示',
            confirmButtonText: '确认',
            cancelButtonText: '失败',
            confirm: (value) => {
                zrMessage({ type: "success", message: value, duration: 1000 },)
            },
            cancel: (value) => {
                zrMessage({ type: "warning", message: value, duration: 1000 },)
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