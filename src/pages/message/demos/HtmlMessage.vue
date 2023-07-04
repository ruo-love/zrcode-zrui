<template>
  <div>
    <zr-Button @click="info" types="info" plain>打开Html消息</zr-Button>
  </div>
  <showCode :code="code"></showCode>
</template>

<script lang="ts" setup>
import { zrMessage } from "@zrcode/zrui/zrui"

const info = () => {
  zrMessage({ type: "info", dangerouslyUseHTMLString: true, message: "<em>打开Html消息</em>" })
}

const code = `
<div>
 <zr-Button @click="info" types="info" plain>打开Html消息</zr-Button>
</div>

import { zrMessage } from '@zrcode/zrui/zrui'


const info = () => {
    zrMessage({ type: "info", dangerouslyUseHTMLString: true, message: "<em>打开Html消息</em>" })
}

`
</script>

<style scoped>
.zr-button {
  margin: 5px;
}
</style>
