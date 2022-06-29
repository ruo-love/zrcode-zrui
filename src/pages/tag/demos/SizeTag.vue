<template>
    <div>
        <zr-tag size="mini">mini</zr-tag>
        <zr-tag size="small">small</zr-tag>
        <zr-tag size="medium">medium</zr-tag>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-tag size="mini">mini</zr-tag>
    <zr-tag size="small">small</zr-tag>
    <zr-tag size="medium">medium</zr-tag>
</div>
`

</script>