<script lang="ts">
import { computed } from '@vue/runtime-core'
export default {
    name: 'zrSwitch'
}
</script>
<script lang="ts" setup>
interface propsObject {
    [key: string]: any
}
const props: propsObject = withDefaults(defineProps<{
    modelValue: boolean | string | number,
    left_text?: string,
    right_text?: string,
    inactive_value?: string | number | boolean,
    active_value?: string | number | boolean,
    disabled?: false
}>(), { modelValue: false })
const emits = defineEmits(['update:modelValue'])
const diy_value = computed(() => props.active_value && props.inactive_value)
const isActive = computed((value: string) => (value: string) => {
    {
        if (diy_value.value) {
            return props.modelValue === props[value]
        } else {
            return value === 'inactive_value' ? !props.modelValue : props.modelValue
        }
    }
})
const change = () => {
    if (props.disabled) return
    if (diy_value.value) {
        let value = props.modelValue === props.active_value ? props.inactive_value : props.active_value
        emits('update:modelValue', value)
    } else {
        emits('update:modelValue', !props.modelValue)
    }

}
</script>
<template>
    <div class="zr-switch" :class="disabled ? 'disabled' : ''">
        <span class="left_text" :class="{ 'active': isActive('inactive_value') }">{{
                left_text
        }}</span>
        <span class="switch" :class="{ 'closed': isActive('active_value') }" @click="change"></span>
        <span class="right_text" :class="{ 'active': isActive('active_value') }">{{
                right_text
        }}</span>
    </div>
</template>
<style lang="scss" scoped>
@import '../index.scss';

.zr-switch {
    display: inline-block;
    display: flex;
    cursor: pointer;

    &.disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    .right_text,
    .left_text {
        font-size: 14px;
        color: $text-gray;

        &.active {
            color: $primary;
        }
    }

    .switch {
        position: relative;
        box-sizing: border-box;
        display: block;
        width: 40px;
        height: 20px;
        margin: 0 4px;
        background-color: $error;
        border-radius: 10px;
        transition: all 1s;

        &::after {
            content: '';
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-left: 2px;
            vertical-align: middle;
            background-color: #fff;
            border-radius: 50%;
            transition: all 0.3s;
        }
    }

    .switch.closed::after {
        margin-left: 21px;
    }

    .switch.closed {
        background-color: $success;
        transition: all 1s;
    }
}
</style>