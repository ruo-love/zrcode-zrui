<template>
    <div>
        <zr-switch v-model="value" left_text="按月付费" right_text="按年付费"></zr-switch>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const value = ref<boolean>(false)

const code = `
  <zr-switch v-model="value" left_text="按月付费" right_text="按年付费"></zr-switch>

  const value = ref<boolean>(false)
`
</script>