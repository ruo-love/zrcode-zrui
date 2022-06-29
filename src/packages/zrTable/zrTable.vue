<template>
    <table cellspacing="0" cellpadding="0" border="0">
        <zr-table-th :stripe="stripe" :border="border">
            <slot></slot>
        </zr-table-th>
        <div :class="{ 'tbody-warp': true, 'tbody-warp-fixed': fixed }">
            <tbody>
                <zr-table-tr v-for="(row, index) in data" :row="row" :stripe="stripe"
                    :row_class_name="row_class_name({ row, rowIndex: index })" :border="border" :key="index">
                    <slot></slot>
                </zr-table-tr>
            </tbody>
        </div>
    </table>
</template>
<script>
import zrTableHead from './components/zrTableTh.vue'
export default {
    components: { zrTableHead },
    name: 'zrTable',
    props: {
        data: {},
        stripe: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: false
        },
        row_class_name: {
            type: Function,
            default: () => 'default-row'
        },
        fixed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
.tbody-warp-fixed {
    height: 200px;
    overflow-y: scroll;
}
</style>