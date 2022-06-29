<template>
    <div :class="{ 'zr-input-box': true }">
        <input :autofocus="autofocus" v-if="inputType != 'textarea'" :class="{ 'zr-input': true }" :value="modelValue"
            :disabled="disabled" :placeholder="placeholder" :type="inputType" @input="toUpdate" :minlength="min"
            :maxlength="max" @blur="$emit('blur', modelValue)" @focus="$emit('focus', modelValue)">
        <textarea v-else :autofocus="autofocus" :class="{ 'zr-input': true, 'zr-textarea': true }" :value="modelValue"
            :disabled="disabled" :placeholder="placeholder" @input="toUpdate" :minlength="min" :maxlength="max"
            @blur="$emit('blur', modelValue)" @focus="$emit('focus', modelValue)"></textarea>
        <zr-icon class="right-icon" v-if="icon" :name="icon" :color="icon_color" :size="20"></zr-icon>
        <span class="limit" v-show="max">{{ modelValue && modelValue.toString().length + '/' + max }}</span>
        <span class="clearable" v-show="allowClear" @click="$emit('update:modelValue', '')">x</span>
        <span class="say" v-show="type === 'password'" @click="showPassword = !showPassword">👁</span>
    </div>
</template>

<script lang="ts">
import { computed, ref } from '@vue/runtime-core'

export default {
    name: 'zrInput'
}
enum Types {
    number = 'number',
    text = 'text',
    password = 'password',
    textarea = 'textarea'

}
</script>
<script setup lang="ts">
import zrIcon from '../zrIcon/zrIcon.vue'
const props = withDefaults(defineProps<{
    modelValue: string | number
    placeholder?: string,
    disabled?: boolean,
    clearable?: boolean,
    type?: Types,
    icon?: string,
    icon_color?: string,
    min?: number,
    max?: number,
    autofocus?: boolean
}>(),
    {
        modelValue: '',
        placeholder: '请输入内容',
        disabled: false,
        clearable: true,
        type: Types.text,
        icon_color: '#ccc',
        min: 0,
        autofocus: false
    })

const emits = defineEmits(['update:modelValue', 'blur', 'focus'])
const allowClear = computed(() => props.clearable && props.type != 'number' && !props.icon && !props.max && props.type != 'password' && props.modelValue.toString().length > 0)
const showPassword = ref(false)
const inputType = computed(() => {
    switch (props.type) {
        case 'password':
            let v = showPassword.value ? 'password' : 'text'
            return v
        case 'number':
            return 'number'
        case 'textarea':
            return 'textarea'
        default:
            return 'text'

    }
}
)
const toUpdate = (event: any) => {
    emits('update:modelValue', event.target.value)
}



</script>
<style lang="scss" scoped>
@import '../index.scss';

.zr-input-box {
    position: relative;
    display: inline-block;
    overflow: hidden;

    .zr-input {
        width: 200px;
        padding-left: 10px;
        height: 36px;
        outline: none;
        border: 1px solid $text-shallow;
        font-size: 14px;
        color: $text-shallow-gray;
        border-radius: 4px;
        overflow: hidden;

        &:focus {
            border-color: $primary;
            ;
        }

        &:disabled {
            cursor: not-allowed;
        }
    }

    .zr-textarea {
        width: 300px;
        height: 150px;
    }

    .clearable {
        position: absolute;
        cursor: pointer;
        right: 4px;
        top: 50%;
        width: 14px;
        height: 14px;
        text-align: center;
        line-height: 14px;
        font-size: 14px;
        border-radius: 50%;
        border: 1px solid $text-shallow;
        transform: translateY(-50%);
        color: $text-shallow;
    }

    .say {
        position: absolute;
        cursor: pointer;
        right: 4px;
        top: 50%;
        width: 14px;
        height: 14px;
        text-align: center;
        line-height: 14px;
        font-size: 14px;
        border-radius: 50%;
        border: 1px solid $text-shallow;
        transform: translateY(-50%);
        color: $text-shallow;
    }

    .right-icon {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
    }

    .limit {
        position: absolute;
        right: 4px;
        bottom: 0;
        font-size: 12px;
        color: $text-shallow-gray;
    }

}
</style>