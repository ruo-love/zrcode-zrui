<template>
    <div>
        <div>
            <zr-Button size="mini" class=" demo-item" types="primary" />
            <zr-Button size="small" class=" demo-item" types="primary" />
            <zr-Button size="medium" class=" demo-item" types="primary" />
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div>
    <zr-Button size="mini" class=" demo-item" types="primary" />
    <zr-Button size="small" class=" demo-item" types="primary" />
    <zr-Button size="medium" class=" demo-item" types="primary" />
</div>
`
</script>

