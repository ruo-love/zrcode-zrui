<template>
    <div>
        <zrSelect v-model="value" :options="options"></zrSelect>
        <showCode :code="code"></showCode>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref()
const options = ref([{
    value: '选项1',
    label: '黄金糕'
}, {
    value: '选项2',
    label: '双皮奶',
}, {
    value: '选项3',
    label: '蚵仔煎'
}, {
    value: '选项4',
    label: '龙须面'
}, {
    value: '选项5',
    label: '北京烤鸭'
}])
const code = `
<zrSelect v-model="value" :options="options"></zrSelect>

const options = ref([{
    value: '选项1',
    label: '黄金糕'
}, {
    value: '选项2',
    label: '双皮奶',
}, {
    value: '选项3',
    label: '蚵仔煎'
}, {
    value: '选项4',
    label: '龙须面'
}, {
    value: '选项5',
    label: '北京烤鸭'
}])

`
</script>