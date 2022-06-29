<template>
    <div>
        <zr-switch v-model="value" inactive_value="套餐1" active_value="套餐2" left_text="套餐1" right_text="套餐2"></zr-switch>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref<string>('套餐1')
const code = `
 <zr-switch v-model="value" inactive_value="套餐1" active_value="套餐2" left_text="套餐1" right_text="套餐2"></zr-switch>

const value = ref<string>('套餐1')
`
</script>