<template>
    <div class="demo-container">
        <zr-result @callback="callback" title="自定义回调函数" sub_title="监听callback事件"></zr-result>
        <zr-result type="info" title="默认插槽 自定义icon" sub_title="extra插槽 自定义extra">
            <zr-icon name="kaoqindaka" color="#41b883" :size="52"></zr-icon>
            <template #extra>
                <zr-button types="success" icon="upload">
                    Back
                </zr-button>
            </template>
        </zr-result>
    </div>
    <showCode :code="code"></showCode>
</template>
<script lang="ts" setup>
const callback = () => {

}

const code = `
<div class="demo-container">
   <zr-result @callback="callback" title="自定义回调函数" sub_title="监听callback事件"></zr-result>
   <zr-result type="info" title="默认插槽 自定义icon" sub_title="extra插槽 自定义extra">
       <zr-icon name="kaoqindaka" color="#41b883" :size="52"></zr-icon>
       <template #extra>
           <zr-button types="success" icon="upload">
               Back
           </zr-button>
       </template>
   </zr-result>
</div>
   

const callback = () => {
}
`
</script>
<style scoped>
.demo-container {

    display: flex;
    justify-content: space-around;
}
</style>