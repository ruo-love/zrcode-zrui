<template>
    <div class="warp">
        <zr-progress size="150" :percentage="10" circle status="primary"></zr-progress>
        <zr-progress size="150" :percentage="30" circle status="success"></zr-progress>
        <zr-progress size="150" :percentage="60" circle status="error"></zr-progress>
        <zr-progress size="150" :percentage="90" circle status="warning"></zr-progress>
        <zr-progress size="150" :percentage="100" circle status="info"></zr-progress>
    </div>
</template>
<script lang="ts" setup>
const code = `
<zr-progress size="150" :percentage="10" circle status="primary"></zr-progress>
<zr-progress size="150" :percentage="30" circle status="success"></zr-progress>
<zr-progress size="150" :percentage="60" circle status="error"></zr-progress>
<zr-progress size="150" :percentage="90" circle status="warning"></zr-progress>
<zr-progress size="150" :percentage="100" circle status="info"></zr-progress>
`
</script>
<style>
.warp {
    display: flex;
    justify-content: space-around;
}
</style>