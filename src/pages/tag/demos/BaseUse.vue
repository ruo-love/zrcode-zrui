<template>
    <div>
        <zr-tag></zr-tag>
        <zr-tag type="success"></zr-tag>
        <zr-tag type="warning"></zr-tag>
        <zr-tag type="error"></zr-tag>
        <zr-tag type="info"></zr-tag>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-tag></zr-tag>
    <zr-tag type="success"></zr-tag>
    <zr-tag type="warning"></zr-tag>
    <zr-tag type="error"></zr-tag>
    <zr-tag type="info"></zr-tag>
</div>
`

</script>