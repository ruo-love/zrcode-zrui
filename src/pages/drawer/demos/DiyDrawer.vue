<template>
  <div>
    <zr-drawer v-model:visible="left_visible" title="自定义标题" :mask_close="false">
      <template #default>
        <em>自定义内容</em>
      </template>
      <template #title>
        <h2>自定标题</h2>
      </template>
      <template #close>
        <zr-icon name="close" color="#ccc"></zr-icon>
      </template>
    </zr-drawer>
    <div>
      <zr-button @click="left_visible = !left_visible">left</zr-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from '@vue/reactivity'
const left_visible = ref(false)
const close = () => {}
</script>
