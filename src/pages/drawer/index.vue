<template>
  <div>
    <zr-drawer v-model:visible="visible" direction="right" @close="closeCallback"></zr-drawer>
    <zr-button @click="visible = !visible">SWITCH DRAWER</zr-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from '@vue/reactivity'
const visible = ref(false)

const closeCallback = () => {
  console.log('11')
}
</script>
