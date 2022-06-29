<template>
    <div class="zr-badge">
        <slot></slot>
        <sup v-if="is_dot" class="dot isdot" :class="type"></sup>
        <sup v-else class="dot" :class="type">{{ value > max ? max + '+' : value }}</sup>
    </div>
</template>
<script lang="ts">
export default {
    name: 'zrBadge'
}
</script>
<script lang="ts" setup>
const props = withDefaults(defineProps<
    {
        value: number | string,
        is_dot: boolean,
        max: number,
        type: 'success' | 'warning' | 'info' | 'error' | 'primary'
    }
>(), {
    value: 0,
    is_dot: false,
    type: 'primary',
    max: 99
})
</script>
<style lang="scss" scoped>
.zr-badge {
    display: inline-block;
    position: relative;
    margin-right: 40px;

    .dot {
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        transform: translate(50%, -50%);

        &.isdot {
            height: 12px;
        }

        &.primary {
            background-color: $primary;
        }

        &.success {
            background-color: $success;
        }

        &.warning {
            background-color: $warning;
        }

        &.error {
            background-color: $error;
        }

        &.info {
            background-color: $info;
        }
    }
}
</style>