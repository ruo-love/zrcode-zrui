<template>
    <div v-if="visiable" class="zr-alert-warp" :style="style[theme][type]">
        <zrIcon v-if="icon" :name="style[theme][type].icon" :color="style[theme][type].color" :size="16"></zrIcon>
        <div class="zr-alert-content" :class="[center ? 'center' : '']">
            <div class="title"> {{ title || defaultTitle[type] }}</div>
            <div class="description">{{ description }}</div>
        </div>
        <span class="clear" @click="visiable = false">
            <slot>
                <zrIcon name="close" color="#ccc" :size="16"></zrIcon>
            </slot>
        </span>
    </div>
</template>

<script lang="ts">

export default {
    name: 'zrAlert',
    data() {
        return {
            visiable: true,
        }
    }
}
</script>
<script lang="ts" setup>
import zrIcon from '../zrIcon/zrIcon.vue';
withDefaults(defineProps<{
    type?: 'error' | 'success' | 'info' | 'warning',
    theme?: 'light' | 'dark',
    icon?: boolean,
    center?: boolean,
    title?: string,
    description?: string,
}>(), {
    type: 'success',
    theme: 'light',
    icon: false,
    center: false,
})

const style = {
    light: {
        warning: {
            icon: "alert",
            color: "#f7b731",
            backgroundColor: "rgba(247, 183, 49,0.15)",
            borderColor: "rgba(247, 183, 49,0.1)",
        },
        error: {
            icon: "chahao",
            color: "#fc5c65",
            backgroundColor: "rgba(252, 92, 101,0.15)",
            borderColor: "rgba(252, 92, 101,0.1)",
        },
        success: {
            icon: "duihao",
            color: "#26de81",
            backgroundColor: "rgba(38, 222, 129,0.15)",
            borderColor: "rgba(38, 222, 129,0.1)",
        },
        info: {
            icon: "news",
            color: "#a5b1c2",
            backgroundColor: "rgba(165, 177, 194,0.15)",
            borderColor: "rgba(165, 177, 194,0.1)",
        },
    },
    dark: {
        warning: {
            icon: "alert",
            color: "#fff",
            backgroundColor: "rgb(247, 183, 49)",
            borderColor: "rgb(247, 183, 49)",
        },
        error: {
            icon: "chahao",
            color: "#fff",
            backgroundColor: "rgb(252, 92, 101)",
            borderColor: "rgb(252, 92, 101)",
        },
        success: {
            icon: "duihao",
            color: "#fff",
            backgroundColor: "rgb(38, 222, 129)",
            borderColor: "rgb(38, 222, 129)",
        },
        info: {
            icon: "news",
            color: "#fff",
            backgroundColor: "rgb(165, 177, 194)",
            borderColor: "rgb(165, 177, 194)",
        },
    }
};
const defaultTitle = {
    success: '成功提示的文案',
    error: '错误提示的文案',
    info: '消息提示的文案',
    warning: '警告提示的文案'
}
</script>

<style lang="scss" scoped>
.zr-alert-warp {
    width: 400px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 4px;

    .zr-alert-content {
        margin-left: 10px;
        flex: 1;

        .description {
            font-size: 12px;
        }

        &.center {
            text-align: center;
        }
    }

    .clear {
        cursor: pointer;
        height: 16px;

    }
}
</style>