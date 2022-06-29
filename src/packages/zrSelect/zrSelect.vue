<template>
    <div class="zr-select-container">
        <zrInput :disabled="disabled" clearable v-model="modelValue" :icon="visiableIcon" placeholder="请选择"
            @click="toShow" @blur="blur" @update:modelValue="$emit('update:modelValue', $event)">
        </zrInput>
        <ul :class="{ 'options-warp': true }" @click="selected" style="display:none">
            <li v-for="option in options" :key="option.value" :class="{ 'option': true, 'disabled': option.disabled }"
                :data-values="option.value">{{ option.label
                }}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'

export default {
    name: 'zrSelect'
}
</script>

<script lang="ts" setup>
import zrInput from '../zrInput/zrInput.vue';
type Options = Array<{
    label: string,
    value: any,
    disabled: boolean
}>
const props = withDefaults(defineProps<{
    modelValue: any,
    disabled?: boolean,
    options: Options,
    clearable?: boolean,
    multiple?: boolean
}>(), { disabled: false })
const emits = defineEmits(['update:modelValue'])
const visiable = ref(false)
const selected = (e: any) => {
    if (e.target.getAttribute('class').split(" ").includes('disabled')) return false
    let value = e.target.getAttribute('data-values')
    emits('update:modelValue', value)
    visiable.value = false
    currentNode.value.style.display = currentNode.value.style.display === "none" ? 'block' : 'none'
}
const blur = () => {

    setTimeout(() => {
        currentNode.value && (currentNode.value.style.display = 'none')
        visiable.value = false
    }, 300)
}
let currentNode = ref()
const toShow = (e: any) => {
    currentNode.value = e.path[1].nextElementSibling
    currentNode.value.style.display = currentNode.value.style.display === "none" ? 'block' : 'none'
    !props.disabled && (visiable.value = !visiable.value)

}
const visiableIcon = computed(() => {
    if (props.clearable) return ''
    if (visiable.value) return 'upper'
    return 'lower'
})
onMounted(() => {
    if (!props.modelValue) {
        emits('update:modelValue', props.options[0].value)
    }
})
</script>

<style scoped lang="scss">
@import '../index.scss';

.zr-select-container {
    display: inline-block;

    .options-warp {
        border: 1px solid $text-shallow;
        transform-origin: top center;
        overflow: hidden;
        animation: slide_down .4s ease;
        animation-fill-mode: forwards;

        .option {
            cursor: pointer;
            padding: 4px;

            &.disabled {
                cursor: not-allowed;
            }
        }
    }

}


@keyframes slide_down {
    from {
        transform: scale(1, 0);
        opacity: 0;
    }

    to {
        transform: scale(1, 1);
        opacity: 1;
    }

}
</style>