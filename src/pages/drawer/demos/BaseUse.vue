<template>
  <div>
    <zr-drawer v-model:visible="left_visible" direction="left" @close="close"></zr-drawer>
    <zr-drawer v-model:visible="right_visible" direction="right"></zr-drawer>
    <zr-drawer v-model:visible="top_visible" direction="top"></zr-drawer>
    <zr-drawer v-model:visible="bottom_visible" direction="bottom"></zr-drawer>
    <div>
      <zr-button @click="left_visible = !left_visible">left</zr-button>
      <zr-button @click="right_visible = !right_visible">right</zr-button>
      <zr-button @click="top_visible = !top_visible">top</zr-button>
      <zr-button @click="bottom_visible = !bottom_visible">bottom</zr-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from '@vue/reactivity'
const left_visible = ref(false)
const right_visible = ref(false)
const top_visible = ref(false)
const bottom_visible = ref(false)
const close = () => {}
</script>
