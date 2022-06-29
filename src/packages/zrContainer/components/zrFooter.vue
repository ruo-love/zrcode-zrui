<template>
    <div class="zr-footer">
        <slot>zrFooter</slot>
    </div>
</template>
<script>
export default {
    name: 'zrFooter'
}

</script>
<style lang="scss">
@import '../../index.scss';
.zr-footer {
    min-height: 100px;
    background-color: $bgc-gray;
}
</style>