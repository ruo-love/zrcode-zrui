<template>
    <div v-if="live" class="zr-notification">
        <div class="zr-notification-content">
            <div class="head">
                <zrIcon :name="style[type].icon" :color="style[type].color" :size="16"></zrIcon>
                <h4>{{ title }}</h4>
                <zrIcon class="close" name="close" :size="16" color="#ccc" @click="Close"></zrIcon>
            </div>
            <div v-if="html" v-html="content" class="content">
            </div>
            <div v-else class="content">
                {{ content }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zrNotification',
    data() {
        return {
            live: true
        }
    },
    methods: {
        Close() {
            this.$props.callback()
            this.live = false
            this.clearDom()
        }
    }
}
</script>
<script setup>
import zrIcon from '../zrIcon/zrIcon.vue';
defineProps({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    type: {
        type: String,
    },
    callback: {
        type: Function,
        default: () => {
            console.log('callbakc')
        }
    },
    clearDom: {
        type: Function,
        default: () => {
            console.log('callbakc')
        }
    },
    html: {
        type: Boolean,
        default: false
    }
})
const style = {
    warning: {
        icon: "alert",
        color: "#f7b731",
    },
    error: {
        icon: "chahao",
        color: "#fc5c65",
    },
    success: {
        icon: "duihao",
        color: "#26de81",
    },
    info: {
        icon: "news",
        color: "#a5b1c2",
    },
}
</script>
<style lang="scss" >
.zr-notify-container-right-top {
    position: fixed;
    right: 20px;
    top: 50px;
}

.zr-notify-container-left-top {
    position: fixed;
    left: 20px;
    top: 50px;
}

.zr-notify-container-left-bottom {
    position: fixed;
    left: 20px;
    bottom: 50px;
}

.zr-notify-container-right-bottom {
    position: fixed;
    right: 20px;
    bottom: 50px;
}


.zr-notification {
    margin-bottom: 4px;
    box-sizing: border-box;
    padding: 10px;
    max-width: 400px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: rgb(253, 248, 248);
    box-shadow: 0 2px 20px 5px rgb(0 0 0 / 10%);
    //	以下是过渡动画，如不需要可删去亦可改进
    animation: move 0.4s linear forwards;

    .zr-notification-content {
        .head {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            h4 {
                margin: 0 4px;
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .close {
                cursor: pointer;
            }
        }

        .content {
            margin-top: 8px;
            font-size: 14px;
            color: #606266;
        }
    }

}



@keyframes move {
    0% {
        transform: translate3d(420px, 0, 0);
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
</style>