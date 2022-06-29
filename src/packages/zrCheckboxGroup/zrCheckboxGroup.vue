<template>
    <div :class="{ 'zr-checkbox-container': true, 'zr-checkbox-button': button, 'zr-checkbox-border': border }">
        <label :class="{ 'zr-checkbox': true, 'active': checked(checkbox.value) }" v-for="checkbox in data"
            :key="checkbox.value">
            <span :class="{ 'zr-checkbox-input': true, 'active': checked(checkbox.value) }">
                <input type="checkbox" :value="checkbox.value" :name="name" :checked="checked(checkbox.value)"
                    @change="toUpdate(checkbox.value, $event)">
            </span>
            <span class="zr-checkbox-label">{{ checkbox.label }}</span>
        </label>
    </div>
</template>
<script lang="ts">
import { computed, defineProps, ref } from '@vue/runtime-core'

export default {
    name: 'zrCheckboxGroup'
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{
    name: string,
    modelValue: Array<any>,
    data: Array<{ value: any, label: string | number }>,
    min?: number,
    max?: number,
    border?: boolean,
    button?: boolean
}>(), { min: 0, max: 999 })
const emits = defineEmits(['update:modelValue'])
const toUpdate = (val: any, e: any) => {

    if (props.modelValue.length >= props.min && props.modelValue.length <= props.max) {
        if (e.target.checked) {
            if (props.modelValue.length == props.max) {
                e.target.checked = !e.target.checked

                return false
            }
            let newVal = [...new Set(props.modelValue)]
            newVal.push(val)
            emits('update:modelValue', newVal)
        } else if (!(e.target.checked)) {
            if (props.modelValue.length == props.min) {
                e.target.checked = !e.target.checked

                return false
            }
            let newVal = [...new Set(props.modelValue)]
            newVal = newVal.filter(v => v != val)
            emits('update:modelValue', newVal)
        }
    } else {
        e.target.checked = !e.target.checked
    }

}
const checked = computed((res: any) => (res: any) => props.modelValue.includes(res))

</script>

<style lang="scss" scoped>
@import '../index.scss';

.zr-checkbox-container {
    .zr-checkbox {
        .zr-checkbox-input {
            input {
                display: none;

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            }

            &::after {
                margin: 0 5px;
                content: '√';
                display: inline-block;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                font-size: 12px;
                border: 1px solid $primary;
                border-radius: 4px;
                color: #fff;
            }

            &.active {
                &::after {
                    background-color: $primary;
                }
            }

            &.disabled {
                background-color: #fff;
            }


        }

        .zr-checkbox-label {
            vertical-align: middle;
            color: $text-gray;
        }

    }

    &.zr-checkbox-button {
        display: inline-block;
        border: 1px solid $text-shallow;
        border-radius: 4px;

        .zr-checkbox {
            box-sizing: border-box;
            display: inline-block;
            width: 70px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            color: $text-gray;
            border-right: 1px solid;
            z-index: 999;
            background-color: #fff;
            border-right: 1px solid $text-shallow;

            &:last-child {
                border-right: 0;
            }

            .zr-checkbox-input {
                &::after {
                    display: none;
                }


            }

            &.active {
                background-color: $primary;

                .zr-checkbox-label {
                    color: #fff;
                }
            }
        }
    }

    &.zr-checkbox-border {
        display: inline-block;
        // border: 1px solid $text-shallow;
        border-radius: 4px;

        .zr-checkbox {
            box-sizing: border-box;
            display: inline-block;
            width: 70px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            color: $text-gray;
            border-right: 1px solid;
            z-index: 999;
            background-color: #fff;
            border: 1px solid $text-shallow;

            &:last-child {
                border-right: 0;
            }

            .zr-checkbox-input {
                &::after {
                    display: none;
                }


            }

            &.active {
                margin-left: -1px;
                border: 1px solid $primary;

                .zr-checkbox-label {
                    color: $primary;
                }
            }
        }
    }
}
</style>