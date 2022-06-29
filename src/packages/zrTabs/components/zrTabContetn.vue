<template>
    <ul class="zr-tabs-main">
        <slot></slot>
    </ul>
</template>

<script >
export default {
    name: 'zrTabContetn',
    provide() {
        return {
            content: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../index.scss';
</style>