<template>
    <div class="demo-container">
        <zr-result @callback="callback"></zr-result>
        <zr-result type="warning"></zr-result>
        <zr-result type="error"></zr-result>
        <zr-result type="info"></zr-result>
    </div>
    <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const callback = () => {
}
const code = `
<div class="demo-container">
    <zr-result @callback="callback"></zr-result>
    <zr-result type="warning"></zr-result>
    <zr-result type="error"></zr-result>
    <zr-result type="info"></zr-result>
</div>
   

const callback = () => {
}
`
</script>
<style scoped>
.demo-container {

    display: flex;
    justify-content: space-around;
}
</style>