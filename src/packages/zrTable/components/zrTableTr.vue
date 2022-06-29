<template>
    <tr :class="`zr-tr ${row_class_name}`">
        <slot></slot>
    </tr>
</template>
<script>
export default {
    name: 'zrTableTr',
    props: ['row', 'border', 'status', 'row_class_name', 'stripe'],
    provide() {
        return {
            head: false,
            row: this.row,
            border: this.border,
            stripe: this.stripe,
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../index.scss';


.zr-tr {
    background-color: v-bind(status);
}

.default-row {
    background-color: #fff;
}

.warning-row {
    background-color: $warning;
    opacity: 0.7;
}

.success-row {
    background-color: $success;
    opacity: 0.7;
}

.error-row {
    background-color: $error;
    opacity: 0.7;
}
</style>