<template>
    <form>
        <zr-Radio-Group v-model="gender.value" name="gender" :radioList="gender.radioList" />
        <zr-Radio-Group v-model="password.value" name="password" :radioList="password.radioList" />
        <zr-Radio-Group v-model="status.value" name="status" :radioList="status.radioList" />
    </form>
    <showCode :code="code" />

</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const gender = reactive({
    value: 1,
    radioList: [{ label: '男', value: 1 }, { label: '女', value: 0 }]
})
const password = reactive({
    value: 'B',
    radioList: [{ label: 'A', value: ' A' }, { label: 'B', value: 'B' }],
})
const status = reactive({
    value: true,
    radioList: [{ label: '成功', value: true }, { label: '失败', value: false }]
})
watch(() => gender.value, (n, o) => {
    console.log(n, o)
})

const code = `
 <form>
    <zr-Radio-Group v-model="gender.value" name="gender" :radioList="gender.radioList" />
    <zr-Radio-Group v-model="password.value" name="password" :radioList="password.radioList" />
    <zr-Radio-Group v-model="status.value" name="status" :radioList="status.radioList" />
 </form>
`
</script>



