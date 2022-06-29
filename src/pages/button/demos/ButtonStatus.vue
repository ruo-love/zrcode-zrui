<template>
    <div>
        <div class="demo-row">
            <zr-Button types="primary" class=" demo-item" />
            <zr-Button types="success" class=" demo-item" />
            <zr-Button types="info" class=" demo-item" />
            <zr-Button types="error" class=" demo-item" />
            <zr-Button types="warning" class=" demo-item" />
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
    <zr-Button types="primary" class=" demo-item" />
    <zr-Button types="success" class=" demo-item" />
    <zr-Button types="info" class=" demo-item" />
    <zr-Button types="error" class=" demo-item" />
    <zr-Button types="warning" class=" demo-item" />
</div>
`
</script>

