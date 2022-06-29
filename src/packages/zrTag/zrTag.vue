<template>
    <span class="zr-tag" :class="[typeClass, size, theme]">
        <slot>tag标签</slot>
        <i v-show="clear" class="clear" @click="$emit('clear')">×</i>
    </span>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core'
enum Type {
    success = 'success',
    warning = 'warning',
    error = 'error',
    primary = 'primary',
    info = 'info'
}
enum Size {
    mini = 'mini',
    small = 'small',
    medium = 'medium'
}
export default {
    name: 'zrTag',
}
</script>
<script setup lang="ts">

const props = withDefaults(defineProps<{
    type?: Type,
    clear?: boolean,
    size?: Size,
    theme?: 'dark' | 'plain'
}>(), { type: Type.primary, size: Size.small, theme: 'plain' })
defineEmits(['clear'])
const typeClass = computed(() => {
    switch (props.type) {
        case 'success':
            return 'zr-tag-success';
        case 'warning':
            return 'zr-tag-warning';
        case 'error':
            return 'zr-tag-error';
        case 'info':
            return 'zr-tag-info';
        default:
            return 'zr-tag-primary'
    }
})
</script>

<style lang="scss" scoped>
@import '../index.scss';

.zr-tag {
    box-sizing: border-box;
    display: inline-block;
    margin: 10px;
    border-radius: 4px;
    font-size: 12px;

    .clear {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        vertical-align: middle;
        border-radius: 50%;
        cursor: pointer;
    }

    &.mini {
        height: 20px;
        line-height: 20px;
        padding: 0 4px;
    }

    &.small {
        height: 26px;
        line-height: 26px;
        padding: 0 8px;
    }

    &.medium {
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
    }

    &.zr-tag-success {
        border: 1px solid $success;
        background-color: $shallow-success;
        color: $success;

        &.dark {
            background-color: $success;
            color: #fff;
        }

        .clear {
            color: $success;

            &:hover {
                background-color: $success;
                color: #fff;
            }

        }
    }

    &.zr-tag-warning {
        border: 1px solid $warning;
        background-color: shallow-warning;
        color: $warning;

        &.dark {
            background-color: $warning;
            color: #fff;
        }

        .clear {
            color: $warning;

            &:hover {
                background-color: $warning;
                color: #fff;
            }

        }
    }

    &.zr-tag-error {
        border: 1px solid $error;
        background-color: shallow-error;
        color: $error;

        &.dark {
            background-color: $error;
            color: #fff;
        }

        .clear {
            color: $error;

            &:hover {
                background-color: $error;
                color: #fff;
            }

        }
    }

    &.zr-tag-info {
        border: 1px solid $info;
        background-color: shallow-info;
        color: $info;

        &.dark {
            background-color: $info;
            color: #fff;
        }

        .clear {
            color: $info;

            &:hover {
                background-color: $info;
                color: #fff;
            }

        }
    }

    &.zr-tag-primary {
        border: 1px solid $primary;
        background-color: shallow-primary;
        color: $primary;

        &.dark {
            background-color: $primary;
            color: #fff;
        }

        .clear {
            color: $primary;

            &:hover {
                background-color: $primary;
                color: #fff;
            }

        }
    }
}
</style>