<template>
    <div class="zr-tree-warp">
        <tree-item :data="data" :show_checkbox="show_checkbox" :change="change"></tree-item>
    </div>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
    name: 'zrTree'
}
</script>


<script setup lang="ts">
import zrIcon from '../zrIcon/zrIcon.vue';
const props = defineProps({
    data: {
        type: Array,
        default: []
    },
    show_checkbox: {
        type: Boolean,
        default: false
    },
    change: {
        type: Function,
        default: () => null
    },
})

</script>
<style lang="scss" scoped>
.zr-tree-warp {}
</style>