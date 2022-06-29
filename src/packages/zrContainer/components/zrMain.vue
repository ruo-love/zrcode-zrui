<template>
    <div class=" zr-main">
        <slot> zrMain</slot>
    </div>
</template>
<script>
export default {
    name: 'zrMain'
}

</script>
<style lang="scss">
@import '../../index.scss';

.zr-main {
    flex: 1;
    background-color: $bgc-primary;
}
</style>