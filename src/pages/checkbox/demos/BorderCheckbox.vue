<template>
    <div>
        <zr-Checkbox-Group border v-model="checkboxOptions.value" name="hobby" :data="checkboxOptions.checkboxList" />
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
const checkboxOptions = reactive({
    value: ['song'],
    checkboxList: [{ value: 'exercise', label: '运动' }, { value: 'song', label: '唱歌' }, { value: 'travel', label: '运动' }]
})
const code = `
<zr-Checkbox-Group border v-model="checkboxOptions.value" name="hobby" :data="checkboxOptions.checkboxList"/>


---------------------------------------------↓ js
import { reactive } from "@vue/reactivity";

const checkboxOptions = reactive({
    value: ['song'],
    checkboxList: [{ value: 'exercise', label: '运动' }, { value: 'song', label: '唱歌' }, { value: 'travel', label: '运动' }]
})

`

</script>


