<template>
    <div class="icon-demo-container">
        <div class="icon-demo">
            <zr-icon size="32" class="icon-item" name="next"></zr-icon>
            <zr-icon size="32" class="icon-item" name="delete"></zr-icon>
            <zr-icon size="32" class="icon-item" name="switch"></zr-icon>
            <zr-button size="mini" class="btn-icon-item" icon="music"></zr-button>
        </div>
        <showCode :code="code" />
    </div>
</template>
<script setup lang="ts">
const code = `
<div>
    <zr-icon name="next"></zr-icon>
    <zr-icon name="delete"></zr-icon>
    <zr-icon name="switch"></zr-icon>
    <zr-button size="mini" class="btn-icon-item" icon="edit"></zr-button>
</div>
`
</script>

<style lang="scss" scoped>
.icon-demo-container {
    margin-top: 20px;
}

.icon-demo {
    .icon-item {
        margin: 10px;
        vertical-align: middle;
    }

    .btn-icon-item {
        vertical-align: middle;
    }
}
</style>

