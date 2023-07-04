<template>
  <div>
    <zr-button @click="openApi">toAlert Api</zr-button>
    <zr-button @click="openFun">toAlert</zr-button>
  </div>
  <showCode :code="code"></showCode>
</template>
<script>
export default {
  methods: {
    openApi() {
      this.$toAlert({
        title: "我是自定义title",
        content:
          "我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content render(vnode, div); render(vnode, div);",
        confirmButtonText: "完成",
        callback: () => {
          zrMessage({ type: "success", message: "点击了确认", duration: 1000 })
        }
      })
    }
  }
}
</script>

<script setup>
import { zrMessage, toAlert } from "@zrcode/zrui/zrui"
const openFun = () => {
  toAlert({
    title: "我是自定义title",
    content:
      "我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content render(vnode, div); render(vnode, div);",
    confirmButtonText: "完成",
    callback: () => {
      zrMessage({ type: "success", message: "点击了确认", duration: 1000 })
    }
  })
}

const code = `
<div>
    <zr-button @click="openApi">toAlert Api</zr-button>
    <zr-button @click="openFun">toAlert</zr-button>
</div>


export default {
    methods: {
        openApi() {
            this.$toAlert({
                title: '我是自定义title',
                content: '我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content render(vnode, div); render(vnode, div);',
                confirmButtonText: '完成',
                callback: () => {
                    zrMessage({ type: "success", message: "点击了确认", duration: 1000 },)
                }
            })
        }
    }
}


import { zrMessage,toAlert } from '@zrcode/zrui/zrui'
const openFun = () => {
    toAlert({
        title: '我是自定义title',
        content: '我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content我是自定义content render(vnode, div); render(vnode, div);',
        confirmButtonText: '完成',
        callback: () => {
            zrMessage({ type: "success", message: "点击了确认", duration: 1000 },)
        }
    })
}
`
</script>
<style scoped>
.zr-button {
  margin-right: 10px;
}
</style>
