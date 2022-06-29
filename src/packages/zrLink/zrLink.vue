<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        default: '#'
    },
    types: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    },
    icon_left: {
        type: String,
    },
    icon_right: {
        type: String,
    },
    icon_left_color: {
        type: String,
        default: '#e55472'
    },
    icon_right_color: {
        type: String,
        default: '#e55472'
    },
})
</script>
<script lang="ts" >
export default {
    name: 'zrLink'
}
</script>

<template>
    <a :href="disabled ? to : '#'"
        :class="`zr-link zr-link-${types} ${disabled ? 'disabled' : ''} ${underline ? 'underline' : ''}`">
        <slot name="icon_left">
            <zr-icon v-if="icon_left" :size="14" :name="icon_left" :color="icon_left_color"></zr-icon>
        </slot>
        <slot>ZR-LINK-{{ types.toUpperCase() }}</slot>
        <slot name="icon_right">
            <zr-icon v-if="icon_right" :size="14" :name="icon_right" :color="icon_right_color"></zr-icon>
        </slot>
    </a>
</template>

<style lang="scss" scoped>
@import '../index.scss';
.zr-link {
    padding: 2px;
    font-size: 14px;


    svg {
        vertical-align: middle;
        margin:0 4px;
    }

    &.underline:hover {
        text-decoration: underline;
    }

    &.zr-link-primary {
        color: $primary;
        text-decoration-color: $primary;
    }

    &.zr-link-info {
        color: $info;
        text-decoration-color: $info;
    }

    &.zr-link-success {
        color: $success;
        text-decoration-color: $success;
    }

    &.zr-link-warning {
        color: $warning;
        text-decoration-color: $warning;
    }

    &.zr-link-error {
        color: $error;
        text-decoration-color: $error;
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
}
</style>