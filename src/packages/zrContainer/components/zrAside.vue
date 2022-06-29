<template >
    <div class="zr-aside">
        <slot> zrAside</slot>
    </div>
</template>
<script>
export default {
    name: 'zrAside',
    inject: {
        zrContainer: {
            default: ''
        }
    },
    created() {
        this.zrContainer.row = true
    }
}

</script>
<style lang="scss">
@import '../../index.scss';

.zr-aside {
    width: 200px;
    background-color: $bgc-shallow;
}
</style>