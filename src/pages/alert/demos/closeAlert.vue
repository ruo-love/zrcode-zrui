<template>
    <div lass="warp">
        <zr-alert type="success">好的</zr-alert>
        <zr-alert type="info">知道了</zr-alert>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
    <div>
       <zr-alert type="success">好的</zr-alert>
       <zr-alert type="info">知道了</zr-alert>
    </div>
`
</script>
<style scoped>
.warp {
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-around;
}
</style>