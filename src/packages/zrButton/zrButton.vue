<template>
    <!-- :style="{ borderRadius: round ? '4px' : '0' }" -->
    <button
        :class="`zr-button zr-button-${types || 'primary'} ${size || 'small'} ${isPlain || false} ${isCircle || false} ${isRound || false}`"
        :disabled="disabled">
        <slot name="icon">
            <zr-icon v-if="icon" :name="icon" :color="icon_color"></zr-icon>
        </slot>
        <slot> ZR-button</slot>
    </button>
</template>

<script lang="ts">
export default {
    name: 'zrButton'
}
</script>
<script setup lang="ts">
import { computed, defineProps, ref } from '@vue/runtime-core'
import zrIcon from '../zrIcon/zrIcon.vue'
const props = defineProps({
    types: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'small'//['medium', 'small', 'mini']
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    plain: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
    },
    icon_color: {
        type: String,
        default: '#ffffff'
    }
})

//是否圆角
const isRound = computed(() => {
    return props.round ? 'is-round' : ''
})
//是否圆形
const isCircle = computed(() => {

    return props.circle ? 'is-circle' : ''
})
//朴素按钮
const isPlain = computed(() => {
    return props.plain ? 'is-plain' : ''

})

</script>

<style lang="scss">
@import '../index.scss';

.zr-button {
    box-sizing: border-box;
    border: none;



    svg {
        padding-right: 6px;
        vertical-align: middle;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover {
        opacity: 0.9;
    }

    &.mini {
        padding: 6px 12px;
    }

    &.small {
        padding: 9px 16px;
    }

    &.medium {
        padding: 12px 22px;
    }

    &.is-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;

    }

    &.is-round {
        border-radius: 4px;
    }
}

.zr-button-primary {
    color: $text-primary;
    background-color: $primary;

    &.is-plain {
        color: $primary;
        border: 1px solid $primary;
        background-color: $shallow-primary;
        opacity: 0.7;

        &:hover {
            color: $text-primary;
            background-color: $primary;
        }
    }
}

.zr-button-success {
    color: $text-primary;
    background-color: $success;

    &.is-plain {
        color: $success;
        border: 1px solid $success;
        background-color: $shallow-success;
        opacity: 0.7;

        &:hover {
            color: $text-primary;
            background-color: $success;
        }
    }
}

.zr-button-info {
    color: $text-primary;
    background-color: $info;

    &.is-plain {
        color: $info;
        border: 1px solid $info;
        background-color: $shallow-info;
        opacity: 0.7;

        &:hover {
            color: $text-primary;
            background-color: $info;
        }
    }
}

.zr-button-error {
    color: $text-primary;
    background-color: $error;

    &.is-plain {
        color: $error;
        border: 1px solid $error;
        background-color: $shallow-error;
        opacity: 0.7;

        &:hover {
            color: $text-primary;
            background-color: $error;
        }
    }
}

.zr-button-warning {
    color: $text-primary;
    background-color: $warning;

    &.is-plain {
        color: $warning;
        border: 1px solid $warning;
        background-color: $shallow-warning;
        opacity: 0.7;

        &:hover {
            color: $text-primary;
            background-color: $warning;
        }
    }
}
</style>
