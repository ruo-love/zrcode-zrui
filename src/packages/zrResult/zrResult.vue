<template>
    <div class="zr-result">
        <div class="zr-result-icon">
            <slot>
                <zrIcon :name="style[type].icon" :color="style[type].color" :size="52" />
            </slot>
        </div>
        <div class="zr-result-title">
            <p>{{ title }}</p>
        </div>
        <div class="zr-result-sub-title">
            <p>{{ sub_title }}</p>
        </div>
        <div class="zr-result-extra" @click="$emit('callback')">
            <slot name="extra">
                <zr-button round size="mini">返回</zr-button>
            </slot>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    emits: ['callback'],
    name: 'zrResult'
}
</script>

<script lang="ts" setup>
import zrButton from '../zrButton/zrButton.vue'
import zrIcon from '../zrIcon/zrIcon.vue'
const props = withDefaults(defineProps<{
    type?: 'success' | 'warning' | 'error' | 'info',
    title?: string,
    sub_title?: string
}>(), {
    type: 'success',
    title: 'Result 提示',
    sub_title: '请根据提示进行操作'
})

const style = {
    success: {
        icon: 'zaixian',
        color: '#26de81'
    },
    warning: {
        icon: 'jingshi',
        color: '#f7b731'
    },
    error: {
        icon: 'guanbi2',
        color: '#fc5c65'
    },
    info: {
        icon: 'jingshi',
        color: '#a5b1c2'
    }
}

</script>

<style lang="scss" scoped>
.zr-result {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 40px 30px;

    p {
        margin: 0;
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
    }

    .zr-result-title,
    .zr-result-sub-title,
    .zr-result-extra {
        margin-top: 20px;
    }
}
</style>