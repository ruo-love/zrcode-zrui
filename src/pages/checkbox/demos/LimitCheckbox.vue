<template>
    <div>
        <zr-Checkbox-Group v-model="checkboxOptions.value" name="hobby" :data="checkboxOptions.checkboxList" :min="0"
            :max="2" />
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { watch } from "vue";

const checkboxOptions = reactive({
    value: ['song'],
    checkboxList: [{ value: 'exercise', label: '运动' }, { value: 'song', label: '唱歌' }, { value: 'travel', label: '运动' }]
})
const code = `
<zr-Checkbox-Group v-model="checkboxOptions.value" name="hobby" :data="checkboxOptions.checkboxList" :min="0" :max="2" />

---------------------------------------------↓ js
import { reactive } from "@vue/reactivity";

const checkboxOptions = reactive({
    value: ['song'],
    checkboxList: [{ value: 'exercise', label: '运动' }, { value: 'song', label: '唱歌' }, { value: 'travel', label: '运动' }]
})

`

</script>


