<template>
    <div class="zr-pop-message" :style="style[type]" v-show="visible">
        <zrIcon :name="style[type].icon" :color="style[type].color" :size="16"></zrIcon>
        <div class="text" v-if="dangerouslyUseHTMLString" v-html="message"></div>
        <span v-else class="text">{{ message }}</span>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
import zrIcon from '../zrIcon/zrIcon.vue';
export default {
    name: "zrMessage",
    components: {
        zrIcon
    },
    //	这个是传值方法，通过父级组件传入提示状态以及提示文本
    //	可以根据不同业务自定义更多的状态
    props: {
        type: {
            type: String,
            default: "success",
        },
        message: {
            type: String,
            default: "登陆成功",
        },
        dangerouslyUseHTMLString: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        //	定义一个对象，包含三种情况的样式，对象key就是类型字符串
        //	icon图标这一部分省略了，有需要的可以自己加入
        const style = {
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
        };
        const visible = ref(false);
        onMounted(() => {
            visible.value = true;
        });
        return { style, visible };
    },
};
</script>

<style lang="less">
//	css样式部分可以根据需求自定义
.zr-message-container {
    position: fixed;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    top: 30px;
}

.zr-pop-message {
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 40px;
    border: 1px solid #e4e4e4;
    background: #f5f5f5;
    color: #999;
    border-radius: 4px;

    .icon {
        margin-top: 2px;
        margin-right: 4px;

    }

    //	以下是过渡动画，如不需要可删去亦可改进
    animation: move 0.38s linear forwards;

    @keyframes move {
        0% {
            transform: translate3d(0, -75px, 0);
            opacity: 0.16;
        }

        50% {
            opacity: 0.68;
        }

        100% {
            transform: none;
            opacity: 1;
        }
    }
}
</style>
