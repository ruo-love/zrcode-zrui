<template>
    <div>
        <zr-tag theme="dark"></zr-tag>
        <zr-tag theme="dark" type="success"></zr-tag>
        <zr-tag theme="dark" type="warning"></zr-tag>
        <zr-tag theme="dark" type="error"></zr-tag>
        <zr-tag theme="dark" type="info"></zr-tag>
    </div>
    <showCode :code="code"></showCode>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-tag theme="dark"></zr-tag>
    <zr-tag theme="dark" type="success"></zr-tag>
    <zr-tag theme="dark" type="warning"></zr-tag>
    <zr-tag theme="dark" type="error"></zr-tag>
    <zr-tag theme="dark" type="info"></zr-tag>
</div>
`

</script>