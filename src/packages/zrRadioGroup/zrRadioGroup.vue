<template>
    <div :class="`zr-radio-group ${zrRadioButton}`">
        <label :class="`zr-radio ${zrRadioButton} ${zrRadioBorder} ${radio.value == modelValue ? 'active' : ''}`"
            v-for="radio in radioList" :key="radio.value">
            <span class="zr-radio-input">
                <input :disabled="radio.disabled || false" type="radio" :name="name" :value="radio.value"
                    :checked="modelValue === radio.value" @change="$emit('update:modelValue', radio.value)">
            </span>
            <span class="zr-radio-label">
                <slot>{{ radio.label || 'zr-Radio' }}</slot>
            </span>
        </label>
    </div>
</template>
<script lang="ts">
import { computed, ref } from '@vue/runtime-core'

export default {
    name: 'zrRadioGroup'
}
</script>
<script setup lang="ts">

const props = defineProps<{
    modelValue: any,
    name: string,
    radioList: Array<{ label: string, value: any, disabled?: boolean }>
    button?: boolean,
    border?: boolean
}>()
defineEmits(['update:modelValue'])


let zrRadioButton = computed(() => props.button ? 'zrRadioButton' : '')
let zrRadioBorder = computed(() => props.border ? 'zrRadioBorder' : '')

</script>

<style lang="scss" scoped>
@import '../index.scss';

.zr-radio-group {
    display: inline-block;
    box-sizing: border-box !important;
    margin: 0 20px;
    height: 42px;



    .zr-radio {
        font-size: 14px;
        line-height: 1;



        .zr-radio-input {
            display: inline-block;
            margin: 0 4px;
            position: relative;
            vertical-align: middle;
            cursor: pointer;
            width: 14px;
            height: 14px;
            outline: none;
            border-radius: 50%;
            border: 1px solid $primary;


            input[type="radio"] {
                margin: 0;
                vertical-align: middle;
                display: none;

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }

                &:checked {
                    opacity: 1;

                    &::before {
                        background-color: $primary;
                    }
                }



            }


        }

        &.active .zr-radio-input {
            &::before {
                content: '√';
                position: absolute;
                left: -1px;
                top: -1px;
                display: inline-block;
                width: 14px;
                height: 14px;
                line-height: 14px;
                font-size: 12px;
                color: #fff;
                background-color: $primary;
                text-align: center;
                border-radius: 50%;
                border: 1px solid $primary;
            }
        }

        .zr-radio-label {
            vertical-align: bottom;
            color: $text-gray;
        }

        &.zrRadioButton {
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

            &.zrRadioButton:last-child {
                border-right: none;
            }

            .zr-radio-input {
                z-index: -88;
            }

            .zr-radio-label {
                margin-left: -20px;
            }

            &.active {
                .zr-radio-label {
                    color: #fff;
                }
            }
        }

        &.zrRadioButton.active {
            color: $text-primary;
            background-color: $primary;

        }

        &.zrRadioBorder {
            box-sizing: border-box;
            display: inline-block;
            margin: 0 10px;
            width: 70px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            color: $text-gray;
            z-index: 999;
            background-color: #fff;
            border: 1px solid $text-shallow;
            border-radius: 4px;

            .zr-radio-input {
                line-height: 100%;
            }

            &.active {
                border: 1px solid $primary;

                &.zr-radio-label {
                    color: #fff;
                }
            }


        }
    }

    &.zrRadioButton {
        border: 1px solid $text-shallow;
        border-radius: 10px;
        overflow: hidden;
    }
}
</style>