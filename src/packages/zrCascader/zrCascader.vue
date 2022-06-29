<template>
    <div class="zr-cascader-container">
        <zrInput :disabled="disabled" clearable :icon="visiableIcon" v-model="modelValue" placeholder="请选择"
            @click="disabled ? '' : expand = !expand" @update:modelValue="$emit('update:modelValue', $event)">
        </zrInput>
        <CascaderSelect :value="modelValue" :visiable="expand" :level="1" :options="options" @select="select">
        </CascaderSelect>
    </div>
</template>
<script>
export default {
    props: ['modelValue', 'disabled', 'options', 'clearable'],
    name: 'zrCascader',
    data() {
        return {
            expand: false
        }
    },
    methods: {
        select(data) {
            if (data.level === 1) {
                this.$emit('update:modelValue', data.value + '/')
                return false
            }
            let resArr = this.$props.modelValue.split('/')
            resArr.splice(data.level - 1)
            resArr.push(data.value)
            this.$emit('update:modelValue', resArr.join('/'))
            data.end && (this.expand = false)
        }
    },
    computed: {
        visiableIcon() {
            if (this.$props.clearable) return ''
            if (this.expand) return 'upper'
            return 'lower'
        }
    }
}
</script>

<script setup>
import CascaderSelect from './components/select.vue'
import zrInput from '../zrInput/zrInput.vue';
const emits = defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
@import '../index.scss';

.zr-cascader-container {
    display: inline-block;
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