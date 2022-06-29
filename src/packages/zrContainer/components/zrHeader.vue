<template>
    <div class="zr-header">
        <slot>zrHeader</slot>
    </div>
</template>
<script>
export default {
    name: 'zrHeader'
}

</script>
<style lang="scss">
@import '../../index.scss';
.zr-header {
    min-height: 100px;
    background-color: $bgc-gray;
}
</style>