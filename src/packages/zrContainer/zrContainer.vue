<template>
    <div class="zr-container " :class="{ 'zr-container-content': row }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'zrContainer',
    provide() {
        return {
            zrContainer: this
        }
    },
    data() {
        return {
            row: false
        }
    }
}
</script>


<style lang="scss">


.zr-container {
    flex: 1;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.zr-container-content {
        flex-direction: row !important;
    }
}
</style>
