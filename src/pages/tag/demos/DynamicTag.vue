<template>
    <div>
        <zr-tag clear v-for="tag in tags" :key="tag" @clear="HandleClear(tag)">{{ tag }}</zr-tag>
        <zr-button v-show="!visiable" @click="visiable = !visiable">+ New Tag</zr-button>
        <zr-input v-show="visiable" v-model="value" @blur="add"></zr-input>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity"
const tags = ref<Array<string>>(['标签一', '标签二', '标签三'])
const value = ref()
const visiable = ref(false)

const HandleClear = (tag: string) => {
    tags.value.splice(tags.value.indexOf(tag), 1)
}
const add = () => {
    visiable.value = false
    tags.value.push(value.value.trim())
}
const code = `
<div>
    <zr-tag clear v-for="tag in tags" :key="tag" @clear="HandleClear(tag)">{{ tag }}</zr-tag>
    <zr-button v-show="!visiable" @click="visiable = !visiable">+ New Tag</zr-button>
    <zr-input v-show="visiable" v-model="value" @blur="add"></zr-input>
</div>

const tags = ref<Array<string>>(['标签一', '标签二', '标签三'])
const value = ref()
const visiable = ref(false)

const HandleClear = (tag: string) => {
    tags.value.splice(tags.value.indexOf(tag), 1)
}
const add = () => {
    visiable.value = false
    tags.value.push(value.value.trim())
}
`

</script>
<style>
.zr-button,
.zr-input-box {
    vertical-align: middle;
}
</style>