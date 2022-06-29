<template>
  <div class="demo-container">
    <zr-empty :type="0"></zr-empty>
    <zr-empty :type="1">
      <zr-button round size="mini">返回</zr-button>
    </zr-empty>
    <zr-empty :type="2">
      <zr-button round size="mini">首页</zr-button>
    </zr-empty>
  </div>
  <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const code = `
  <div class="demo-container">
    <zr-empty :type="0"></zr-empty>
    <zr-empty :type="1">
      <zr-button round size="mini">返回</zr-button>
    </zr-empty>
    <zr-empty :type="2">
      <zr-button round size="mini">首页</zr-button>
    </zr-empty>
  </div>
`
</script>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  justify-content: space-around;
}
</style>
