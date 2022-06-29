<template>
    <div class="warp">
        <zr-alert title="提示文本" type="success"></zr-alert>
        <zr-alert type="info"></zr-alert>
        <zr-alert type="warning"></zr-alert>
        <zr-alert type="error"></zr-alert>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
    <div>
        <zr-alert title="提示文本" type="success"></zr-alert>
        <zr-alert type="info"></zr-alert>
        <zr-alert type="warning"></zr-alert>
        <zr-alert type="error"></zr-alert>
    </div>
`
</script>

<style scoped>
.warp {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-around;
}
</style>