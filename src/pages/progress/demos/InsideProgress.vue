<template>
    <div>
        <zr-progress text_inside status="primary"></zr-progress>
        <zr-progress text_inside :percentage="100" status="success"></zr-progress>
        <zr-progress text_inside :percentage="70" status="info"></zr-progress>
        <zr-progress text_inside :percentage="20" status="error"></zr-progress>
        <zr-progress text_inside :percentage="100" status="warning"></zr-progress>
    </div>
    <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const code = `
 <zr-progress text_inside status="primary"></zr-progress>
 <zr-progress text_inside :percentage="100" status="success"></zr-progress>
 <zr-progress text_inside :percentage="70" status="info"></zr-progress>
 <zr-progress text_inside :percentage="20" status="error"></zr-progress>
 <zr-progress text_inside :percentage="100" status="warning"></zr-progress>
`
</script>