<template>
    <div class="select-container">
        <ul v-show="visiable" :class="{ 'options-warp': true }">
            <template v-for="(option, index) in options" :key="option.value">
                <li :class="{ 'option': true, 'disabled': option.disabled, 'active': index === current }"
                    :data-values="option.value"
                    @click.stop="selected(option.value, level, option.children, index, $event); changeActive(index);">
                    {{
                            option.label
                    }}
                    <CascaderSelect :level="level + 1" :value="value" v-if="option.children"
                        :visiable="showChildren(option.value)" :options="option.children" @select="selected">
                    </CascaderSelect>
                </li>
            </template>
        </ul>
    </div>
</template>
<script lang="ts">
import { ref } from '@vue/runtime-core'
export default {
    name: 'CascaderSelect'
}
</script>
<script setup lang="ts">
type Options = Array<{
    label: string,
    value: any,
    disabled?: boolean,
    children?: Options
}>
const props = withDefaults(defineProps<{
    options: Options,
    value: any,
    visiable: boolean,
    level: number
}>(), {
    level: 1
})
const emits = defineEmits(['select', 'update:modelValue'])

let showChildren = (val: any) => {
    let res = props.value ? props.value.includes(val) : false
    return res
}
const current = ref()
const selected = (value: any, level: number, children: any, index: number, e: any) => {
    if (e && e.target.getAttribute('class') && e.target.getAttribute('class').split(" ").includes('disabled')) return false
    let data
    if (typeof value === 'object') {
        data = value
    } else {
        data = {
            value,
            level,
            end: children ? false : true
        }
    }
    emits('select', data)
}

const changeActive = (index: number) => {
    current.value = index
}


</script>

<style lang="scss" scoped>
@import '../../index.scss';

.select-container {
    position: relative;

    .options-warp {
        border: 1px solid $text-shallow;
        transform-origin: top center;
        animation: slide_down .4s ease;
        animation-fill-mode: forwards;

        .option {
            cursor: pointer;
            padding: 4px;


            &.disabled {
                cursor: not-allowed;
            }

            .select-container {
                position: absolute;
                right: 0;
                top: 0;
                transform: translateX(100%)
            }
        }

        .option.active {
            color: $primary;
        }

        .option:not(active) {
            color: #000;
        }
    }
}
</style>