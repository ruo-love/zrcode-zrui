<template>
    <slot v-if="!head">
        <td
            :style="{ 'width': width + 'px', 'border': border ? '1px solid #ebeef5' : '', 'borderBottom': stripe ? '1px solid #ebeef5' : '' }">
            {{ row[prop] }}</td>
    </slot>
    <td v-else
        :style="{ 'width': width + 'px', 'border': border ? '1px solid #ebeef5' : '', 'borderBottom': stripe ? '1px solid #ebeef5' : '' }">
        {{ label }}</td>
</template>
<script>

export default {
    name: 'zrTableColumn',
    props: {
        prop: {},
        label: {
            default: 'label'
        },
        width: {
            default: 120
        }
    },
    inject: {
        head: {
            type: Boolean,
            default: false
        },
        row: {
            default: null
        },
        border: {},
        stripe: {
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../index.scss';

td {
    display: inline-block;
    text-align: center;
    min-height: 40px;
    line-height: 40px;
    vertical-align: middle;
    color: $text-gray;
}
</style>