<template>
  <div class="zr-empty">
    <img :width="width" :src="src || urls[type]" alt="empty" />
    <p>{{ title }}</p>
    <div class="zr-empty-extra">
      <slot> </slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'zrEmpty'
}
</script>
<script lang="ts" setup>
import zrButton from '../zrButton/zrButton.vue'
import img1 from '../public/img/empty1.png'
import img2 from '../public/img/empty2.png'
import img3 from '../public/img/empty3.png'
withDefaults(
  defineProps<{
    src: string
    type?: number
    title?: string
    width: number
  }>(),
  {
    type: 1,
    title: '暂无数据',
    width: 300
  }
)
const urls = [img1, img2, img3]
</script>
<style lang="scss" scoped>
.zr-empty {
  display: inline-block;
  img {
  }
  p {
    margin: 10px 0;
    text-align: center;
    color: $text-gray;
  }
  .zr-empty-extra {
    text-align: center;
  }
}
</style>
