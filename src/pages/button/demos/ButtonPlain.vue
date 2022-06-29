<template>
    <div>
        <div class="demo-row">
            <zr-Button :plain="true" types="primary" class=" demo-item" />
            <zr-Button :plain="true" types="success" class=" demo-item" />
            <zr-Button :plain="true" types="info" class=" demo-item" />
            <zr-Button :plain="true" types="error" class=" demo-item" />
            <zr-Button :plain="true" types="warning" class=" demo-item" />
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
    <zr-Button :plain="true" types="primary" class=" demo-item" />
    <zr-Button :plain="true" types="success" class=" demo-item" />
    <zr-Button :plain="true" types="info" class=" demo-item" />
    <zr-Button :plain="true" types="error" class=" demo-item" />
    <zr-Button :plain="true" types="warning" class=" demo-item" />
</div>
`
</script>