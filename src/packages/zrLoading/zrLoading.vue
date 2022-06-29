<template>
    <teleport to='body'>
        <div class="zr-loading" :style="{ 'backgroundColor': backgroundColor }">
            <div class="zr-loading-content">
                <zrIcon :color="color" class="zr-icon1" :name="icon"></zrIcon>
                <span class="zr-loading-title" :style="{ 'color': color }">{{ title }}</span>
                <zrIcon :color="color" class="zr-icon2" :name="icon"></zrIcon>
            </div>
        </div>
    </teleport>
</template>
<script setup>
import zrIcon from '../zrIcon/zrIcon.vue';
const props = defineProps({
    title: {
        type: String,
        default: 'zr-Loading'
    },
    color: {
        type: String,
        default: '#e55472'
    },
    backgroundColor: {
        type: String,
        default: 'rgba(230, 213, 216, 0.6)'
    },
    icon: {
        type: String,
        default: 'more1'
    },
})
</script>

<script>
export default {
    name: 'zrLoading',
}
</script>
<style lang="scss" scoped>
@import '../index.scss';

.zr-loading {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    .zr-loading-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: center;

        .zr-loading-title {}

        .zr-icon1 {
            animation: loading 2s infinite;
        }

        .zr-icon2 {
            animation: loading 2s reverse infinite;
        }

        @keyframes loading {
            to {
                fill: #fff;
            }
        }
    }
}
</style>