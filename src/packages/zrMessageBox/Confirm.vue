<template>
    <teleport to='body'>
        <div class="zr-message-box" v-if="live">
            <div class="zr-message-box-content">
                <h4 class="title">{{ title }}</h4>
                <div v-if="html" class="content" v-html="content"></div>
                <div v-else class="content">{{ content }}</div>
                <div class="control">
                    <zrButton types="warning" size="mini" round @click="Cancel">{{ cancelButtonText }}</zrButton>
                    <zrButton types="success" size="mini" round @click="Confirm">{{ confirmButtonText }}</zrButton>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Confirm',
    data() {
        return {
            live: true
        }
    },
    methods: {
        Confirm() {
            this.$props.confirm()
            this.live = false
        },
        Cancel() {
            this.$props.cancel()
            this.live = false
        }
    }
}
</script>
<script setup>
import zrButton from '../zrButton/zrButton.vue'
const props = defineProps({
    title: {
        type: String,
        deflault: '标题名称'
    },
    content: {
        type: String,
        default: '这是一段内容'
    },
    confirmButtonText: {
        type: String,
        default: '确定'
    },
    cancelButtonText: {
        type: String,
        default: '取消'
    },
    confirm: {
        type: Function,
        default: () => {
            console.log('confirm')
        }
    },
    cancel: {
        type: Function,
        default: () => {
            console.log('cancel')
        }
    },
    html: {
        type: Boolean,
        deflault: false
    }
})
const target = ref(true)

</script>
<style lang="scss" scoped>
@import '../index.scss';

.zr-message-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: .5;
    background: #000;

    .zr-message-box-content {
        padding: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #fff;
        border-radius: 4px;

        .title {
            color: #000;
        }

        .content {
            margin: 4px 0;
            color: $text-shallow-gray;
            font-size: 14px;
        }

        .control {
            align-self: flex-end;

            .zr-button {
                margin-left: 10px;
                font-size: 12px;
            }
        }

    }
}
</style>