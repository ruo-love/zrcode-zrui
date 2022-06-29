<template>
    <div>
        <div class="demo-row">
            <zr-Button :round="true" class=" demo-item" types="primary" />
            <zr-Button :round="true" class=" demo-item" types="success" />
            <zr-Button :round="true" class=" demo-item" types="info" />
            <zr-Button :round="true" class=" demo-item" types="error" />
            <zr-Button :round="true" class=" demo-item" types="warning" />
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div class="demo-row">
    <zr-Button :round="true" class=" demo-item" types="primary"/>
    <zr-Button :round="true" class=" demo-item" types="success"/>
    <zr-Button :round="true" class=" demo-item" types="info"/>
    <zr-Button :round="true" class=" demo-item" types="error"/>
    <zr-Button :round="true" class=" demo-item" types="warning"/>
</div>
`
</script>