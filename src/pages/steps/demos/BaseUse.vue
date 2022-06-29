<template>
    <div style="margin-bottom:50px">
        <zr-steps :active="active">
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
            <zr-step></zr-step>
        </zr-steps>
        <zr-button icon="right" @click="add">下一步</zr-button>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup>
import { ref } from "@vue/reactivity";

const active = ref(0)
const add = () => {
    if (active.value >= 5) {
        active.value = 0
        return
    }
    active.value++
}

const code = `
<div>
    <zr-steps :active="active">
        <zr-step></zr-step>
        <zr-step></zr-step>
        <zr-step></zr-step>
        <zr-step></zr-step>
        <zr-step></zr-step>
    </zr-steps>
    <zr-button icon="right" @click="add">下一步</zr-button>
</div>


import { ref } from "@vue/reactivity";

const active = ref(0)
const add = () => {
    if (active.value >= 5) {
        active.value = 0
        return
    }
    active.value++
}
`
</script>

<style>
.zr-steps-container {
    margin-bottom: 20px;
}
</style>