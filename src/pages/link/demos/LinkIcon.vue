<template>
    <div>
        <div style="margin-top: 10px;">
            <zr-Link class="link-item" icon_left="edit" underline types="primary"></zr-Link>
            <zr-Link class="link-item" icon_right="delete" icon_right_color="#f7b731" underline types="warning"></zr-Link>
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-Link class="link-item" icon_left="edit" underline types="primary"></zr-Link>
    <zr-Link class="link-item" icon_right="delete"  icon_right_color="#f7b731" underline types="success"></zr-Link>
</div>
`
</script>

<style lang="scss" scoped>
.link-item {
    margin: 10px;
}
</style>