<template>
    <div class="warp">
        <zr-alert center type="success"></zr-alert>
        <zr-alert center type="info"></zr-alert>
        <zr-alert center type="warning"></zr-alert>
        <zr-alert center type="error"></zr-alert>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
    <div>
        <zr-alert center type="success"></zr-alert>
        <zr-alert center type="info"></zr-alert>
        <zr-alert center type="warning"></zr-alert>
        <zr-alert center type="error"></zr-alert>
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