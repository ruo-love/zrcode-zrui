<template>
    <div>
        <zr-progress status="primary"></zr-progress>
        <zr-progress :percentage="100" status="success"></zr-progress>
        <zr-progress :percentage="70" status="info"></zr-progress>
        <zr-progress :percentage="20" status="error"></zr-progress>
        <zr-progress :percentage="100" status="warning"></zr-progress>
    </div>
    <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const code = `
 <zr-progress status="primary"></zr-progress>
 <zr-progress :percentage="100" status="success"></zr-progress>
 <zr-progress :percentage="70" status="info"></zr-progress>
 <zr-progress :percentage="20" status="error"></zr-progress>
 <zr-progress :percentage="100" status="warning"></zr-progress>
`
</script>