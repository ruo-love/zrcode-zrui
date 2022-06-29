<template>
    <div>
        <zr-tag clear></zr-tag>
        <zr-tag clear type="success"></zr-tag>
        <zr-tag clear type="warning"></zr-tag>
        <zr-tag clear type="error"></zr-tag>
        <zr-tag clear type="info"></zr-tag>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-tag clear></zr-tag>
    <zr-tag clear type="success"></zr-tag>
    <zr-tag clear type="warning"></zr-tag>
    <zr-tag clear type="error"></zr-tag>
    <zr-tag clear type="info"></zr-tag>
</div>
`

</script>