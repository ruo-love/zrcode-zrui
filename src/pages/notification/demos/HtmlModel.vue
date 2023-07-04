<template>
  <div>
    <zr-button @click="Open">Open Html Notify</zr-button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script>
import { Notify } from "@zrcode/zrui/zrui"
export default {
  methods: {
    Open() {
      Notify({
        type: "success",
        html: true,
        duration: 2000,
        content: "<strong>这是<i>HTML</i>片段</strong>"
      })
    }
  }
}
</script>
<script setup>
const code = `
<div>
    <zr-button @click="Open">Open Html Notify</zr-button>
</div>
import { Notify } from '@zrcode/zrui/zrui'
export default {
    methods: {
        Open() {
            Notify({
                type: 'success',
                html: true,
                duration: 2000,
                content: '<strong>这是<i>HTML</i>片段</strong>'

            })
        }
    }
}

`
</script>
<style scoped>
.zr-button {
  margin-right: 10px;
}
</style>
