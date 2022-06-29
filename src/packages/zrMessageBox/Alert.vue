<template>
    <teleport to='body'>
        <div class="zr-message-box" v-if="live">
            <div class="zr-message-box-content">
                <h4 class="title">{{ title }}</h4>
                <div v-if="html" class="content" v-html="content"></div>
                <div v-else class="content">{{ content }}</div>
                <div class="control">
                    <zrButton round @click="Confirm">{{ confirmButtonText }}</zrButton>
                </div>
            </div>
            <div class="mark"></div>
        </div>
    </teleport>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Alert',
    data() {
        return {
            live: true
        }
    },
    methods: {
        Confirm() {
            this.$props.callback()
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
    callback: {
        type: Function,
        default: () => {
            console.log('callback')
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
    .mark {
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
    }

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
        z-index: 9999;

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
        }

    }
}
</style>