<template>
    <div>
        <zr-switch v-model="value"></zr-switch>
        <showCode :code="code"></showCode>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const value = ref<boolean>(false)
const code = `
  <zr-switch v-model="value"></zr-switch>

  const value = ref<boolean>(false)
`
</script>