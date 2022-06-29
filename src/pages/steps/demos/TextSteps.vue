<template>
    <div style="margin-bottom:50px">
        <zr-steps :active="active">
            <zr-step title="自定义标题1" description="自定义描述性文本1"></zr-step>
            <zr-step title="自定义标题2" description="自定义描述性文本2"></zr-step>
            <zr-step title="自定义标题3" description="自定义描述性文本3"></zr-step>
            <zr-step title="自定义标题4" description="自定义描述性文本4"></zr-step>
            <zr-step title="自定义标题5" description="自定义描述性文本5"></zr-step>
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
        <zr-step title="自定义标题1" description="自定义描述性文本1"></zr-step>
        <zr-step title="自定义标题2" description="自定义描述性文本2"></zr-step>
        <zr-step title="自定义标题3" description="自定义描述性文本3"></zr-step>
        <zr-step title="自定义标题4" description="自定义描述性文本4"></zr-step>
        <zr-step title="自定义标题5" description="自定义描述性文本5"></zr-step>
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