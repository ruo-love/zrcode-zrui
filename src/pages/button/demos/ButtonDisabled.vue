<template>
    <div>
        <div class="demo-row">
            <zr-Button :disabled="true" class=" demo-item" types="primary" />
            <zr-Button :disabled="true" class=" demo-item" types="success" />
            <zr-Button :disabled="true" class=" demo-item" types="info" />
            <zr-Button :disabled="true" class=" demo-item" types="error" />
            <zr-Button :disabled="true" class=" demo-item" types="warning" />

        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
    <zr-Button :disabled="true" class=" demo-item" types="primary" />
    <zr-Button :disabled="true" class=" demo-item" types="success" />
    <zr-Button :disabled="true" class=" demo-item" types="info" />
    <zr-Button :disabled="true" class=" demo-item" types="error" />
    <zr-Button :disabled="true" class=" demo-item" types="warning" />
</div>
`
</script>
