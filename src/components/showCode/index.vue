<template>
    <div class="top-box"><button class="btn-show" @click="visiable = !visiable">显示源码></button></div>
    <div class="code-container">
        <transition name="fade">
            <pre class="code-content" v-show="visiable" v-text="code"></pre>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'showCode'
}
</script>
<script setup>
import { ref } from "@vue/reactivity"

defineProps(['code'])
const visiable = ref(false)
</script>

<style lang="scss" scoped>
.code-container {
    width: 100%;
    margin-top: 10px;
    color: #16080e;
    font-size: 16px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 8px 8px 24px #cecece,
        -8px -8px 24px #f2f2f2;
    overflow-y: scroll;

    .code-content {
        margin: 20px;

    }
}

.top-box {
    padding-bottom: 2px;
    text-align: right;
    border-bottom: 1px solid $main-color;

    .btn-show {
        padding: 0px 30px;
        font-size: 16px;
        border: none;
        color: $main-color;
        border-radius: 5px;

        &:hover {
            box-shadow: 2px 2px 10px #e9c0d3;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>