<template>
  <transition :name="direction">
    <div class="zr-drawer-container" :style="style[direction]" v-show="visible">
      <div class="zr-drawer" :style="zr_drawer[direction]">
        <div class="zr-drawer-heade">
          <slot name="title"><h4 class="zr-drawer-title">我是标题</h4></slot>
          <span class="zr-drawer-close" @click="handleClose">
            <slot name="close">
              <zr-icon name="close" color="#ccc"></zr-icon>
            </slot>
          </span>
        </div>
        <div class="zr-drawer-body">
          <slot><p>我来了</p></slot>
        </div>
      </div>
      <div v-if="mask_close" class="mask" @click="handleClose"></div>
      <div v-else class="mask"></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
  name: 'zrDrawer'
}
</script>
<script lang="ts" setup>
import zrIcon from '../zrIcon/zrIcon.vue'
const emits = defineEmits(['update:visible', 'close'])
const props = withDefaults(
  defineProps<{
    visible?: boolean
    direction?: 'left' | 'top' | 'bottom' | 'right'
    mask_close?: boolean
  }>(),
  {
    visible: false,
    direction: 'right',
    mask_close: true
  }
)

const handleClose = () => {
  emits('update:visible', false)
  emits('close')
}

const style: any = {
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
}
const zr_drawer: any = {
  left: {
    width: '30%',
    height: '100%'
  },
  right: {
    width: '30%',
    height: '100%'
  },
  top: {
    width: '100%',
    height: '30%'
  },
  bottom: {
    width: '100%',
    height: '30%'
  }
}
</script>
<style lang="scss" scoped>
@import '../index.scss';
.left-enter-active {
  animation: left 0.66s ease-out forwards;
}
/* vue内置设计的动画离开时的名字 */
.left-leave-active {
  /* 隐藏消失的时候，动画时间1s，与定义的方向相反 */
  animation: left 0.66s ease-out reverse forwards;
}

.right-enter-active {
  animation: right 0.66s ease-out forwards;
}
/* vue内置设计的动画离开时的名字 */
.right-leave-active {
  /* 隐藏消失的时候，动画时间1s，与定义的方向相反 */
  animation: right 0.66s ease-out reverse forwards;
}
.top-enter-active {
  animation: top 0.66s ease-out forwards;
}
/* vue内置设计的动画离开时的名字 */
.top-leave-active {
  /* 隐藏消失的时候，动画时间1s，与定义的方向相反 */
  animation: top 0.66s ease-out reverse forwards;
}
.bottom-enter-active {
  animation: bottom 0.66s ease-out forwards;
}
/* vue内置设计的动画离开时的名字 */
.bottom-leave-active {
  /* 隐藏消失的时候，动画时间1s，与定义的方向相反 */
  animation: bottom 0.66s ease-out reverse forwards;
}
@keyframes left {
  0% {
    transform: translateX(-3000px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes right {
  0% {
    transform: translateX(3000px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes top {
  0% {
    transform: translateY(-3000px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes bottom {
  0% {
    transform: translateY(3000px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

.zr-drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  z-index: 2031;

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 22;
    background-color: rgba(128, 128, 128, 0.5);
  }
  .zr-drawer {
    padding: 10px;
    z-index: 2033;
    background-color: #fff;

    .zr-drawer-heade {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .zr-drawer-close {
        cursor: pointer;
      }
    }
    .zr-drawer-body {
      font-size: 14px;
      color: $text-gray;
    }
  }
}
</style>
