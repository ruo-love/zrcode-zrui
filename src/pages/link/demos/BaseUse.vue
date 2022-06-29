<template>
    <div>
        <div>
            <zr-Link class="link-item" underline types="primary"></zr-Link>
            <zr-Link class="link-item" underline types="success"></zr-Link>
            <zr-Link class="link-item" underline types="warning"></zr-Link>
            <zr-Link class="link-item" underline types="error"></zr-Link>
            <zr-Link class="link-item" underline types="info"></zr-Link>
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">

const code = `
<div>
   <zr-Link class="link-item" types="primary"></zr-Link>
    <zr-Link class="link-item" types="success"></zr-Link>
    <zr-Link class="link-item" types="warning"></zr-Link>
    <zr-Link class="link-item" types="error"></zr-Link>
    <zr-Link class="link-item" types="info"></zr-Link>
</div>
`
</script>

<style lang="scss" scoped>
.link-item {
    margin: 10px;
}
</style>